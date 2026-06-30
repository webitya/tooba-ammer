"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Prevent background scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
    return () => {
      document.body.classList.remove('menu-open');
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <nav className={`nav ${isOpen ? 'is-open' : ''}`}>
        <Link href="/" className="logo" onClick={() => setIsOpen(false)}>
          Tooba Ameer
        </Link>

        {/* Desktop Links */}
        <div className="links desktop-links">
          <Link href="/#work" className={pathname === '/' ? 'active' : ''}>Work</Link>
          <Link href="/about" className={pathname === '/about' ? 'active' : ''}>About</Link>
          <Link href="/resume" className={pathname === '/resume' ? 'active' : ''}>CV</Link>
          <Link href="/contact" className={`nav-btn ${pathname === '/contact' ? 'active' : ''}`}>
            Get in Touch
          </Link>
        </div>

        {/* Hamburger Button */}
        <button
          className={`menu-toggle ${isOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${isOpen ? 'active' : ''}`}>
        <div className="mobile-menu-content">
          <div className="mobile-links">
            <Link href="/#work" className={pathname === '/' ? 'active' : ''} onClick={toggleMenu}>
              Work
            </Link>
            <Link href="/about" className={pathname === '/about' ? 'active' : ''} onClick={toggleMenu}>
              About
            </Link>
            <Link href="/resume" className={pathname === '/resume' ? 'active' : ''} onClick={toggleMenu}>
              CV
            </Link>
            <Link href="/contact" className="mobile-nav-btn" onClick={toggleMenu}>
              Get in Touch
            </Link>
          </div>
          <div className="mobile-menu-footer">
            <span className="label">Connect</span>
            <a href="mailto:hello@toobaameer.co.uk" className="mobile-email">
              hello@toobaameer.co.uk
            </a>
            <span className="mobile-avail">Leeds, UK · Onsite or Hybrid</span>
          </div>
        </div>
      </div>
    </>
  );
}
