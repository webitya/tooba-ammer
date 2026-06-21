import ResumeClient from './ResumeClient';

export const metadata = {
  title: 'CV — Tooba Ameer',
  description: 'CV of Tooba Ameer — Design & Development Manager',
};

export default function Resume() {
  return (
    <main>
      {/* Action bar */}
      <div style={{
        display: 'flex',
        gap: '12px',
        padding: '20px var(--pad-x)',
        borderBottom: '1px solid var(--hairline)',
        backgroundColor: 'var(--paper)',
      }}>
        <a
          href="/Tooba_Ameer_CV.pdf"
          download="Tooba_Ameer_CV.pdf"
          style={{
            display: 'inline-block',
            padding: '12px 28px',
            backgroundColor: 'var(--ink)',
            color: 'var(--paper)',
            textDecoration: 'none',
            fontFamily: 'var(--body)',
            fontSize: '12px',
            fontWeight: '500',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
          }}
        >
          Download CV
        </a>
        <a
          href="https://www.linkedin.com/in/tooba-ameer"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            padding: '12px 28px',
            backgroundColor: 'transparent',
            color: 'var(--ink)',
            textDecoration: 'none',
            fontFamily: 'var(--body)',
            fontSize: '12px',
            fontWeight: '500',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            border: '1px solid var(--hairline)',
          }}
        >
          LinkedIn
        </a>
      </div>

      {/* PDF rendered cleanly — no browser toolbar */}
      <ResumeClient />
    </main>
  );
}
