import Link from 'next/link';

export default function Home() {
  return (
    <main>
      {/* ================ 1 · HERO ================ */}
      <section className="band home-hero">
        <div className="container">
          <span className="label eyebrow">Tooba Ameer — Design & Development Manager</span>
          <h1 className="home-headline">8 years building consumer products that scale brands and categories.</h1>
          <p className="home-support">Specialised in physical products — backpacks, luggage and accessories — from insight to factory to market.</p>

          <div className="impact-in-hero">
            <hr style={{ border: 'none', borderTop: '1px solid var(--hairline)', margin: 'clamp(36px, 4.5vw, 48px) 0 clamp(24px, 3.5vw, 36px) 0' }} />
            <span className="label eyebrow" style={{ marginBottom: 'clamp(20px, 3vw, 28px)', display: 'block' }}>The evidence</span>
            <div className="stats-strip">
              <div className="stat-cell"><span className="stat-n">~6×</span><span className="stat-lbl">Genie brand growth</span></div>
              <div className="stat-cell"><span className="stat-n">2025</span><span className="stat-lbl">Travel Sentry Award</span></div>
              <div className="stat-cell"><span className="stat-n">8,000+</span><span className="stat-lbl">Hue units sold monthly</span></div>
              <div className="stat-cell"><span className="stat-n">90%</span><span className="stat-lbl">First-round sampling approvals</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* ================ 3 · DESIGN LEADERSHIP PRINCIPLES ================ */}
      <section className="principles">
        <div className="container">
          <span className="label eyebrow">How I create value</span>
          <div className="principles-grid">
            <div className="principle">
              <h3>I build products that scale.</h3>
              <p>From backpacks to luggage, I design systems that support growth without increasing complexity.</p>
            </div>
            <div className="principle">
              <h3>I connect design and manufacturing.</h3>
              <p>Every product is developed with production, sourcing and cost realities in mind from day one.</p>
            </div>
            <div className="principle">
              <h3>I turn design into business outcomes.</h3>
              <p>My work has driven category growth, premium positioning and award-winning launches across multiple brands.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================ 4 · FEATURED CASE STUDY — GENIE ================ */}
      <section className="band band--ink featured" id="work">
        <div className="container">
          <div className="featured-head">
            <span className="label">Featured project</span>
            <span className="label">2021 — 2026 · Safari Industries</span>
          </div>

          <div className="featured-grid">
            <div className="featured-text">
              <h2 className="featured-title">Genie</h2>
              <p className="featured-tagline">Growing a school-bag brand up with its customer.</p>

              <p className="featured-body">Sole design owner across five back-to-school seasons. Genie in 2021 was a kids' label, 85% florals. Five years later it was a teen-and-college brand spanning backpacks, luggage and handbags. The work ran end to end: cohort research, range strategy, surface and CMF, manufacturing sign-off, and the operating model that shipped on calendar across six commercial channels.</p>

              <ul className="featured-bullets">
                <li>Reframed the brand's audience without a relaunch — the same customer carried Genie from age 7 to college</li>
                <li>Built a platform-and-component architecture: SKUs grew nearly 5× while constructions never exceeded three</li>
                <li>Cut a typical sampling cycle from three rounds to one; ~90% of designs signed off without a second round</li>
                <li>Trained the designer who now runs the brand</li>
              </ul>
            </div>

            <div className="featured-stat">
              <span className="featured-stat-n">~6×</span>
              <span className="featured-stat-lbl">Brand growth<br />2021 — 2026</span>
              <Link className="featured-cta" href="/Genie_Case_Study">Read the case study →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================ 5 · OTHER WORK ================ */}
      <section className="band work-band">
        <div className="container">
          <div className="work-head">
            <span className="label">Other work</span>
            <span className="label" style={{ opacity: .6 }}>Phoenix & Sona</span>
          </div>

          <div className="work-grid">
            <Link className="work-card" href="/Phoenix_Case_Study">
              <div className="work-card-head">
                <span className="meta">Safari Industries · 2023—25</span>
                <span className="meta">Sole designer</span>
              </div>
              <h3 className="work-card-title">Phoenix</h3>
              <p className="work-card-desc">Premium perception on a value-brand cost base.</p>
              <div className="work-card-foot">
                <span className="work-card-metric">Travel Sentry Award 2025</span>
                <span className="work-card-arrow">→</span>
              </div>
            </Link>

            <Link className="work-card" href="/SONA_Case_Study">
              <div className="work-card-head">
                <span className="meta">Concept · 2025</span>
                <span className="meta">End to end</span>
              </div>
              <h3 className="work-card-title">Sona</h3>
              <p className="work-card-desc">Designing the hour before sleep.</p>
              <div className="work-card-foot">
                <span className="work-card-metric">System concept</span>
                <span className="work-card-arrow">→</span>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
