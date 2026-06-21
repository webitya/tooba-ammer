export const metadata = {
  title: 'Contact — Tooba Ameer',
  description: 'Get in touch with Tooba Ameer — Design & Development Manager',
};

export default function Contact() {
  return (
    <main>

      {/* ── HERO ── */}
      <section style={{
        padding: 'clamp(56px,8vw,96px) var(--pad-x) clamp(48px,6vw,72px)',
        borderBottom: '1px solid var(--hairline)',
      }}>
        <div className="container">
          <span style={{
            fontFamily: 'var(--body)', fontWeight: 500, fontSize: '11.5px',
            letterSpacing: '.18em', textTransform: 'uppercase',
            color: 'var(--muted)', display: 'block',
            marginBottom: 'clamp(20px,3vw,32px)',
          }}>
            Contact
          </span>
          <h1 style={{
            fontFamily: 'var(--display)', fontWeight: 400, fontStyle: 'italic',
            fontSize: 'clamp(56px,9vw,128px)', lineHeight: .98,
            letterSpacing: '-.018em', color: 'var(--ink)',
            marginBottom: 'clamp(16px,2vw,24px)',
          }}>
            Let&rsquo;s talk.
          </h1>
          <p style={{
            fontFamily: 'var(--body)', fontWeight: 400,
            fontSize: 'clamp(17px,1.6vw,20px)', lineHeight: 1.5,
            color: 'var(--muted)', maxWidth: '40ch',
          }}>
            Hiring, collaborating, or just curious — reach out.
          </p>
        </div>
      </section>

      {/* ── MAIN BODY ── */}
      <section style={{ padding: 'clamp(56px,7vw,88px) var(--pad-x) clamp(80px,10vw,140px)' }}>
        <div className="container" style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.4fr',
          gap: 'clamp(48px,8vw,120px)',
          alignItems: 'start',
        }}>

          {/* ── LEFT: Links ── */}
          <div>
            <span style={{
              fontFamily: 'var(--body)', fontWeight: 500, fontSize: '11.5px',
              letterSpacing: '.18em', textTransform: 'uppercase',
              color: 'var(--muted)', display: 'block', marginBottom: '32px',
            }}>
              Reach me
            </span>

            {/* Email */}
            <a href="mailto:hello@toobaameer.co.uk" style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              padding: '20px 0', borderTop: '1px solid var(--hairline)',
              textDecoration: 'none', color: 'var(--ink)', gap: '16px',
            }}>
              <span style={{
                fontFamily: 'var(--body)', fontWeight: 500, fontSize: '11px',
                letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--muted)',
                minWidth: '80px',
              }}>Email</span>
              <span style={{
                fontFamily: 'var(--display)', fontStyle: 'italic', fontWeight: 400,
                fontSize: 'clamp(15px,1.4vw,18px)', color: 'var(--ink)', flex: 1,
              }}>hello@toobaameer.co.uk</span>
              <span style={{ fontSize: '16px', color: 'var(--muted)' }}>↗</span>
            </a>

            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/tooba-ameer" target="_blank" rel="noopener noreferrer" style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              padding: '20px 0', borderTop: '1px solid var(--hairline)',
              textDecoration: 'none', color: 'var(--ink)', gap: '16px',
            }}>
              <span style={{
                fontFamily: 'var(--body)', fontWeight: 500, fontSize: '11px',
                letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--muted)',
                minWidth: '80px',
              }}>LinkedIn</span>
              <span style={{
                fontFamily: 'var(--display)', fontStyle: 'italic', fontWeight: 400,
                fontSize: 'clamp(15px,1.4vw,18px)', color: 'var(--ink)', flex: 1,
              }}>tooba-ameer</span>
              <span style={{ fontSize: '16px', color: 'var(--muted)' }}>↗</span>
            </a>

            {/* Resume */}
            <a href="/Tooba_Ameer_CV.pdf" download="Tooba_Ameer_CV.pdf" style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              padding: '20px 0', borderTop: '1px solid var(--hairline)',
              borderBottom: '1px solid var(--hairline)',
              textDecoration: 'none', color: 'var(--ink)', gap: '16px',
            }}>
              <span style={{
                fontFamily: 'var(--body)', fontWeight: 500, fontSize: '11px',
                letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--muted)',
                minWidth: '80px',
              }}>Resume</span>
              <span style={{
                fontFamily: 'var(--display)', fontStyle: 'italic', fontWeight: 400,
                fontSize: 'clamp(15px,1.4vw,18px)', color: 'var(--ink)', flex: 1,
              }}>Download PDF</span>
              <span style={{ fontSize: '16px', color: 'var(--muted)' }}>↓</span>
            </a>

            {/* Availability */}
            <div style={{ marginTop: 'clamp(40px,5vw,56px)' }}>
              <span style={{
                fontFamily: 'var(--body)', fontWeight: 500, fontSize: '11.5px',
                letterSpacing: '.18em', textTransform: 'uppercase',
                color: 'var(--muted)', display: 'block', marginBottom: '16px',
              }}>Availability</span>
              <p style={{
                fontFamily: 'var(--body)', fontWeight: 400,
                fontSize: '14.5px', lineHeight: 1.8, color: 'var(--muted)',
              }}>
                UK · Full right to work<br />
                Onsite or hybrid UK-wide<br />
                Remote worldwide
              </p>
            </div>
          </div>

          {/* ── RIGHT: Form ── */}
          <div>
            <span style={{
              fontFamily: 'var(--body)', fontWeight: 500, fontSize: '11.5px',
              letterSpacing: '.18em', textTransform: 'uppercase',
              color: 'var(--muted)', display: 'block', marginBottom: '40px',
            }}>
              Send a message
            </span>

            <form
              action="https://formspree.io/f/hello@toobaameer.co.uk"
              method="POST"
              style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}
            >
              {/* Name */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <label htmlFor="name" style={{
                  fontFamily: 'var(--body)', fontWeight: 500, fontSize: '11px',
                  letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--muted)',
                }}>Name</label>
                <input
                  type="text" id="name" name="name"
                  placeholder="Your name" required autoComplete="name"
                  style={{
                    fontFamily: 'var(--body)', fontWeight: 400, fontSize: '16px',
                    color: 'var(--ink)', background: 'transparent',
                    border: 'none', borderBottom: '1px solid var(--hairline)',
                    padding: '10px 0', outline: 'none', width: '100%',
                    borderRadius: 0,
                  }}
                />
              </div>

              {/* Email */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <label htmlFor="email" style={{
                  fontFamily: 'var(--body)', fontWeight: 500, fontSize: '11px',
                  letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--muted)',
                }}>Email</label>
                <input
                  type="email" id="email" name="email"
                  placeholder="your@email.com" required autoComplete="email"
                  style={{
                    fontFamily: 'var(--body)', fontWeight: 400, fontSize: '16px',
                    color: 'var(--ink)', background: 'transparent',
                    border: 'none', borderBottom: '1px solid var(--hairline)',
                    padding: '10px 0', outline: 'none', width: '100%',
                    borderRadius: 0,
                  }}
                />
              </div>

              {/* Subject */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <label htmlFor="subject" style={{
                  fontFamily: 'var(--body)', fontWeight: 500, fontSize: '11px',
                  letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--muted)',
                }}>Subject</label>
                <input
                  type="text" id="subject" name="subject"
                  placeholder="What's this about?"
                  style={{
                    fontFamily: 'var(--body)', fontWeight: 400, fontSize: '16px',
                    color: 'var(--ink)', background: 'transparent',
                    border: 'none', borderBottom: '1px solid var(--hairline)',
                    padding: '10px 0', outline: 'none', width: '100%',
                    borderRadius: 0,
                  }}
                />
              </div>

              {/* Message */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <label htmlFor="message" style={{
                  fontFamily: 'var(--body)', fontWeight: 500, fontSize: '11px',
                  letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--muted)',
                }}>Message</label>
                <textarea
                  id="message" name="message"
                  placeholder="Tell me more…" rows={5} required
                  style={{
                    fontFamily: 'var(--body)', fontWeight: 400, fontSize: '16px',
                    color: 'var(--ink)', background: 'transparent',
                    border: 'none', borderBottom: '1px solid var(--hairline)',
                    padding: '10px 0', outline: 'none', width: '100%',
                    resize: 'none', borderRadius: 0, lineHeight: 1.6,
                  }}
                />
              </div>

              <div>
                <button type="submit" style={{
                  padding: '14px 36px',
                  background: 'var(--ink)', color: 'var(--paper)',
                  fontFamily: 'var(--body)', fontWeight: 500,
                  fontSize: '12px', letterSpacing: '.12em', textTransform: 'uppercase',
                  border: 'none', cursor: 'pointer',
                }}>
                  Send Message
                </button>
              </div>
            </form>
          </div>

        </div>
      </section>

      <style>{`
        @media (max-width: 820px) {
          .contact-two-col { grid-template-columns: 1fr !important; gap: 56px !important; }
        }
      `}</style>
    </main>
  );
}
