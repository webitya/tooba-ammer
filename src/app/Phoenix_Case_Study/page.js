import Link from 'next/link';

export default function CaseStudy() {
  return (
    <main>
      {/*  HERO  */}
      <section className="band hero">
        <div className="container">
          <span className="label">Case study &middot; Phoenix &middot; Safari Industries &middot; 2023&mdash;25</span>
          <h1 className="display-xl">Phoenix</h1>
          <div className="hero-body">
            <div className="hero-body-text">
              <p className="hero-tagline">A premium read on a value cost base.</p>
              <p className="lede BL">Safari is one of India's three largest luggage makers, and its strength is also its ceiling: the market reads it as value, not desire. The brief for Phoenix was to break that &mdash; to land a genuinely premium feel at a <em className="lead">₹9,999</em> retail price and a <em className="lead">$30</em> manufacturing cost.</p>
              <p className="lede BL">You can't buy premium for $30. So I had to build it instead &mdash; from the things that cost nothing extra: finish, proportion, restraint and detail.</p>
            </div>
            <div className="hero-body-figure">
              <div className="figure">
                <img src="/images/phoenix/fig_01.png" alt="The finished Phoenix trolley — 8-wheel, tonal black, brushed-metal hardware" />
                <figcaption>The finished Phoenix trolley &mdash; 8-wheel, tonal black, brushed-metal hardware.</figcaption>
              </div>
            </div>
          </div>

          <div className="stats-strip">
            <div className="stat-cell"><span className="stat-n">$30</span><span className="stat-lbl">FOB cost target &mdash; held</span></div>
            <div className="stat-cell"><span className="stat-n">₹9,999</span><span className="stat-lbl">Premium retail tier landed</span></div>
            <div className="stat-cell"><span className="stat-n">Winner</span><span className="stat-lbl">Travel Sentry Product Awards 2025</span></div>
            <div className="stat-cell"><span className="stat-n">Sole</span><span className="stat-lbl">Designer &middot; concept to production</span></div>
          </div>

          <div className="hero-meta">
            <div><span className="k">Role</span><span className="v">Sole designer &mdash; concept to production</span></div>
            <div><span className="k">Scope</span><span className="v">Product · CMF · Colour · Construction · Specification</span></div>
            <div><span className="k">Category</span><span className="v">8-wheel laptop trolley</span></div>
            <div><span className="k">Recognition</span><span className="v">Winner &mdash; Favourite Softside Luggage</span></div>
          </div>

        </div>
      </section>

      {/*  SECTION 01 — BRIEF  */}
      <section className="case-section">
        <div className="container">
          <div className="section-marker">
            <span className="num">01.</span>
            <span className="label">The brief</span>
          </div>
          <h2 className="section-title">A brief that contradicted itself.</h2>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(40px, 6vw, 96px)', alignItems: 'start' }}>
            <div className="body-prose">
              <p>The brief came from the marketing and product team, not from me. It asked for premium fabric and no prints, a detailed organiser, a lockable laptop and tablet compartment, and &mdash; tellingly &mdash; dimensions matched to the <strong>Samsonite Sefton</strong>. The aspiration was written into the spec.</p>
              <p>Then came the two numbers that defined the whole project: a target retail price of <strong>₹9,999</strong> and a target <strong>$30 FOB</strong> &mdash; the cost to make and ship each unit. For Safari, ₹9,999 is the top of its range. For a Samsonite feel, $30 a unit is almost nothing.</p>
              <p>The brief, read honestly, was a contradiction: <em>deliver the perception of a premium brand on the cost structure of a value one.</em></p>
            </div>

            <div className="figure" style={{ margin: 0 }}>
              <img src="/images/phoenix/fig_02.png" alt="Desired features, &ldquo;premium fabric, no prints,&rdquo; Sefton dimensions, and the price and cost targets" />
              <figcaption>Desired features, &ldquo;premium fabric, no prints,&rdquo; Sefton dimensions, and the price and cost targets.</figcaption>
            </div>
          </div>
        </div>
      </section>

      {/*  SECTION 02 — PROBLEM  */}
      <section className="case-section band--paper-deep">
        <div className="container">
          <div className="section-marker">
            <span className="num">02.</span>
            <span className="label">The problem</span>
          </div>
          <h2 className="section-title">You can't buy premium at thirty dollars a unit.</h2>

          <div className="body-prose">
            <p>Leather shells, aluminium frames, polycarbonate &mdash; the materials people associate with premium luggage &mdash; were all off the table at this cost.</p>
            <p>So I reframed the brief. If premium couldn't come from spend, it had to come from the things that cost nothing extra: <em>finish, restraint, proportion, and detail.</em></p>
            <p>Premium as a design decision, not a materials budget.</p>
          </div>
        </div>
      </section>

      {/*  SECTION 03 — PRINCIPLES  */}
      <section className="case-section">
        <div className="container">
          <div className="section-marker">
            <span className="num">03.</span>
            <span className="label">Design principles</span>
          </div>
          <h2 className="section-title">Four rules I held the whole way.</h2>

          <div className="framework framework--4">
            <div className="fw-cell">
              <span className="num">01</span>
              <span className="head">Restraint over accent</span>
              <span className="body">Stop decorating. A premium object looks like it isn't trying.</span>
            </div>
            <div className="fw-cell">
              <span className="num">02</span>
              <span className="head">Tonal over colour</span>
              <span className="body">Difference through material and texture, not a bright highlight.</span>
            </div>
            <div className="fw-cell">
              <span className="num">03</span>
              <span className="head">Finish over material</span>
              <span className="body">If I can't change the fabric, I change every metal touchpoint.</span>
            </div>
            <div className="fw-cell">
              <span className="num">04</span>
              <span className="head">Make it makeable</span>
              <span className="body">Manufacturability is a design input, not a problem handed downstream.</span>
            </div>
          </div>

          <div className="figure">
            <img src="/images/phoenix/fig_03.png" alt="Front, three-quarter, back and both sides — the object the four rules produced" />
            <figcaption>Front, three-quarter, back and both sides &mdash; the object the four rules produced.</figcaption>
          </div>
        </div>
      </section>

      {/*  SECTION 04 — EXPLORATION  */}
      <section className="case-section band--paper-deep">
        <div className="container">
          <div className="section-marker">
            <span className="num">04.</span>
            <span className="label">Exploration</span>
          </div>
          <h2 className="section-title">Two roads I walked away from.</h2>

          <div className="body-prose">
            <p>Premium isn't the first idea &mdash; it's what's left after you delete the wrong ones. Two early concepts taught me what Phoenix shouldn't be.</p>
          </div>

          <div className="subsection">
            <span className="subsection-num">a.</span>
            <h3 className="subsection-title">A full-PU front.</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 'clamp(40px, 6vw, 96px)', alignItems: 'start' }}>
              <div className="body-prose">
                <p>The fastest way to look premium was to clad the whole front face in PU faux leather, and I built that version first. But a business trolley lives a hard life &mdash; dragged through airports, knocked at security, stacked into overheads &mdash; and a large faux-leather face is exactly where that shows. It scuffs, scratches and tears, and a marked &ldquo;premium&rdquo; panel reads cheaper than honest polyester ever would. Premium that can't survive its own use isn't premium. I walked away from the full-PU front; where the faux leather finally went, and why, is the first of the hard decisions below.</p>
              </div>
              <div className="figure" style={{ margin: 0 }}>
                <img src="/images/phoenix/fig_04.png" alt="The full PU faux-leather front — built first, then walked away from" />
                <figcaption>The full PU faux-leather front &mdash; built first, then walked away from.</figcaption>
              </div>
            </div>
          </div>

          <div className="subsection">
            <span className="subsection-num">b.</span>
            <h3 className="subsection-title">The construction was the problem, not the pocket.</h3>
            <div className="body-prose">
              <p>The protruding pockets stayed &mdash; they're a strong design choice and a signature of the final bag. What I moved on from was the <em>construction</em>: pockets stitched directly onto a plain front panel. Visually it left the pockets sitting like applied objects, and structurally it carried a real production risk on curved seams over a flat face. I committed instead to the direction where the pockets are framed end to end by a PU trim line &mdash; cleaner, less complex, more finesse, and a build the factory could run consistently.</p>
            </div>
            <div className="figure-grid figure-grid--2">
              <div className="figure">
                <img src="/images/phoenix/fig_05a.png" alt="Protruding pockets stitched directly to plain front panel" />
                <figcaption>Protruding pockets stitched directly to plain front panel.</figcaption>
              </div>
              <div className="figure">
                <img src="/silver.png" alt="PU trim line framing pockets edge to edge" />
                <figcaption>PU trim line framing pockets edge to edge.</figcaption>
              </div>
            </div>
            <p className="figure-caption" style={{ textAlign: 'center' }}>From &ldquo;applied objects on a panel&rdquo; to &ldquo;framed within a trim line.&rdquo;</p>
          </div>
        </div>
      </section>

      {/*  SECTION 05 — HARD DECISIONS  */}
      <section className="case-section">
        <div className="container">
          <div className="section-marker">
            <span className="num">05.</span>
            <span className="label">The hard decisions</span>
          </div>
          <h2 className="section-title">Three decisions that made Phoenix possible.</h2>

          <div className="body-prose">
            <p>At $30 a unit you cannot make everything premium. The project lived or died on where the money went &mdash; and on what I was willing to sacrifice to put it there. Three calls did the heavy lifting.</p>
          </div>

          <div className="framework framework--3">
            <div className="fw-cell">
              <span className="num">01</span>
              <span className="head">Spend where hands land</span>
              <span className="body">The premium budget went into one place: the brushed-metal hardware family and PU leather on the faces a hand actually touches &mdash; top handle, lower front, back panel. Everything else stayed ordinary polyester.</span>
              <span className="why">A shopper reads premium through what they touch and see up close, not through panels they never handle. Concentrating spend at the touchpoints buys more perceived quality per rupee than spreading it thin.</span>
              <span className="traded">Traded: faux leather across the whole face, for premium exactly where it's felt.</span>
            </div>
            <div className="fw-cell">
              <span className="num">02</span>
              <span className="head">Reuse the construction, fix what's wrong with it</span>
              <span className="body">Phoenix started from a previously-launched Safari construction (the laptop and tablet bay carried over from Brighton) rather than a new one &mdash; but I reworked the corner radii so the proportion read sharper and more deliberate.</span>
              <span className="why">A new architecture means new patterns, sampling and sign-off, and that cost comes straight out of the finish budget. Reusing a proven construction sent every premium rupee into detailing rather than a new build &mdash; and correcting the radii bought a considered stance without paying to engineer one.</span>
              <span className="traded">Traded: a fully bespoke silhouette, for a corrected existing one with the savings redirected into finish.</span>
            </div>
            <div className="fw-cell">
              <span className="num">03</span>
              <span className="head">Buy signal, not decoration</span>
              <span className="body">I dropped the bright accent and consolidated every metal part &mdash; logo, zippers, pullers, rivets &mdash; into a single brushed-metal language.</span>
              <span className="why">A bright accent reads as &ldquo;feature,&rdquo; not premium; one coherent metal language reads as considered. Pay for what reads premium, cut what only looks busy.</span>
              <span className="traded">Traded: the loud &ldquo;look how much you get for the money&rdquo; cue some Safari buyers shop on. To a value shopper a busy bag can itself signal value, so going quiet was a real commercial risk &mdash; one the bag offsets through function, not noise: three face pockets and heavy internal organisation still read as &ldquo;a lot of bag&rdquo; without the clutter.</span>
            </div>
          </div>
        </div>
      </section>

      {/*  SECTION 06 — ALIGNING THE TEAM  */}
      <section className="case-section band--paper-deep">
        <div className="container">
          <div className="section-marker">
            <span className="num">06.</span>
            <span className="label">Aligning the team</span>
          </div>
          <h2 className="section-title">A different read on premium.</h2>

          <div className="body-prose">
            <p>Leadership and product management initially favoured the louder cues the category trains buyers to expect &mdash; red logo accents, full-PU front pockets, the Samsonite Sefton vocabulary. They weren't wrong about the references; those signals do work. The question I needed the team to consider was whether they were the <em>right</em> signals at this price, on this brand. Two conversations decided how premium Phoenix would actually look &mdash; and both were settled by putting evidence next to opinion.</p>
          </div>

          <div className="subsection">
            <span className="subsection-num">a.</span>
            <h3 className="subsection-title">The red accent &mdash; show, don't argue.</h3>
            <div className="body-prose">
              <p>The product team had the Samsonite Sefton in mind: red logo, red pullers, heavy PU detailing. Rather than push back in a meeting, I built both versions &mdash; with and without the red &mdash; and put them side by side. The comparison made the case that words couldn't. Stripped of the accent, the bag instantly read more premium, and the team aligned on the quieter direction quickly. The argument moved from <em>preference</em> to <em>what the eye does</em>.</p>
            </div>
          </div>

          <div className="subsection">
            <span className="subsection-num">b.</span>
            <h3 className="subsection-title">Premium has to survive ownership.</h3>
            <div className="body-prose">
              <p>The same team wanted both front pockets in full PU leather &mdash; it photographs richly. I framed it through use, not taste: pockets that flex every day would crease, and within a few months that &ldquo;premium&rdquo; PU would make the bag read <em>cheaper</em>, not richer. The team aligned once the failure mode was named. We kept PU on faces that stay taut and removed it from the ones that move.</p>
              <p>A point worth being honest about: reducing visual noise also reduces the surfaces where manufacturing inconsistency shows. At this cost target, restraint wasn't only an aesthetic argument &mdash; it was a quality-control one.</p>
            </div>
          </div>

          <div className="pull-quote">
            <p>The moment I removed the red, the bag stopped looking like it was trying.</p>
          </div>
        </div>
      </section>

      {/*  SECTION 07 — MATERIAL SYSTEM  */}
      <section className="case-section">
        <div className="container">
          <div className="section-marker">
            <span className="num">07.</span>
            <span className="label">The material system</span>
          </div>
          <h2 className="section-title">Premium, rebuilt as finish.</h2>

          {/* Two-col: prose left, figure right */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(48px, 7vw, 112px)', alignItems: 'start', marginBottom: 'clamp(64px, 8vw, 112px)' }}>
            <div className="body-prose" style={{ margin: 0 }}>
              <p>With the base fabric fixed by cost, I treated every other surface as a lever. The body stays a single tonal black; the only &ldquo;colour&rdquo; is a Pantone Cool Grey 7C stitch, kept on the panels and deliberately off the pockets, handles and smart sleeve so the seams read as tailoring, not decoration. PU leather goes only on the faces a hand actually touches &mdash; the top handle, the lower front, the back panel.</p>
            </div>
            <div className="figure" style={{ margin: 0 }}>
              <img src="/images/phoenix/fig_06.png" alt="Body fabric, trim stitch, PU placement and hardware allocation, documented to specification" style={{ width: '100%' }} />
              <figcaption>Body fabric, trim stitch, PU placement and hardware allocation, documented to specification.</figcaption>
            </div>
          </div>

          {/* Full-width hardware family */}
          <div style={{ borderTop: '1px solid var(--hairline)', paddingTop: 'clamp(40px, 5vw, 64px)' }}>
            <h3 style={{ fontFamily: 'var(--display)', fontStyle: 'italic', fontWeight: 400, fontSize: 'clamp(26px, 3.2vw, 40px)', lineHeight: 1.1, letterSpacing: '-.012em', color: 'var(--ink)', marginBottom: 'clamp(40px, 5vw, 56px)' }}>One hardware family.</h3>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)' }}>
              {[
                { num: '01', head: 'Metal logo', body: 'A solid badge, not a printed mark.' },
                { num: '02', head: 'Brushed zippers', body: 'Metal pulls with a brushed finish across the pockets.' },
                { num: '03', head: 'Matched pullers', body: 'One puller language head to toe.' },
                { num: '04', head: 'Metal rivets', body: 'The same brushed tone at every stress point.' },
                { num: '05', head: 'Tonal stitch', body: 'Cool grey on black — visible, not loud.' },
              ].map(({ num, head, body }, i, arr) => (
                <div key={num} style={{ padding: 'clamp(20px, 2.5vw, 32px) clamp(10px, 1.5vw, 18px) clamp(20px, 2.5vw, 32px) clamp(10px, 1.5vw, 18px)', borderRight: i < arr.length - 1 ? '1px solid var(--hairline)' : 'none', paddingLeft: i === 0 ? 0 : 'clamp(10px, 1.5vw, 18px)', paddingRight: i < arr.length - 1 ? 'clamp(10px, 1.5vw, 18px)' : 0 }}>
                  <span style={{ fontFamily: 'var(--display)', fontStyle: 'italic', fontSize: 'clamp(28px, 3vw, 40px)', color: 'var(--accent)', display: 'block', marginBottom: '20px', letterSpacing: '-.01em' }}>{num}</span>
                  <span style={{ fontFamily: 'var(--body)', fontWeight: 500, fontSize: '10.5px', letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--ink)', display: 'block', marginBottom: '12px' }}>{head}</span>
                  <span style={{ fontFamily: 'var(--body)', fontSize: '14.5px', lineHeight: 1.55, color: 'var(--muted)' }}>{body}</span>
                </div>
              ))}
            </div>

            <div className="body-prose" style={{ marginTop: '40px', maxWidth: '60ch' }}>
              <p>The point isn't any single component. It's that they all speak the same brushed-metal language, so there's no weak link for the eye to catch and re-file the bag as cheap.</p>
            </div>
          </div>
        </div>
      </section>


      {/*  SECTION 08 — FORM & PROPORTION  */}
      <section className="case-section band--paper-deep">
        <div className="container">
          <div className="section-marker">
            <span className="num">08.</span>
            <span className="label">Form &amp; proportion</span>
          </div>
          <h2 className="section-title">Designed by ratio, not by eye.</h2>

          <div className="body-prose">
            <p>The front face is built on a unit grid &mdash; twin pockets at five units wide with a two-unit gap, the body laid out at twelve units tall by fourteen wide. Proportion is one of the quietest premium signals there is, and the cheapest to get wrong, so I specified it rather than eyeballed it.</p>
            <p>Down to the details: a lifted, edge-stitched top handle, a neoprene base, two corner guards, an 8-wheel trolley, and a smart-sleeve clearance specified to the millimetre. Built on Safari's existing Brighton construction so it could reach production without bespoke tooling.</p>
          </div>

          <div className="figure">
            <img src="/images/phoenix/fig_07.png" alt="Front face dimensioned overlay — pockets at 5 units wide with 2-unit gap, body at 12 × 14 units" />
            <figcaption>Front face dimensioned overlay &mdash; pockets at 5 units wide with 2-unit gap, body at 12 &times; 14 units.</figcaption>
            <p className="figure-caption">The grid isn&rsquo;t decoration. It&rsquo;s the proportion that reads premium before any material does.</p>
          </div>
        </div>
      </section>

      {/*  SECTION 09 — EXPERIENCE  */}
      <section className="case-section">
        <div className="container">
          <div className="section-marker">
            <span className="num">09.</span>
            <span className="label">The experience</span>
          </div>
          <h2 className="section-title">Where the bag earns its price.</h2>

          <div className="body-prose">
            <p>A premium bag whispers &ldquo;we thought about you&rdquo; the moment it opens. Phoenix opens in two stages: the front panel folds down on webbing straps to reveal a dedicated laptop and tablet compartment, then the main compartment behind it.</p>
            <p>Inside: an RFID-blocking fabric pocket, a dedicated power-bank pocket, a wet pouch, mesh organisation throughout, and number-5 reverse zips. And one controlled indulgence &mdash; the red I took off the outside, brought back <em>inside</em> as a single webbing pull with a gun-metal key holder, where the accent costs little and the delight is private. Restraint outside, a small reward within &mdash; the same colour, moved to where it reads as care rather than as a value cue.</p>
          </div>

          <div className="figure">
            <img src="/images/phoenix/fig_08c.png" alt="Front panel folded down on its webbing straps, the dedicated laptop and tablet bay revealed" />
            <figcaption>Front panel released on its webbing straps; padded laptop sleeve and tablet bay revealed inside.</figcaption>
          </div>

          <div className="figure-grid figure-grid--2">
            <div className="figure">
              <img src="/images/phoenix/fig_08a.png" alt="Twin front pockets, laptop bay and main compartment, walked through" />
              <figcaption>Front pockets 01 and 02, front-panel pocket 03, laptop compartment 04, main compartment 05.</figcaption>
            </div>
            <div className="figure">
              <img src="/images/phoenix/fig_08b.png" alt="Front panel folds to the laptop and tablet bay; the main compartment opens behind it — mesh, RFID, wet pouch, webbing pull" />
              <figcaption>First opening reveals the laptop pocket, tablet holder and mesh pocket; second opening reveals the main compartment, wet pouch and front-panel webbing straps.</figcaption>
            </div>
          </div>
        </div>
      </section>

      {/*  SECTION 10 — PRODUCTION  */}
      <section className="case-section band--paper-deep">
        <div className="container">
          <div className="section-marker">
            <span className="num">10.</span>
            <span className="label">Production</span>
          </div>
          <h2 className="section-title">Premium that survives the factory.</h2>

          <div className="body-prose">
            <p>The trickiest moment in the build was the front pockets. An earlier version had them stitched directly onto a plain front panel &mdash; visually unframed, structurally risky: curved seams on a flat face pucker, slow the sewing line, and fail QC. Left in that form, it would have surfaced as a cost and quality issue at sampling.</p>
            <p>Rather than try to engineer around that build, I committed to a different construction &mdash; extending a PU trim line edge to edge so the pockets sit inside a frame, not on top of a panel. The framed version reads more resolved <em>and</em> sews clean. Around it, every component was drawn from families Safari already tooled &mdash; Aphrodite hardware, Polaris wheel caps, a Ballpark trolley &mdash; so nothing premium needed new tooling. The whole thing went to the factory as a 13-page technical pack, complete enough to build without me in the room.</p>
            <p>Finish also had to win a cost argument. Sourcing pushed back on the metal hardware at $30 FOB, so the components were reworked to hold the look without the spend &mdash; the rivets, for instance, are hollow-cored: the same brushed face, less metal, a lighter bag. Premium where it shows; engineered out where it doesn't.</p>
          </div>

          <div className="stat-block stat-block--6">
            <div className="cell"><span className="n">$30</span><span className="lbl">FOB &middot; held</span></div>
            <div className="cell"><span className="n">₹9,999</span><span className="lbl">Retail tier</span></div>
            <div className="cell"><span className="n">13</span><span className="lbl">Page spec pack</span></div>
            <div className="cell"><span className="n">8</span><span className="lbl">Wheels</span></div>
            <div className="cell"><span className="n">210D</span><span className="lbl">Lining quality</span></div>
            <div className="cell"><span className="n">0</span><span className="lbl">Prints &middot; accent colours</span></div>
          </div>

          <div className="figure">
            <img src="/images/phoenix/fig_09.png" alt="Snapshot of the 13-page manufacturing pack, written for the factory to build without me in the room" />
            <figcaption>Snapshot of the 13-page manufacturing pack, written for the factory to build without me in the room.</figcaption>
          </div>
        </div>
      </section>

      {/*  SECTION 11 — HOW IT SHIPPED  */}
      <section className="case-section">
        <div className="container">
          <div className="section-marker">
            <span className="num">11.</span>
            <span className="label">How it shipped</span>
          </div>
          <h2 className="section-title">Design sat alongside production, not upstream of it.</h2>

          <div className="body-prose">
            <p>Phoenix shipped because design didn't sit upstream of production &mdash; it sat alongside it. Five working partnerships, each with the standing to change the bag, kept the premium read intact from sketch to shelf.</p>
          </div>

          <div className="framework framework--5">
            <div className="fw-cell">
              <span className="num">01</span>
              <span className="head">Product management</span>
              <span className="body">Set the cost, retail tier and feature list. The agreement we built: features earn their place against the FOB; restraint isn't a missing feature.</span>
            </div>
            <div className="fw-cell">
              <span className="num">02</span>
              <span className="head">Category &amp; marketing</span>
              <span className="body">Owned the shelf and the channel forecast. Brought them into the alignment early &mdash; colour direction, hardware family, packaging &mdash; so the launch case wasn't a surprise.</span>
            </div>
            <div className="fw-cell">
              <span className="num">03</span>
              <span className="head">Sourcing</span>
              <span className="body">Negotiated against the $30 FOB. Where they pushed back on hardware cost, we re-engineered (hollow-cored rivets, brushed face preserved) rather than re-styled.</span>
            </div>
            <div className="fw-cell">
              <span className="num">04</span>
              <span className="head">Factory development</span>
              <span className="body">Flagged the curved-seam risk on the unframed pocket version early enough to redirect the build, not patch it. The framed-pocket construction we committed to improved both the read and the line speed.</span>
            </div>
            <div className="fw-cell">
              <span className="num">05</span>
              <span className="head">Manufacturing partner</span>
              <span className="body">Built the bag in China. The 13-page spec pack was written for them to build without me in the room &mdash; but the relationship survived a Canton Fair visit, sample rounds, and real conversations about tolerance versus intent.</span>
            </div>
          </div>

          <div className="body-prose" style={{ 'marginTop': 'clamp(40px,5vw,56px)' }}>
            <p>The product succeeded because design, sourcing, manufacturing and category aligned on the same outcome &mdash; not because any one of us insisted on it.</p>
          </div>
        </div>
      </section>

      {/*  SECTION 12 — OUTCOME  */}
      <section className="case-section band--paper-deep">
        <div className="container">
          <div className="section-marker">
            <span className="num">12.</span>
            <span className="label">Outcome</span>
          </div>
          <h2 className="section-title">A value brand, holding a premium read.</h2>

          <div className="body-prose">
            <p>Phoenix was made deliberately in low volume &mdash; an expensive product on a cautious forecast &mdash; and demand ran ahead of it. It has sold through and reordered, and sells out fast across Safari's own site, Amazon, Flipkart and Myntra whenever it returns to stock. It also took first in its category &mdash; <em>Favourite Soft Side Luggage</em> &mdash; at the Travel Sentry Product Awards 2025.</p>
            <p>The clearest verdict was internal: the tonal, restraint-led approach didn't stay with one bag. Safari carried the same design language into its slings and laptop bags &mdash; a single brief's answer became a direction.</p>
          </div>
        </div>
      </section>

      {/*  SECTION 13 — BUSINESS IMPACT  */}
      <section className="case-section">
        <div className="container">
          <div className="section-marker">
            <span className="num">13.</span>
            <span className="label">Business impact</span>
          </div>
          <h2 className="section-title">Design that earned pricing power.</h2>

          <div className="body-prose">
            <p>Phoenix was briefed at a ₹9,999 retail tier. Internal confidence in landing that price was cautious &mdash; Safari's market read is value, not desire, and the premium positioning was untested in the category. The first production run was kept deliberately small to protect against dead-stock risk.</p>
            <p>Retail acceptance ran well ahead of forecast, reorders came in, and sell-through outperformed the cautious case. On ecommerce, the realised price moved past ₹10,000 without losing traction &mdash; strengthening contribution margin against plan. These figures aren't public, so I don't publish them here, but each is verifiable on request, and each is exactly what the design was asked to make possible.</p>
            <p>The longer-signal of confidence was that the language travelled. Safari extended the same tonal-restraint direction into slings and laptop bags &mdash; a single brief's answer became a category direction. <em>Design didn't just deliver the product; it created the conditions for the brand to price and position differently.</em></p>
          </div>
        </div>
      </section>

      {/*  SECTION 14 — REFLECTION  */}
      <section className="case-section band--paper-deep">
        <div className="container">
          <div className="section-marker">
            <span className="num">14.</span>
            <span className="label">Reflection</span>
          </div>
          <h2 className="section-title">What I'd push next, and what I take into the next brief.</h2>

          <div className="body-prose" style={{ marginBottom: 'clamp(64px, 8vw, 112px)' }}>
            <p>If a future brief loosened the cost, the first thing I'd change isn't the hardware &mdash; it's the base fabric itself, so premium runs through the whole shell and not only the faces a hand finds.</p>
            <p>Phoenix sold out &mdash; but in deliberately small numbers, and with few reviews behind it. The honest open question is whether restraint <em>scales</em>: did the quiet version win on merit, or because it stayed a low-volume, self-selecting buy? Before assuming quiet always reads as premium to a value-brand shopper, I'd test it against a louder version at shelf, at real volume.</p>
          </div>

          {/* Full-width 4-col takeaways grid */}
          <div style={{ borderTop: '1px solid var(--hairline)', paddingTop: 'clamp(40px, 5vw, 64px)' }}>
            <h3 style={{ fontFamily: 'var(--display)', fontStyle: 'italic', fontWeight: 400, fontSize: 'clamp(26px, 3.2vw, 40px)', lineHeight: 1.1, letterSpacing: '-.012em', color: 'var(--ink)', marginBottom: 'clamp(40px, 5vw, 56px)' }}>What I take into the next brief.</h3>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
              {[
                { num: '01', head: 'Proportion before detail', body: 'Get the silhouette right and most of the work is done.' },
                { num: '02', head: 'Surface discipline', body: 'Every seam, stitch and panel line earns its place.' },
                { num: '03', head: 'Material honesty', body: "Invest in the few signals the hand and eye trust, and don't fake the rest." },
                { num: '04', head: 'Visual noise reduction', body: "When craftsmanship budgets are tight, remove the opportunities for inconsistency rather than decorate around them." },
              ].map(({ num, head, body }, i, arr) => (
                <div key={num} style={{ padding: 'clamp(20px, 2.5vw, 32px) clamp(10px, 1.5vw, 18px) clamp(20px, 2.5vw, 32px) clamp(10px, 1.5vw, 18px)', borderRight: i < arr.length - 1 ? '1px solid var(--hairline)' : 'none', paddingLeft: i === 0 ? 0 : 'clamp(10px, 1.5vw, 18px)', paddingRight: i < arr.length - 1 ? 'clamp(10px, 1.5vw, 18px)' : 0 }}>
                  <span style={{ fontFamily: 'var(--display)', fontStyle: 'italic', fontSize: 'clamp(28px, 3vw, 40px)', color: 'var(--accent)', display: 'block', marginBottom: '20px', letterSpacing: '-.01em' }}>{num}</span>
                  <span style={{ fontFamily: 'var(--body)', fontWeight: 500, fontSize: '10.5px', letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--ink)', display: 'block', marginBottom: '12px' }}>{head}</span>
                  <span style={{ fontFamily: 'var(--body)', fontSize: '14.5px', lineHeight: 1.55, color: 'var(--muted)' }}>{body}</span>
                </div>
              ))}
            </div>

            <div className="body-prose" style={{ marginTop: '40px', maxWidth: '60ch' }}>
              <p>None of these are luggage-specific; they're how I'd come at the next category too.</p>
            </div>
          </div>
        </div>
      </section>


      {/*  SECTION 15 — ROLE & SCOPE  */}
      <section className="case-section">
        <div className="container">
          <div className="section-marker">
            <span className="num">15.</span>
            <span className="label">Role &amp; scope</span>
          </div>
          <h2 className="section-title">What I made, honestly.</h2>

          <div className="body-prose">
            <p>Sole designer on Phoenix, from a marketing brief to a production-ready specification. The visualisation here is mine; AI was used only to communicate finish and intent, never to engineer the product.</p>
          </div>

          <div className="role-scope-grid">
            <div className="k">Owned end to end</div>
            <div className="v">
              <ul>
                <li>Interrogated the brief and named its core contradiction &mdash; premium feel, value cost.</li>
                <li>Concept exploration and the decision to remove colour in favour of material.</li>
                <li>The full CMF system &mdash; body, trim, PU placement and the brushed-metal hardware family.</li>
                <li>Form, proportion and construction on the Brighton platform.</li>
                <li>The complete 13-page manufacturing pack and factory hand-off.</li>
                <li>Aligned product, sourcing, factory and category teams on a direction that delivered the retail tier &mdash; and the pricing power that followed.</li>
              </ul>
            </div>
          </div>

          <div className="pull-quote">
            <p>Phoenix taught me that &ldquo;premium&rdquo; isn't a material &mdash; it's a system where no single touchpoint betrays the price.</p>
          </div>
        </div>
      </section>

      {/*  SECTION 16 — ADDITIONAL PRODUCTS  */}
      <section className="case-section band--paper-deep">
        <div className="container">
          <div className="section-marker">
            <span className="num">16.</span>
            <span className="label">Additional products shipped</span>
          </div>
          <h2 className="section-title">Phoenix is one of several products I've taken to market.</h2>

          <div className="body-prose">
            <p>The operating principles behind Phoenix &mdash; constraint-led decisions, CMF as the primary lever, form direction held through development &mdash; have applied across multiple launches. Below is a selection of work currently live in retail and D2C.</p>
          </div>

          <div className="subsection">
            <h3 className="subsection-title">Original design &mdash; form, CMF, development.</h3>
            <div className="body-prose">
              <p>Products where I defined the form language, architecture and CMF. Engineering CAD executed in collaboration with a specialist CAD designer.</p>
            </div>

            <div style={{ marginLeft: 'calc(-1 * var(--pad-x))', marginRight: 'calc(-1 * var(--pad-x))', marginTop: 'clamp(32px, 4vw, 48px)' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'clamp(24px, 3vw, 40px)', padding: '0 var(--pad-x)' }}>
                {[
                  { src: '/images/phoenix/astra_neo.png', brand: 'Safari · Hard-shell trolley', name: 'Astra Neo', desc: 'Lead designer — form direction, ribbed surface architecture, colour-accent CMF and development. Engineering CAD in collaboration.', cta: 'View on Flipkart →', href: '#' },
                  { src: '/images/phoenix/theo.png', brand: 'Genius · Hard-shell trolley', name: 'Theo', desc: 'Lead designer — form concept, youth-lifestyle CMF direction and development across the Genius range. Engineering CAD in collaboration.', cta: 'View on Amazon →', href: '#' },
                  { src: '/images/phoenix/scarlett.png', brand: 'Genie · Hard-shell trolley', name: 'Scarlett', desc: 'Lead designer — diagonal wave shell concept, ombré CMF direction and full product development. Engineering CAD in collaboration.', cta: 'View on Genie →', href: '#' },
                ].map(({ src, brand, name, desc, cta, href }) => (
                  <div key={name}>
                    <div style={{ aspectRatio: '1 / 1', overflow: 'hidden', marginBottom: '20px', border: '1px solid var(--hairline)' }}>
                      <img src={src} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                    </div>
                    <span style={{ fontFamily: 'var(--body)', fontWeight: 500, fontSize: '10.5px', letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--muted)', display: 'block', marginBottom: '8px' }}>{brand}</span>
                    <h4 style={{ fontFamily: 'var(--display)', fontStyle: 'italic', fontWeight: 400, fontSize: 'clamp(20px, 2.2vw, 28px)', lineHeight: 1.1, letterSpacing: '-.01em', color: 'var(--ink)', marginBottom: '10px' }}>{name}</h4>
                    <p style={{ fontFamily: 'var(--body)', fontSize: '14.5px', lineHeight: 1.6, color: 'var(--muted)', marginBottom: '14px' }}>{desc}</p>
                    <a href={href} target="_blank" style={{ fontFamily: 'var(--body)', fontSize: '13px', fontWeight: 500, color: 'var(--accent)', textDecoration: 'none', letterSpacing: '.02em' }}>{cta}</a>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="subsection">
            <h3 className="subsection-title">CMF &amp; creative direction.</h3>
            <div className="body-prose">
              <p>Products where I directed the colour, material and finish on an existing shell. The CMF decision &mdash; which colours move, which finishes sell, which direction the brand should read &mdash; is design work. The shell engineering was someone else's.</p>
            </div>

            <div className="product-grid product-grid--2">
              <div className="product-card">
                <img className="visual" style={{ objectFit: 'cover', width: '100%', display: 'block' }} src="/images/phoenix/hue.png" alt="Hue" />
                <span className="brand">Safari &middot; Printed hard-shell trolley</span>
                <h4 className="name">Hue</h4>
                <p className="desc">CMF direction &mdash; print concept, ink-wash pattern development and colourway selection across the range. ~8,000 units sold monthly on Flipkart (June&ndash;September 2025).</p>
                <a className="cta" href="#" target="_blank">View on Flipkart &rarr;</a>
              </div>
              <div className="product-card">
                <img className="visual" style={{ objectFit: 'cover', width: '100%', display: 'block' }} src="/images/phoenix/eterna.png" alt="Eterna" />
                <span className="brand">Safari &times; Manyavar &middot; Wedding collaboration</span>
                <h4 className="name">Eterna</h4>
                <p className="desc">Creative direction &mdash; established the look, feel and visual identity of the collaboration. CMF, surface detailing and brand tone defined under my direction. Final execution led by the team following my departure.</p>
                <a className="cta" href="#" target="_blank">View on Safari &rarr;</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*  NEXT PROJECT  */}
      <section className="next-project">
        <div className="container">
          <span className="label">Next project</span>
          <a className="next-project-link" href="/SONA_Case_Study">Sona <span className="arrow">→</span></a>
          <p className="desc">Designing the hour before sleep &mdash; a self-directed concept for a category that doesn't yet exist. Object, scent, app and brand, designed to hand off across one experience.</p>
        </div>
      </section>

    </main>
  );
}
