import Link from 'next/link';

export const metadata = {
  title: 'About — Tooba Ameer',
  description: 'About Tooba Ameer — consumer product design & development manager. Systems thinking, commercial judgement and end-to-end product development across consumer brands.',
};

export default function About() {
  return (
    <main>
      {/* FULL-BLEED EDITORIAL COVER */}
      <header className="cover">
        <picture className="cover-media">
          <source srcSet="/tooba-cover.webp" type="image/webp" />
          <img src="/tooba-cover.jpg" alt="Portrait of Tooba Ameer, Design and Development Manager" />
        </picture>
        <div className="cover-scrim"></div>
        <div className="cover-inner">
          <span className="cover-kicker">Portfolio — 2026</span>
          <h1 className="cover-name">Tooba<span>Ameer</span></h1>
          <p className="cover-role">Design & Development Manager — consumer products.</p>
          <span className="cover-loc">UK onsite & hybrid · Remote worldwide</span>
        </div>
      </header>

      {/* INTRO / POINT OF VIEW */}
      <section className="band about-intro">
        <div className="container">
          <span className="label">About</span>
          <h2 className="about-headline">Design as a strategic lever — systems, judgement, and the teams that ship them.</h2>

          <div className="pov">
            <p>For the last eight years I've worked across backpacks, luggage and accessories, leading products from early insight to factory execution.</p>
            <p>My work sits at the intersection of consumer behaviour, commercial reality and manufacturing constraint — turning product strategy into things people choose, buy and carry every day.</p>
            <p>I moved to the UK in 2026 and I'm here for the long term — full right to work, no sponsorship needed. The work I want next is here: a generation of UK consumer brands getting serious about design, many of them building in exactly the India and China supply chains I've spent eight years inside.</p>
            <p>I've led brand transformations, built category systems that scaled across years rather than seasons, and developed products recognised for creating premium perception without premium cost structures.</p>
          </div>

          <div className="pov-questions">
            <p className="pov-dim">Today, the question that interests me most isn't <em>&ldquo;How do we design a better product?&rdquo;</em></p>
            <p className="pov-key">It's &ldquo;What system allows better products to keep happening?&rdquo;</p>
          </div>
        </div>
      </section>

      {/* 01 — WHAT THE WORK ADDS UP TO */}
      <section className="case-section">
        <div className="container">
          <div className="section-marker">
            <span className="num">01.</span>
            <span className="label">What the work adds up to</span>
          </div>
          <h2 className="section-title">Experience, measured in what it left behind.</h2>

          <div className="adds">
            <div className="item">
              <div className="meaning">Six-fold brand growth.</div>
              <div className="evidence">Built on a design system that scaled from 21 to 84 SKUs across five years.</div>
            </div>
            <div className="item">
              <div className="meaning">One cohort became a full age range.</div>
              <div className="evidence">Expanded from three ranges to nine while holding a coherent design language.</div>
            </div>
            <div className="item">
              <div className="meaning">Premium perception on a value-brand cost base.</div>
              <div className="evidence">Validated by a Travel Sentry Product Award.</div>
            </div>
            <div className="item">
              <div className="meaning">Built to outlast me.</div>
              <div className="evidence">A five-year programme handed to a successor and still running.</div>
            </div>
          </div>
        </div>
      </section>

      {/* 02 — HOW I WORK */}
      <section className="case-section band--paper-deep">
        <div className="container">
          <div className="section-marker">
            <span className="num">02.</span>
            <span className="label">How I work</span>
          </div>
          <h2 className="section-title">Four operating principles.</h2>

          <div className="subsection">
            <span className="subsection-num">01</span>
            <h3 className="subsection-title">I start with the system.</h3>
            <div className="body-prose">
              <p>Most product problems aren't product problems — they're system problems. The design language, the assortment architecture, the manufacturing constraints and the customer's expectations have to work together before any individual product can succeed.</p>
            </div>
          </div>

          <div className="subsection">
            <span className="subsection-num">02</span>
            <h3 className="subsection-title">I make the call when constraints appear.</h3>
            <div className="body-prose">
              <p>Every project reaches a point where something has to give — cost, complexity, speed or ambition. The quality of the outcome depends on the judgement behind those decisions, and on being willing to make them.</p>
            </div>
          </div>

          <div className="subsection">
            <span className="subsection-num">03</span>
            <h3 className="subsection-title">I bring people to the decision.</h3>
            <div className="body-prose">
              <p>The best idea rarely wins on its own. Suppliers, product managers, sourcing teams and leadership all have to see the same future before execution can happen at scale.</p>
            </div>
          </div>

          <div className="subsection">
            <span className="subsection-num">04</span>
            <h3 className="subsection-title">I build work that survives handover.</h3>
            <div className="body-prose">
              <p>Success isn't a launch. Success is the system still producing good outcomes after the original designer has moved on.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 03 — LEADERSHIP & COLLABORATION */}
      <section className="case-section">
        <div className="container">
          <div className="section-marker">
            <span className="num">03.</span>
            <span className="label">Leadership & collaboration</span>
          </div>
          <h2 className="section-title">Leading through outcomes, not headcount.</h2>

          <ul className="lead-list">
            <li>
              <span className="claim">Led design across four brands.</span>
              <span className="detail">Genie, Genius, Safari and Urban Jungle — different audiences, price architectures and design languages, held in one practice.</span>
            </li>
            <li>
              <span className="claim">Aligned the people who ship.</span>
              <span className="detail">Suppliers, sourcing, manufacturing and product managers, brought to the same decision before anything scaled.</span>
            </li>
             <li>
              <span className="claim">Led all visual design output across four brands.</span>
              <span className="detail">Print and surface graphics, packaging, POS, catalogue and seasonal trend decks — roughly 60 new print and surface designs a season.</span>
            </li>
            <li>
              <span className="claim">Shaped category direction.</span>
              <span className="detail">Influenced assortment architecture and range strategy, not just the products inside them.</span>
            </li>
            <li>
              <span className="claim">Owned the decisions that set the product.</span>
              <span className="detail">CMF, form and specification — the calls that decide how a product reads and what it costs.</span>
            </li>
            <li>
              <span className="claim">Built systems others could use.</span>
              <span className="detail">Reusable platforms and shared frameworks that outlived any single season.</span>
            </li>
            <li>
              <span className="claim">Handed the work on.</span>
              <span className="detail">Mentored designers and handed over long-running programmes still in production.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* 04 — WHAT I'M LOOKING FOR */}
      <section className="case-section band--paper-deep">
        <div className="container">
          <div className="section-marker">
            <span className="num">04.</span>
            <span className="label">What I'm looking for</span>
          </div>
          <h2 className="section-title">Where I want design to sit.</h2>

          <div className="body-prose">
            <p>I'm interested in roles where design is expected to influence more than form — shaping strategy, aligning teams, and building systems that create long-term business value.</p>
            <p>The work that interests me most sits between customer behaviour, commercial reality and product execution.</p>
          </div>

          <div className="pull-quote">
            <p>That's where design becomes a strategic lever.</p>
          </div>

          <div className="hero-meta">
            <div><span className="k">Based</span><span className="v">Leeds · open to relocation UK-wide, including London</span></div>
            <div><span className="k">Available for</span><span className="v">Product Design & Development Manager · Graphic & Brand Designer</span></div>
            <div><span className="k">Mode</span><span className="v">UK onsite or hybrid</span></div>
            <div><span className="k">Focus</span><span className="v">Systems · CMF · category strategy</span></div>
          </div>
        </div>
      </section>

      {/* CLOSING */}
      <section className="next-project">
        <div className="container">
          <span className="label">See the work</span>
          <Link className="next-project-link" href="/#work">Selected work <span className="arrow">→</span></Link>
          <p className="desc">Three projects — five years of building consumer products end to end. Genie, Phoenix, Sona.</p>
        </div>
      </section>
    </main>
  );
}
