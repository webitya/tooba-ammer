export const metadata = {
  title: 'CV — Tooba Ameer',
  description: 'Curriculum vitae of Tooba Ameer — Design & Development Manager. Trend direction, CMF strategy and commercially successful product ranges across luggage, backpacks and lifestyle accessories.',
};

export default function CVPage() {
  return (
    <main>

      {/* ── ACTION BAR ── */}
      <div style={{
        display: 'flex', gap: '12px',
        padding: '16px var(--pad-x)',
        borderBottom: '1px solid var(--hairline)',
        backgroundColor: 'var(--paper)',
      }}>
        <a
          href="/Tooba_Ameer_CV_ATS.pdf"
          download="Tooba_Ameer_CV_ATS.pdf"
          style={{
            display: 'inline-block', padding: '10px 24px',
            backgroundColor: 'var(--ink)', color: 'var(--paper)',
            textDecoration: 'none', fontFamily: 'var(--body)',
            fontSize: '12px', fontWeight: 500,
            textTransform: 'uppercase', letterSpacing: '0.1em',
          }}
        >
          Download CV
        </a>
        <a
          href="https://www.linkedin.com/in/tooba-ameer"
          target="_blank" rel="noopener noreferrer"
          style={{
            display: 'inline-block', padding: '10px 24px',
            backgroundColor: 'transparent', color: 'var(--ink)',
            textDecoration: 'none', fontFamily: 'var(--body)',
            fontSize: '12px', fontWeight: 500,
            textTransform: 'uppercase', letterSpacing: '0.1em',
            border: '1px solid var(--hairline)',
          }}
        >
          LinkedIn
        </a>
      </div>

      {/* ── CV SHEET ── */}
      <div style={{
        maxWidth: '1200px', margin: '0 auto',
        padding: 'clamp(48px,8vw,96px) var(--pad-x) clamp(40px,6vw,72px)',
      }}>

        {/* HEADER */}
        <header>
          {/* Eyebrow */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '11px', marginBottom: '26px' }}>
            <span style={{ width: '7px', height: '7px', background: 'var(--accent)', display: 'inline-block', flexShrink: 0 }} />
            <span style={{ fontFamily: 'var(--body)', fontWeight: 500, fontSize: '11.5px', letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--accent)' }}>
              Curriculum Vitae
            </span>
          </div>

          <h1 style={{
            fontFamily: 'var(--display)', fontWeight: 400, fontStyle: 'italic',
            fontSize: 'clamp(52px,9vw,104px)', lineHeight: .96,
            letterSpacing: '-.02em', color: 'var(--ink)',
          }}>
            Tooba Ameer
          </h1>

          <p style={{
            fontFamily: 'var(--display)', fontStyle: 'italic', fontWeight: 400,
            fontSize: 'clamp(22px,3vw,34px)', lineHeight: 1.2,
            letterSpacing: '-.01em', color: 'var(--muted)', marginTop: '14px',
          }}>
            Design &amp; Development Manager
          </p>

          <p style={{
            fontFamily: 'var(--body)', fontWeight: 400,
            fontSize: 'clamp(16px,1.5vw,18px)', lineHeight: 1.6,
            color: 'var(--ink)', maxWidth: '64ch', marginTop: '30px',
          }}>
            Design &amp; Development Manager with eight years leading trend direction, CMF strategy and commercially successful product ranges across luggage, backpacks and lifestyle accessories. Built and scaled product categories across multiple brands — combining consumer insight, manufacturing expertise and commercial decision-making. Contributed to Genie brand growth from{' '}
            <em style={{ fontFamily: 'var(--display)', fontStyle: 'italic', fontWeight: 500, fontSize: '1.04em' }}>₹17 Cr to ₹100 Cr (≈ £1.4M to £8M · ~6× growth)</em>.{' '}
            Experience mentoring designers and building design processes across multi-brand teams.
          </p>

          <p style={{
            fontFamily: 'var(--body)', fontWeight: 400, fontSize: '13.5px',
            lineHeight: 1.5, color: 'var(--muted)', marginTop: '18px',
          }}>
            Available for London-based roles · Full right to work in the UK · No visa sponsorship required
          </p>

          {/* Stats */}
          <div style={{
            display: 'flex', flexWrap: 'wrap', gap: 'clamp(36px,5vw,72px)',
            marginTop: '40px', paddingTop: '30px',
            borderTop: '1px solid var(--hairline)',
          }}>
            {[
              { v: '~6×', k: 'Genie brand growth · ₹17 Cr → ₹100 Cr (≈ £1.4M → £8M)' },
              { v: '8,000+', k: 'Units / month — Hue printed luggage' },
              { v: '42,000+', k: 'Verified ratings on Flipkart · 4.2★' },
            ].map(s => (
              <div key={s.v}>
                <span style={{
                  fontFamily: 'var(--display)', fontStyle: 'italic', fontWeight: 400,
                  fontSize: 'clamp(40px,6vw,72px)', lineHeight: 1,
                  letterSpacing: '-.02em', color: 'var(--ink)', display: 'block',
                }}>{s.v}</span>
                <span style={{
                  fontFamily: 'var(--body)', fontWeight: 500, fontSize: '10.5px',
                  letterSpacing: '.2em', textTransform: 'uppercase',
                  color: 'var(--muted)', marginTop: '14px', display: 'block', maxWidth: '22ch',
                }}>{s.k}</span>
              </div>
            ))}
          </div>
        </header>

        {/* TWO-COL GRID */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'min(280px,35%) 1fr',
          gap: 'clamp(40px,5vw,80px)',
          marginTop: 'clamp(40px,5vw,72px)',
        }}>

          {/* ── SIDEBAR ── */}
          <aside style={{ alignSelf: 'start' }}>

            {/* Contact */}
            <SidePanel label="Contact">
              <dl style={{ display: 'grid', gap: '14px' }}>
                {[
                  { dt: 'Location', dd: 'Leeds, United Kingdom' },
                  { dt: 'Phone',    dd: '+44 7343 066082' },
                  { dt: 'Email',    dd: <a href="mailto:hello@toobaameer.co.uk" style={linkStyle}>hello@toobaameer.co.uk</a> },
                  { dt: 'LinkedIn', dd: <a href="https://www.linkedin.com/in/tooba-ameer" target="_blank" rel="noopener noreferrer" style={linkStyle}>linkedin.com/in/tooba-ameer</a> },
                  { dt: 'Behance',  dd: <a href="https://www.behance.net/ameertooba" target="_blank" rel="noopener noreferrer" style={linkStyle}>behance.net/ameertooba</a> },
                ].map(({ dt, dd }) => (
                  <div key={dt}>
                    <dt style={{ fontFamily: 'var(--body)', fontWeight: 500, fontSize: '9.5px', letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '3px' }}>{dt}</dt>
                    <dd style={{ fontFamily: 'var(--body)', fontWeight: 400, fontSize: '14px', lineHeight: 1.45, color: 'var(--ink)' }}>{dd}</dd>
                  </div>
                ))}
              </dl>
            </SidePanel>

            {/* Award */}
            <SidePanel label="Award">
              <p style={{ fontFamily: 'var(--display)', fontStyle: 'italic', fontWeight: 400, fontSize: '18px', lineHeight: 1.25, color: 'var(--ink)', marginBottom: '6px' }}>
                Travel Sentry Product Award 2025
              </p>
              <p style={subStyle}>Winner — Favourite Softside Luggage<br />Phoenix Laptop Trolley</p>
            </SidePanel>

            {/* Skills */}
            <SidePanel label="Skills">
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '7px' }}>
                {['Range Building','Trend Direction','CMF Strategy','Product Design','Category Management','Multi-Brand Strategy','Manufacturing','Product Specifications','Illustrator','Photoshop','Figma'].map(s => (
                  <span key={s} style={{ fontFamily: 'var(--body)', fontWeight: 400, fontSize: '12.5px', lineHeight: 1, color: 'var(--ink)', border: '1px solid var(--hairline)', borderRadius: '3px', padding: '6px 9px' }}>{s}</span>
                ))}
              </div>
            </SidePanel>

            {/* Education */}
            <SidePanel label="Education">
              <p style={{ fontFamily: 'var(--body)', fontWeight: 400, fontSize: '14px', lineHeight: 1.5, color: 'var(--ink)', marginBottom: '4px' }}>
                <em style={{ fontFamily: 'var(--display)', fontStyle: 'italic', fontWeight: 500, color: 'var(--ink)' }}>Bachelor of Design</em>
              </p>
              <p style={subStyle}>Fashion &amp; Lifestyle Accessory Design<br />NIFT, India · 2014–2018</p>
            </SidePanel>

            {/* Certifications */}
            <SidePanel label="Certifications">
              <p style={{ fontFamily: 'var(--body)', fontWeight: 400, fontSize: '14px', lineHeight: 1.5, color: 'var(--ink)', marginBottom: '2px' }}>Adobe Illustrator 2025</p>
              <p style={subStyle}>Professional Certificate</p>
              <p style={{ fontFamily: 'var(--body)', fontWeight: 400, fontSize: '14px', lineHeight: 1.5, color: 'var(--ink)', marginTop: '14px', marginBottom: '2px' }}>JobEscape — AI Powered Designer</p>
              <p style={subStyle}>Level 4: Platinum</p>
            </SidePanel>

            {/* Languages */}
            <SidePanel label="Languages">
              <dl style={{ display: 'grid', gap: '14px' }}>
                {[['English','Full Professional'],['Hindi','Native']].map(([dt,dd]) => (
                  <div key={dt}>
                    <dt style={{ fontFamily: 'var(--body)', fontWeight: 500, fontSize: '9.5px', letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '3px' }}>{dt}</dt>
                    <dd style={{ fontFamily: 'var(--body)', fontWeight: 400, fontSize: '14px', lineHeight: 1.45, color: 'var(--ink)' }}>{dd}</dd>
                  </div>
                ))}
              </dl>
            </SidePanel>

          </aside>

          {/* ── MAIN EXPERIENCE ── */}
          <div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '18px', paddingBottom: '16px', borderBottom: '1px solid var(--hairline)', marginBottom: '26px' }}>
              <span style={{ fontFamily: 'var(--display)', fontStyle: 'italic', fontWeight: 400, fontSize: '18px', color: 'var(--accent)', lineHeight: 1 }}>01</span>
              <span style={{ fontFamily: 'var(--body)', fontWeight: 500, fontSize: '11.5px', letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--accent)' }}>Experience</span>
            </div>

            {[
              {
                title: 'Manager — Design & Development',
                org: 'Safari Industries India Ltd. · Mumbai',
                when: 'Apr 2024 – Feb 2026',
                lead: 'Built the Genie range from the ground up — backpacks, kids\u2019 bags and luggage.',
                points: [
                  'Led design for Genie while contributing to Genius, Safari and Urban Jungle — four brands with different positioning and price architecture.',
                  'Worked across branded and white-label product — adapting white-label bases into brand-ready ranges through CMF, print and detailing for tote bags and work backpacks.',
                  'Defined seasonal trend direction — video vibe boards and static catch boards to shape collections and present to stakeholders.',
                  'Developed product lines for girls and young women — Cool (3 seasons), Sass (2 yrs), Amore (2 yrs), Essence (2025, still in range). Essence featured on Amazon MX Player\'s School Friends S3.',
                  'Designed the Phoenix Laptop Trolley (Travel Sentry Product Award 2025) and Hue luggage (42,000+ ratings, 8,000+ units/month).',
                  'Set colour palettes, print direction, graphics and material strategies across the full range.',
                  'Partnered with manufacturing teams across India and China — specs, sampling, sign-off; attended Canton Fair for sourcing, supplier evaluation and market insight.',
                  'Mentored 2 designers — managed an intern and mentored a fellow designer on brand standards, research methods and range planning.',
                ],
              },
              {
                title: 'Deputy Product Manager — Category Management',
                org: 'Bagzone Lifestyles / Lavie · Mumbai',
                when: 'Jan – Apr 2024',
                points: [
                  'Managed Lavie Sports — backpack, duffle and travel bags for a unisex lifestyle brand.',
                  'Developed range from brief to collection — product direction, CMF and category positioning.',
                ],
              },
              {
                title: 'Manager — Design & Development',
                org: 'Safari Industries India Ltd. · Mumbai',
                when: 'Jul – Dec 2023',
                points: [
                  'Promoted to lead Genie design direction — range coherence, visual identity, all categories.',
                  'Defined brand visual language — seasonal colour strategies, print direction, graphic themes.',
                  'Mentored junior designers; built a shared CMF library and design processes.',
                  'Cross-functional coordination with product management, sales and sourcing.',
                ],
              },
              {
                title: 'Assistant Manager — Design & Development',
                org: 'Safari Industries India Ltd. · Mumbai',
                when: 'Mar 2021 – Jul 2023',
                points: [
                  'Created the Cool backpack line — reordered for three consecutive seasons on commercial demand.',
                  'Launched a printed luggage category for women — persona-based design, strong commercial performer.',
                  'Built kids\u2019 backpack ranges season after season — trends, materials, print directions, colourways.',
                  'End-to-end product design — form, CMF, prints, specs — direct factory collaboration.',
                ],
              },
              {
                title: 'Product & Graphic Designer',
                org: 'High Spirit Commercial Ventures · Mumbai',
                when: 'Jul 2018 – Mar 2021',
                lead: 'Three brands — Priority, Hashtag, Traworld — each with distinct positioning.',
                points: [
                  'Built ranges for three brand identities — adapting design, CMF, price point and visual language per audience.',
                  'Led "House of 100" — standardised all components (fabrics, linings, zippers, pullers, locks, mesh, elastic) to 100, cutting warehouse waste.',
                  'Designed seasonal collections integrating structure, graphics, CMF and branding.',
                  'Mentored 3 junior designers on design processes, product development and brand standards.',
                ],
              },
              {
                title: 'Product Designer',
                titleSuffix: '(Graduation Project · 6 months)',
                org: 'United Colors of Benetton India · Gurugram',
                when: 'Jan – Jun 2018',
                points: [
                  'Designed the multi-category "Wanderlust" collection — backpacks, handbags, sling bags.',
                  'Concept boards, product designs and seasonal trend alignment.',
                  'Collaborated with design and merchandising, concept to sampling.',
                ],
              },
            ].map((entry, i) => (
              <article key={i} style={{
                paddingTop: i === 0 ? 0 : '26px',
                paddingBottom: '26px',
                borderBottom: i < 5 ? '1px solid var(--hairline)' : 'none',
              }}>
                <h2 style={{
                  fontFamily: 'var(--display)', fontStyle: 'italic', fontWeight: 400,
                  fontSize: 'clamp(20px,2.4vw,26px)', lineHeight: 1.12,
                  letterSpacing: '-.012em', color: 'var(--ink)',
                }}>
                  {entry.title}
                  {entry.titleSuffix && (
                    <span style={{ fontFamily: 'var(--body)', fontStyle: 'normal', fontWeight: 400, fontSize: '.5em', letterSpacing: '.01em', color: 'var(--muted)', whiteSpace: 'nowrap', marginLeft: '10px' }}>
                      {entry.titleSuffix}
                    </span>
                  )}
                </h2>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '6px 24px', marginTop: '8px' }}>
                  <span style={{ fontFamily: 'var(--body)', fontWeight: 500, fontSize: '13.5px', color: 'var(--ink)' }}>{entry.org}</span>
                  <span style={{ fontFamily: 'var(--body)', fontWeight: 500, fontSize: '10.5px', letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--muted)', whiteSpace: 'nowrap' }}>{entry.when}</span>
                </div>
                {entry.lead && (
                  <p style={{ fontFamily: 'var(--body)', fontWeight: 400, fontSize: '14.5px', lineHeight: 1.6, color: 'var(--ink)', marginTop: '14px' }}>{entry.lead}</p>
                )}
                <ul style={{ listStyle: 'none', marginTop: '14px' }}>
                  {entry.points.map((p, j) => (
                    <li key={j} style={{ position: 'relative', paddingLeft: '26px', fontFamily: 'var(--body)', fontWeight: 400, fontSize: '14.5px', lineHeight: 1.6, color: 'var(--ink)', marginTop: j === 0 ? 0 : '10px' }}>
                      <span style={{ position: 'absolute', left: 0, top: 0, color: 'var(--accent)', fontWeight: 600 }}>—</span>
                      {p}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

        </div>
      </div>

      {/* ── RESPONSIVE GRID FIX ── */}
      <style>{`
        @media (max-width: 840px) {
          .cv-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

    </main>
  );
}

/* ── Small helper components ── */

function SidePanel({ label, children }) {
  return (
    <div style={{ marginBottom: 'clamp(24px,3.5vw,40px)' }}>
      <span style={{
        fontFamily: 'var(--body)', fontWeight: 500, fontSize: '11.5px',
        letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--accent)',
        display: 'block', marginBottom: '14px', paddingBottom: '10px',
        borderBottom: '1px solid var(--hairline)',
      }}>{label}</span>
      {children}
    </div>
  );
}

const linkStyle = {
  color: 'inherit',
  textDecoration: 'none',
  borderBottom: '1px solid var(--hairline)',
  transition: 'color .2s, border-color .2s',
};

const subStyle = {
  fontFamily: 'var(--body)',
  fontWeight: 400,
  fontSize: '12.5px',
  lineHeight: 1.45,
  color: 'var(--muted)',
};
