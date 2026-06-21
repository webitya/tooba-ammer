import Link from 'next/link';
import './globals.css';

export const metadata = {
  title: 'Tooba Ameer — Portfolio',
  description: 'Tooba Ameer — Design & Development Manager',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Geist:wght@300..600&family=Newsreader:ital,opsz,wght@0,6..72,400..500;1,6..72,400..500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <nav className="nav">
          <Link href="/" className="logo">
            Tooba Ameer
          </Link>
          <div className="links">
            <Link href="/#work">Work</Link>
            <Link href="/about">About</Link>
            <Link href="/resume">CV</Link>
            <Link href="/contact" className="nav-btn">
              Get in Touch
            </Link>
          </div>
        </nav>

        {children}

        <section className="connect-band">
          <div className="container">
            <span className="label">Connect</span>
            <p className="connect-line">
              Hiring or curious — <br />
              <a href="mailto:hello@toobaameer.co.uk">hello@toobaameer.co.uk</a>
            </p>
            <p className="availability">
              UK · FULL RIGHT TO WORK · ONSITE OR HYBRID UK-WIDE · REMOTE WORLDWIDE · DESIGN MANAGER / LEAD PRODUCT DESIGNER
            </p>

          </div>
        </section>

        <footer className="site-footer">
          <div className="container">
            <div>© 2026 Tooba Ameer — Design & Development Manager</div>
            <div>United Kingdom</div>
          </div>
        </footer>
      </body>
    </html>
  );
}
