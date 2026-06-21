'use client';

import dynamic from 'next/dynamic';

const PdfViewer = dynamic(() => import('./PdfViewer'), { ssr: false });

export default function ResumeClient() {
  return (
    <div style={{
      padding: 'clamp(40px,5vw,72px) var(--pad-x)',
      backgroundColor: 'var(--paper-deep)',
      minHeight: '80vh',
    }}>
      <div style={{ maxWidth: '860px', margin: '0 auto' }}>
        <PdfViewer url="/Tooba_Ameer_CV.pdf" />
      </div>
    </div>
  );
}
