'use client';

import { useState, useCallback } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

// Point pdfjs to a CDN worker — avoids Turbopack new URL() issues
pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export default function PdfViewer({ url }) {
  const [numPages, setNumPages] = useState(null);
  const [pageWidth, setPageWidth] = useState(800);

  const containerRef = useCallback((node) => {
    if (node) {
      setPageWidth(node.getBoundingClientRect().width);
    }
  }, []);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div ref={containerRef} style={{ width: '100%' }}>
      <Document
        file={url}
        onLoadSuccess={onDocumentLoadSuccess}
        loading={
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: '80px 0',
            fontFamily: 'var(--body)', fontSize: '13px',
            letterSpacing: '.1em', textTransform: 'uppercase',
            color: 'var(--muted)',
          }}>
            Loading…
          </div>
        }
        error={
          <div style={{
            padding: '40px 0',
            fontFamily: 'var(--body)', fontSize: '14px',
            color: 'var(--muted)',
          }}>
            Could not load PDF. <a href={url} download style={{ color: 'var(--ink)' }}>Download instead →</a>
          </div>
        }
      >
        {Array.from({ length: numPages || 0 }, (_, i) => (
          <div
            key={i}
            style={{
              marginBottom: i < (numPages - 1) ? '2px' : 0,
              boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
            }}
          >
            <Page
              pageNumber={i + 1}
              width={pageWidth}
              renderAnnotationLayer={false}
              renderTextLayer={false}
            />
          </div>
        ))}
      </Document>
    </div>
  );
}
