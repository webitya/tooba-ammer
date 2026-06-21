import Link from 'next/link';

export const metadata = {
  title: 'Sona — Tooba Ameer',
  description: 'Sona — designing the hour before sleep. A speculative system concept: ceramic dock, scent compositions, app and brand for the transition out of the day.',
};

export default function CaseStudy() {
  return (
    <main>
      {/* HERO */}
      <section className="band hero">
        <div className="container">
          <span className="label">Case study &middot; Sona &middot; Concept &middot; 2025</span>
          <h1 className="display-xl">Sona</h1>
          <div className="hero-body">
            <div className="hero-body-text">
              <p className="hero-tagline">Designing the hour before sleep.</p>
              <p className="lede BL">Most sleep products focus on sleep. Sona focuses on what happens <em className="lead">before</em> it &mdash; a concept exploring how a ceramic dock, scent compositions, an app, and a brand might help people transition out of the day and into rest.</p>
            </div>
            <div className="hero-body-figure">
              <div className="figure">
                <img src="/images/sona/fig_01.png" alt="The Sona Ritual Dock on a bedside table in evening light &mdash; a glass of water and a paperback beside it, city lights blurred through the window" />
                <figcaption>The Sona Ritual Dock on a bedside table in evening light &mdash; a glass of water and a paperback beside it, city lights blurred through the window.</figcaption>
              </div>
            </div>
          </div>

          <div className="hero-meta">
            <div><span className="k">Role</span><span className="v">Future-opportunity design &mdash; concept, product &amp; ecosystem vision, art direction</span></div>
            <div><span className="k">Type</span><span className="v">Speculative concept</span></div>
            <div><span className="k">Duration</span><span className="v">4 weeks</span></div>
            <div><span className="k">Focus</span><span className="v">Behaviour &middot; systems &middot; ritual design</span></div>
          </div>

        </div>
      </section>

      {/* SECTION 01 — DEMONSTRATES */}
      <section className="case-section">
        <div className="container">
          <div className="section-marker">
            <span className="num">01.</span>
            <span className="label">What this demonstrates</span>
          </div>
          <h2 className="section-title">Four competencies on display.</h2>

          <div className="framework framework--4">
            <div className="fw-cell">
              <span className="num">01</span>
              <span className="head">Strategic foresight</span>
              <span className="body">Reading a behavioural shift before the market names it &mdash; the problem is the transition out of the day, not sleep itself.</span>
            </div>
            <div className="fw-cell">
              <span className="num">02</span>
              <span className="head">Opportunity design</span>
              <span className="body">Identifying an unowned space and defining the category that should fill it, rather than answering an existing brief.</span>
            </div>
            <div className="fw-cell">
              <span className="num">03</span>
              <span className="head">Ecosystem thinking</span>
              <span className="body">Four parts &mdash; object, scent, app, brand &mdash; designed to hand off across one experience, not a product with accessories.</span>
            </div>
            <div className="fw-cell">
              <span className="num">04</span>
              <span className="head">Behavioural insight</span>
              <span className="body">Designing for how people actually disengage, and refusing the tracking paradigm that makes the problem worse.</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 02 — WHY */}
      <section className="case-section band--paper-deep">
        <div className="container">
          <div className="section-marker">
            <span className="num">02.</span>
            <span className="label">Why I pursued this project</span>
          </div>
          <h2 className="section-title">A brief I chose, to ask a bigger question.</h2>

          <div className="body-prose">
            <p>Most of my work is commercial and tightly constrained &mdash; products built to ship and sell against a cost and a calendar. I took on this speculative brief deliberately, to work the muscle that day-to-day product work rarely asks for: starting from a <em>behaviour</em> rather than a brief, and designing a whole ecosystem rather than a single object.</p>
            <p>The brief set the territory &mdash; a sleep and mindfulness ritual for urban professionals who'd tried everything and distrusted brands that over-promise &mdash; and asked for a product, an app, and a campaign. I used it to answer a larger question: <em>if I could define a category from scratch, what would I choose to build, and what would I refuse to?</em></p>
          </div>
        </div>
      </section>

      {/* SECTION 03 — OPPORTUNITY */}
      <section className="case-section">
        <div className="container">
          <div className="section-marker">
            <span className="num">03.</span>
            <span className="label">The opportunity</span>
          </div>
          <h2 className="section-title">A market pointed at the wrong moment.</h2>

          <div className="body-prose">
            <p>The sleep market is crowded, but it is almost entirely pointed at the wrong moment. Trackers, scores, and smart mattresses measure sleep once you're in it; supplements and teas treat the body. Almost nothing is designed for the hour <em>before</em> &mdash; the transition out of a stimulated day, which is where most people actually get stuck.</p>
            <p>That gap is widening. Evenings have filled with screens engineered to hold attention, and the dominant &ldquo;solution&rdquo; &mdash; a sleep app on the same phone causing the problem &mdash; competes with the distraction instead of ending it. <em>The underserved user isn't the person who can't sleep. It's the person who can't stop.</em> That's an unowned category, and the bet behind Sona is that it's the one worth defining.</p>
          </div>
        </div>
      </section>

      {/* SECTION 04 — FORESIGHT */}
      <section className="case-section band--paper-deep">
        <div className="container">
          <div className="section-marker">
            <span className="num">04.</span>
            <span className="label">The foresight</span>
          </div>
          <h2 className="section-title">Three bets about behaviour.</h2>

          <div className="body-prose">
            <p>Before any form, I made three bets about how people actually relate to the end of the day &mdash; and pressure-tested each one: against my own reasoning, and in unstructured conversations with people I trusted to push back.</p>
          </div>

          <div className="framework framework--3">
            <div className="fw-cell">
              <span className="num">01</span>
              <span className="head">Sleep isn't the problem. Transition is.</span>
              <span className="body">The evening has filled with stimulation. The hard part may not be sleeping &mdash; it&rsquo;s stopping.</span>
              <span className="q">What if we designed the transition itself, not the sleep?</span>
            </div>
            <div className="fw-cell">
              <span className="num">02</span>
              <span className="head">Awareness doesn't change behaviour.</span>
              <span className="body">People already know the habits. Knowledge isn't the barrier &mdash; starting is.</span>
              <span className="q">What if the goal was to make the right move easier to begin?</span>
            </div>
            <div className="fw-cell">
              <span className="num">03</span>
              <span className="head">A physical ritual beats a digital reminder.</span>
              <span className="body">Most sleep tools live inside the device causing the distraction. Objects occupy space and signal intent.</span>
              <span className="q">Could an object help people disengage better than another screen?</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 05 — KEY DECISIONS */}
      <section className="case-section">
        <div className="container">
          <div className="section-marker">
            <span className="num">05.</span>
            <span className="label">Key design decisions</span>
          </div>
          <h2 className="section-title">How I arrived at the ecosystem.</h2>

          <div className="framework framework--3">
            <div className="fw-cell">
              <span className="num">01</span>
              <span className="head">Why physical, not an app alone?</span>
              <span className="body">A screen competes with the very distraction it's meant to end. A physical object occupies space and signals intent &mdash; a reminder by existing, not by interrupting.</span>
            </div>
            <div className="fw-cell">
              <span className="num">02</span>
              <span className="head">Why scent?</span>
              <span className="body">A cue that works without attention or a screen. Smell ties to memory and mood faster than an interface can, so it carries the ritual while the phone goes away.</span>
            </div>
            <div className="fw-cell">
              <span className="num">03</span>
              <span className="head">Why a dock, not a wearable or candle?</span>
              <span className="body">A ritual needs a fixed place to repeat. A wearable blurs into the day; a candle has no system behind it. A dock gives the evening a spot to return to &mdash; and place is what makes a habit stick.</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 06 — STRATEGIC DECISION */}
      <section className="case-section band--paper-deep">
        <div className="container">
          <div className="section-marker">
            <span className="num">06.</span>
            <span className="label">The strategic decision</span>
          </div>
          <h2 className="section-title">No sensors. No scores. No streaks.</h2>

          <div className="body-prose">
            <p>The first idea was a quiet record of restful nights. I dropped it before building it. <em>The moment Sona scored your sleep, it would become the thing it was meant to replace</em> &mdash; another metric to optimise, another reason to reach for the phone, another way to fail at rest.</p>
            <p>So the founding decision was a refusal. In a category whose entire logic is measurement, choosing <em>not</em> to measure is the strategic bet &mdash; it's what makes Sona a different proposition rather than a softer-looking tracker. Everything else follows from that one line: the dock has no screen, the app has one job a night and then disappears, and the only thing Sona keeps is a plain record it draws no conclusions from.</p>
          </div>

          <div className="pull-quote">
            <p>The discipline wasn&rsquo;t designing more. It was identifying what the category does by reflex &mdash; and deciding to do the opposite on purpose.</p>
          </div>
        </div>
      </section>

      {/* SECTION 07 — POSITIONING */}
      <section className="case-section">
        <div className="container">
          <div className="section-marker">
            <span className="num">07.</span>
            <span className="label">Positioning</span>
          </div>
          <h2 className="section-title">I set the world before the object.</h2>

          <div className="body-prose">
            <p>Before drawing a single form, I decided what Sona was <em>not</em>: not a gadget, not a wellness app, not aromatherapy. I built its world from publishing, bookmaking, photography, and type &mdash; editorial, restrained, exact &mdash; and the palette of ivory, ink, and ochre, the type, and the tone all came from here.</p>
          </div>

          <div className="figure">
            <img src="/images/sona/fig_02.png" alt="Eight-up reference grid &mdash; publication, bookmaking, photography, typography, colour, object, interior and cultural references, with a panel showing where Sona lands" />
            <p className="figure-caption">Reference imagery sourced and credited; the synthesis and direction are mine.</p>
          </div>
        </div>
      </section>

      {/* SECTION 08 — ECOSYSTEM */}
      <section className="case-section band--paper-deep">
        <div className="container">
          <div className="section-marker">
            <span className="num">08.</span>
            <span className="label">The ecosystem</span>
          </div>
          <h2 className="section-title">Four parts that hand off across the evening.</h2>

          <div className="body-prose">
            <p>Sona isn't a single product, and it isn't a system in the operational sense &mdash; it's an ecosystem of four parts &mdash; dock, compositions, app, and brand &mdash; each owning a moment and passing to the next. I mapped the transition into five stages and gave each part a stage to hold, then hand on.</p>
          </div>

          <div className="flow">
            <div className="flow-stage">
              <span className="num">01</span>
              <span className="stage-name">Arrive</span>
              <span className="desc">The day ends. The phone is still in hand.</span>
              <span className="owner">The moment before</span>
            </div>
            <div className="flow-stage">
              <span className="num">02</span>
              <span className="stage-name">Choose</span>
              <span className="desc">A composition sets the intent for the evening.</span>
              <span className="owner">App + Compositions</span>
            </div>
            <div className="flow-stage">
              <span className="num">03</span>
              <span className="stage-name">Begin</span>
              <span className="desc">The paper goes on the Dock; light and scent start.</span>
              <span className="owner">Dock</span>
            </div>
            <div className="flow-stage">
              <span className="num">04</span>
              <span className="stage-name">Release</span>
              <span className="desc">The phone goes down; the room takes over.</span>
              <span className="owner">Dock + Brand</span>
            </div>
            <div className="flow-stage">
              <span className="num">05</span>
              <span className="stage-name">Rest</span>
              <span className="desc">Reading, stillness &mdash; sleep arrived at, not chased.</span>
              <span className="owner">The room</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 09 — DOCK */}
      <section className="case-section">
        <div className="container">
          <div className="section-marker">
            <span className="num">09.</span>
            <span className="label">The solution &middot; Dock</span>
          </div>
          <h2 className="section-title">A domestic object, not a gadget.</h2>

          <div className="body-prose">
            <p>The hard part was resisting the obvious &mdash; a sleek tech device. <em>A device asks to be operated; an object simply sits there and signals intent.</em> So the dock reads as ceramic stone, warm and matte &mdash; something you'd own, not tend to &mdash; and disappears into the room, so the ritual, not the technology, is what the evening returns to.</p>
          </div>

          <div className="figure">
            <img src="/images/sona/fig_03.png" alt="Sona Ritual Dock specification panel &mdash; bedside hero render, orthographic views at 148 by 105 by 32 mm, ceramic-stone and satin-bronze materials, the heat-and-scent sequence, an exploded internal build, and detail callouts" />
            <figcaption>Sona Ritual Dock specification panel &mdash; bedside hero render, orthographic views at 148 by 105 by 32 mm, ceramic-stone and satin-bronze materials, the heat-and-scent sequence, an exploded internal build, and detail callouts.</figcaption>
          </div>
        </div>
      </section>

      {/* SECTION 10 — COMPOSITIONS */}
      <section className="case-section band--paper-deep">
        <div className="container">
          <div className="section-marker">
            <span className="num">10.</span>
            <span className="label">The solution &middot; Compositions</span>
          </div>
          <h2 className="section-title">Packaged like a publication, not a supplement.</h2>

          <div className="body-prose">
            <p>I started with fragrance capsules and oils, and rejected both &mdash; each instantly recast Sona as a supplement or an aromatherapy product. The answer was incense papers in a linen-wrapped box, indexed like a small publication: <em>no oils, no liquids, just paper, scent, and time.</em></p>
          </div>

          <div className="figure">
            <img src="/images/sona/fig_04.webp" alt="Sona compositions and packaging panel &mdash; the seven-composition index, the linen-wrapped box, inside the box, the manual card, one composition with its incense papers, and full specifications" />
            <figcaption>Sona compositions and packaging panel &mdash; the seven-composition index, the linen-wrapped box, inside the box, the manual card, one composition with its incense papers, and full specifications.</figcaption>
          </div>
        </div>
      </section>

      {/* SECTION 11 — APP */}
      <section className="case-section">
        <div className="container">
          <div className="section-marker">
            <span className="num">11.</span>
            <span className="label">Experience journey &middot; the app</span>
          </div>
          <h2 className="section-title">One flow, then the phone goes down.</h2>

          <div className="body-prose">
            <p>The brief asked for a companion app; the design problem was making it the kind you open once a night and then forget. A single job each evening &mdash; set the ritual, then disappear &mdash; ending in a screen that simply says: <em>set the phone down, Sona will continue.</em></p>
          </div>

          <div className="framework framework--4">
            <div className="fw-cell">
              <span className="num">01</span>
              <span className="head">Open</span>
              <span className="body">Open Sona &mdash; it finds the Dock and picks up the ritual. No sign-up, no feed, no notifications.</span>
            </div>
            <div className="fw-cell">
              <span className="num">02</span>
              <span className="head">Set</span>
              <span className="body">Set what the evening is for, choose tonight's composition, and set the length of the descent.</span>
            </div>
            <div className="fw-cell">
              <span className="num">03</span>
              <span className="head">Begin</span>
              <span className="body">Place the incense paper in the Dock's vessel; the Dock recognises it and begins.</span>
            </div>
            <div className="fw-cell">
              <span className="num">04</span>
              <span className="head">Release</span>
              <span className="body">Set the phone down. The ritual screen dims to the room and the sequence continues without you.</span>
            </div>
          </div>

          <div className="figure">
            <img src="/images/sona/fig_05.png" alt="Twelve screens from the Sona app prototype across three rows &mdash; onboarding and the case for a sequence not a score, dock pairing and set-up, the nightly intent and descent choices, the dark in-ritual states, and the 28-night composition cycle" />
            <figcaption>Twelve screens from the Sona app prototype across three rows &mdash; onboarding and the case for a sequence not a score, dock pairing and set-up, the nightly intent and descent choices, the dark in-ritual states, and the 28-night composition cycle.</figcaption>
          </div>
        </div>
      </section>

      {/* SECTION 12 — PROTOTYPE */}
      <section className="case-section band--paper-deep">
        <div className="container">
          <div className="section-marker">
            <span className="num">12.</span>
            <span className="label">Working prototype</span>
          </div>
          <h2 className="section-title">Click through the ritual.</h2>

          <div className="body-prose">
            <p>Beyond static screens, I built Sona's nightly flow as an interactive prototype &mdash; onboarding, set-up, and the ritual itself, click by click.</p>
          </div>

          <div className="prototype-card">
            <div className="text">
              <span className="label">Interactive prototype</span>
              <h3 className="title">The nightly flow, end to end.</h3>
              <p className="desc">Best viewed on desktop. Set in Source Serif 4 &mdash; a freely-available stand-in for Tiempos, the paid font specified in the design but unavailable in the AI-assisted prototyping environment.</p>
            </div>
            <a className="cta" id="sona-open-proto" href="Sona_Prototype.html" target="_blank">Open prototype &rarr;</a>
          </div>
        </div>
      </section>

      {/* SECTION 13 — BRAND */}
      <section className="case-section">
        <div className="container">
          <div className="section-marker">
            <span className="num">13.</span>
            <span className="label">Brand &amp; campaign</span>
          </div>
          <h2 className="section-title">An editorial voice for calm.</h2>

          <div className="body-prose">
            <p>The brief called for a launch campaign, so the identity had to carry beyond the product &mdash; unhurried, exact, closer to a publication than a brand, selling a feeling rather than a feature. I set it against four tensions:</p>
          </div>

          <div className="tension-chips">
            <span className="tension-chip">Calm, <span className="alt">not passive</span></span>
            <span className="tension-chip">Premium, <span className="alt">not exclusive</span></span>
            <span className="tension-chip">Ritual, <span className="alt">not spiritual</span></span>
            <span className="tension-chip">Contemporary, <span className="alt">not clinical</span></span>
          </div>

          <div className="figure">
            <img src="/images/sona/fig_06.png" alt="Sona launch campaign banner &mdash; a hand drawing back a curtain at dusk over a city skyline, captioned &ldquo;the hour recorded.&rdquo;" />
            <figcaption>Sona launch campaign banner &mdash; a hand drawing back a curtain at dusk over a city skyline, captioned &ldquo;the hour recorded.&rdquo;</figcaption>
          </div>

          <div className="figure-grid figure-grid--3">
            <div className="figure">
              <img src="/images/sona/fig_07a.jpg" alt="Sona campaign &mdash; social feed post, 4:5" />
            </div>
            <div className="figure">
              <img src="/images/sona/fig_07b.jpg" alt="Sona campaign &mdash; square social post, 1:1" />
            </div>
            <div className="figure">
              <img src="/images/sona/fig_07c.jpg" alt="Sona campaign &mdash; Instagram story and reel cover, 9:16" />
            </div>
          </div>
          <p className="figure-caption" style={{ textAlign: 'center' }}>Campaign across formats &mdash; web banner, feed, square, and story.</p>
        </div>
      </section>

      {/* SECTION 14 — REFLECTION */}
      <section className="case-section band--paper-deep">
        <div className="container">
          <div className="section-marker">
            <span className="num">14.</span>
            <span className="label">Reflection</span>
          </div>
          <h2 className="section-title">What this approach unlocks.</h2>

          <div className="body-prose">
            <p>Sona is a concept, not a validated product, and I'd treat it that way: before building anything, I'd test the core bet &mdash; <em>does designing the transition actually beat optimising the sleep?</em> &mdash; small and qualitative, in real bedrooms. The commercial questions, refill economics and retention, are what I'd model before it became a product, not after.</p>
            <p>But the part that travels isn't the dock or the scent. It's <em>the method</em>: start from a behaviour the market has misread, identify the moment everyone else is designing around, and decide what to <em>refuse</em> before deciding what to build. That approach isn't specific to sleep. It's how I'd come at any category where the obvious products are all solving the wrong half of the problem &mdash; which is most of the categories worth entering.</p>
          </div>

          <div className="pull-quote">
            <p>Genie was a category rebuilt. Phoenix was a product made to punch above its cost. Sona is the one where I got to ask the earlier question: not how to make the thing better, but whether the category is even pointed at the right need.</p>
          </div>
        </div>
      </section>

      {/* SECTION 15 — ROLE & SCOPE */}
      <section className="case-section">
        <div className="container">
          <div className="section-marker">
            <span className="num">15.</span>
            <span className="label">Role &amp; scope</span>
          </div>
          <h2 className="section-title">What I made.</h2>

          <div className="body-prose">
            <p>Sole designer, end to end: problem framing, concept and form development, CMF, app UI and flows, brand identity and visual system, packaging, and launch campaign &mdash; brought together as an interactive prototype.</p>
            <p>Designed over four weeks from a brief set in a design certification (Job Escape). The concept, product direction and ecosystem vision are mine. I worked with AI tools through the process &mdash; to explore research directions and to build the visualisation and art direction &mdash; directing the calls throughout.</p>
          </div>
        </div>
      </section>

      {/* NEXT PROJECT */}
      <section className="next-project">
        <div className="container">
          <span className="label">Return to</span>
          <a className="next-project-link" href="/#work">Selected work <span className="arrow">→</span></a>
          <p className="desc">Three projects &mdash; five years of building consumer products end to end. Genie, Phoenix, Sona.</p>
        </div>
      </section>
    </main>
  );
}
