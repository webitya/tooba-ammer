import Link from 'next/link';

export const metadata = {
  title: 'Genie — Tooba Ameer',
  description: 'Genie — growing a school-bag brand up with its customer. Five-year category and range strategy at Safari Industries, 2021–2026. Case study by Tooba Ameer.',
};

export default function CaseStudy() {
  return (
    <main>
      {/* ================ HERO ================ */}
      <section className="band hero">
        <div className="container">
          <span className="label">Case study · Safari Industries · 2021—2026</span>
          <h1 className="display-xl">Genie</h1>
          <div className="hero-body">
            <div className="hero-body-text">
              <p className="tagline">Growing a school-bag brand up with its customer.</p>
              <p className="lede BL">
                When I took over design for Genie in 2021, it was a kids' school-bag label. Five back-to-school seasons
                later it was a brand a teenager would choose for herself. I rebuilt its design language and range so the
                brand could grow up with the girl carrying it — from her first big-school bag to college — and led that
                work end to end, from consumer research to the factory floor. Over those five years the brand grew
                around <em className="lead">six-fold</em> across backpacks, luggage and handbags.
              </p>
            </div>
            <div className="hero-body-figure">
              <img
                src="/Geniehero19-6.png"
                alt="Genie Before 2022 and Now 2026 — backpack range evolution showing florals and graphic prints transitioning to structured, muted Korean-aesthetic designs"
                style={{ width: '100%', display: 'block', border: '1px solid var(--hairline)' }}
              />
              <p className="evo-cap">
                Same brand, grown up — from florals and one primary cohort to a range built around construction, surface
                technique and maturity. A backpack a teenager chooses for herself.
              </p>
            </div>
          </div>

          <div className="stats-strip">
            <div className="stat-cell">
              <span className="stat-n">~6×</span>
              <span className="stat-lbl">
                Brand growth
                <br />
                2021—2026
              </span>
            </div>
            <div className="stat-cell">
              <span className="stat-n">3 → 9</span>
              <span className="stat-lbl">
                Ranges in a
                <br />
                back-to-school season
              </span>
            </div>
            <div className="stat-cell">
              <span className="stat-n">21 → 84</span>
              <span className="stat-lbl">
                SKUs per
                <br />
                back-to-school range
              </span>
            </div>
            <div className="stat-cell">
              <span className="stat-n">1 → 6</span>
              <span className="stat-lbl">
                Sales channels
                <br />
                operating model
              </span>
            </div>
          </div>

          <div className="hero-meta">
            <div>
              <span className="k">Role</span>
              <span className="v">Design &amp; Development Manager · sole design owner of Genie</span>
            </div>
            <div>
              <span className="k">Scope</span>
              <span className="v">Consumer research → range strategy → surface, print & CMF → manufacturing → launch</span>
            </div>
            <div>
              <span className="k">Categories</span>
              <span className="v">Backpacks · teen &amp; college · soft &amp; hard luggage · handbags</span>
            </div>
            <div>
              <span className="k">Period</span>
              <span className="v">2021 — 2026 · five back-to-school seasons</span>
            </div>
          </div>
        </div>
      </section>

      {/* ================ 01 — THE CHALLENGE ================ */}
      <section className="section">
        <div className="container">
          <div className="section-marker">
            <span className="num">01.</span>
            <span className="label">The challenge</span>
          </div>
          <h2 className="section-title">A brand that kept losing the girl it won.</h2>

          <div className="prose">
            <p>
              Genie was known for one thing: school bags for little girls. The identity was narrow by design — "girl"
              meant florals, florals meant young, and the whole range spoke to a seven-year-old.
            </p>
            <p>
              The problem wasn't the label. It was what the label cost. Genie's range was roughly{' '}
              <strong>85% florals</strong> — the rest a scatter of geometric motifs with no real identity of their own.
              Florals meant young, and young was the whole brand. So the girl Genie won at seven aged out of it fast. Our
              own research was blunt about it: by fourteen she wanted a bag with the function of a school bag but the
              look of a fashion bag — and Genie didn't make that. It won a customer early and handed her to someone else
              a few years later, year after year.
            </p>
            <p>
              That made the real challenge a strategic one, not a cosmetic one. To grow, Genie couldn't just look
              better. It had to <em>grow up with the girl carrying it</em> — earn her at seven, keep her at fourteen,
              and still be the bag she chose for college. One brand, one design language, stretched across a customer
              who was changing faster than the range was.
            </p>
            <p>
              Everything else followed from that decision: a range rebuilt every season, demand bet across ninety-odd
              designs in a four-month window, and a visual language that had to widen without losing the brand. But the
              root problem was identity — and identity is a design problem.
            </p>
          </div>

          <div className="mini-stats mini-stats--3">
            <div className="mini">
              <span className="n">8</span>
              <span className="lbl">
                Designs in the
                <br />
                inherited range
              </span>
            </div>
            <div className="mini">
              <span className="n">85%</span>
              <span className="lbl">
                Florals — by volume,
                <br />
                by identity
              </span>
            </div>
            <div className="mini">
              <span className="n">1</span>
              <span className="lbl">
                Primary cohort served
                <br />
      
              </span>
            </div>
          </div>

          <figure className="figure">
            <picture>
              <source srcSet="/croppedimages05.png" type="image/png" />
              <img
                src="/croppedimages05.png"
                alt="Genie school range before 2022 — eight backpacks in floral and graphic prints"
              />
            </picture>
            <figcaption>
              The range before 2022 — eight designs, almost entirely floral and graphic prints. Saturated, sold on
              volume, with no consistent design language to hold it together.
            </figcaption>
          </figure>
        </div>
      </section>

      {/* ================ 02 — UNDERSTANDING THE NEXT GENERATION ================ */}
      <section className="band band--paper-deep section">
        <div className="container">
          <div className="section-marker">
            <span className="num">02.</span>
            <span className="label">Understanding the next generation</span>
          </div>
          <h2 className="section-title">The same girl, five years apart.</h2>

          <div className="prose">
            <p>To grow Genie up with its customer, I had to know exactly how she changed — and where the brand lost her.</p>
            <p>
              Cohort insight came from a commissioned qualitative study — <strong>nine in-depth interviews across ages
              seven to fifteen</strong> — supported by ongoing consumer immersion across markets, online and in person,
              to stay close to how the brand's customer was actually shifting. We didn't ask what bag she wanted. We
              looked at what she already carried, what she watched, who she copied, and who decided the purchase.
            </p>
            <p>
              The arc that came back wasn't gentle. At seven, she lives in a fantasy world — Frozen, unicorns — and Mum
              makes the call. By ten or eleven she's the same girl, louder and more expressive, but now she chooses and
              Mum approves. Then, at fourteen, the break: she rejects "school bag" outright. She wants the function of
              one and the look of a fashion bag, and she knows exactly what's on trend because she's watching it all day.
            </p>
            <p>
              That break was where Genie was leaking customers. She'd carried the brand since she was little, and by the
              time she stopped wanting to look little, a gap had opened between what Genie made and who she'd become.
              Closing that gap became the most important thing the range had to do.
            </p>
          </div>

          <div className="framework framework--3">
            <div className="cell">
              <span className="num">01</span>
              <span className="ttl">The fantasy world</span>
              <span className="meta">Ages 7—8</span>
              <span className="desc">
                A 19″ bag carrying a tiffin, a pouch, and up to twelve books. The brand sized her into its biggest
                format and dressed it in fantasy — she was given scale she hadn't asked for and a world she had.
              </span>
            </div>
            <div className="cell">
              <span className="num">02</span>
              <span className="ttl">The personalised bag</span>
              <span className="meta">Ages 10—11</span>
              <span className="desc">
                An organiser she's filled herself: charms, keychains, stickers, a pouch tucked inside the pouch. She was
                personalising a bag that was never built to be personalised.
              </span>
            </div>
            <div className="cell">
              <span className="num">03</span>
              <span className="ttl">The function-identity gap</span>
              <span className="meta">Ages 14—15</span>
              <span className="desc">
                Money, lunch, a phone, books. The bag had become an accessory she carried all day, but it still looked
                like a school tool. A gap emerged between function and identity.
              </span>
            </div>
          </div>

          <figure className="figure bg-black" style={{padding:"40px"}}>
            <picture>
              <source srcSet="/images/genie/03a.webp" type="image/webp" />
              <img src="/images/genie/03a.jpg" alt="Cohort board — the girl Genie was designing for, across ages and everyday moments" />
            </picture>
            <figcaption style={{color:"#F4F1E9"}}>
              The cohort — who Genie was actually for, and the moments the bag had to carry her through, from first
              big-school day to college.
            </figcaption>
          </figure>

          <div className="pull">The audit is why the products changed. The progression is why the brand had to.</div>
        </div>
      </section>

      {/* ================ 03 — CULTURAL SIGNALS ================ */}
      <section className="section">
        <div className="container">
          <div className="section-marker">
            <span className="num">03.</span>
            <span className="label">Cultural signals &amp; trend forecasting</span>
          </div>
          <h2 className="section-title">The trend was the input. The judgement was the work.</h2>

          <div className="prose">
            <p>
              By 2023, Korean culture was visibly rising across India — K-dramas, beauty, fashion, the lot. K-drama
              viewership had climbed sharply over the pandemic years, and the influence had moved past the metros, reaching
              smaller cities through the same phones every girl in the research was watching all day. Every competitor
              saw the same wave. <em>Spotting it was not the work.</em>
            </p>
            <p>
              The obvious move was K-pop — idols, band references, the fandom. I didn't make that bet, for two reasons.
              First, the research had already caught it ageing: the older cohort had grown out of K-pop and treated it as a
              younger girl's phase. Second, and more decisive, was lead time. A Genie design moved from research to shelf
              over roughly twelve months. Anything peaking the week I briefed it could be cold by the time it reached the
              shelf. A faddish bet here doesn't just underperform; it ships as dead stock.
            </p>
            <p>
              So I separated two things the trend had folded together. <strong>Fandom</strong> — attachment to specific
              idols and groups — was fast, narrow and ageing. <strong>Taste</strong> — the muted Korean palette, soft
              minimalism, the tactile considered finish of the aesthetic — was slower, broader and still climbing. I
              built on the taste and left the fandom alone. The products that came out of it read as Korean in feel,
              never as K-pop merchandise.
            </p>
          </div>

          <figure className="figure">
            <picture>
              <source srcSet="/images/genie/04.webp" type="image/webp" />
              <img src="/images/genie/04.jpg" alt="Cultural signals trend board — Asian Aesthetic" />
            </picture>
            <figcaption>
              The Asian Aesthetic trend board. Reference imagery sourced and credited; the analysis and direction are mine.
            </figcaption>
          </figure>

          <figure className="figure">
            <picture>
              <source srcSet="/images/genie/03b.webp" type="image/webp" />
              <img src="/images/genie/03b.jpg" alt="Print and surface trends, 2023 to 2026, read season by season" />
            </picture>
            <figcaption>
              Print and surface trends, 2023–2026 — read season by season, ahead of the factory calendar. The broad
              aesthetic board sets direction; this tracks what actually moved, year on year.
            </figcaption>
          </figure>

          <div className="prose" style={{ marginTop: 'clamp(56px, 7vw, 80px)' }}>
            <p>
              That distinction is the whole section. The skill wasn't seeing the Korean wave. It was deciding which part
              of it was durable enough to commit factory months and unit bets to, and which part would age out before it
              ever reached the girl carrying the bag.
            </p>
          </div>

          <div className="framework framework--3">
            <div className="cell">
              <span className="num">01</span>
              <span className="ttl">Fandom or taste?</span>
              <span className="desc">
                Fandom attaches to people and ages out with them. Taste changes how everything looks and stays. Idols were
                fandom; the muted palette and considered finish were taste. <strong>Built on taste.</strong>
              </span>
            </div>
            <div className="cell">
              <span className="num">02</span>
              <span className="ttl">Metro or mainstream?</span>
              <span className="desc">
                A signal trapped in the metros is fragile. The Korean aesthetic was already aspirational well beyond them,
                in the cities Genie actually sold to. <strong>Built on the broader signal.</strong>
              </span>
            </div>
            <div className="cell">
              <span className="num">03</span>
              <span className="ttl">Faster or slower than the factory?</span>
              <span className="desc">
                Anything peaking before a twelve-month cycle can ship is a loss before it starts. Idol cycles move in weeks;
                a taste shift moves over years. <strong>Built on the slow one.</strong>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ================ 04 — TRANSLATING TRENDS ================ */}
      <section className="band band--paper-deep section">
        <div className="container">
          <div className="section-marker">
            <span className="num">04.</span>
            <span className="label">Translating trends into products</span>
          </div>
          <h2 className="section-title">The aesthetic was the easy part. The price was the design problem.</h2>

          <div className="prose">
            <p>
              The decision from the previous section — build on Korean taste, leave Korean fandom alone — sounds clean
              on a slide. The market it had to land in wasn't clean at all.
            </p>
            <p>
              By the time I briefed this range, Korean-style backpacks were already on Amazon at a fraction of Genie's
              price point — listed by sellers buying directly from Chinese suppliers, often unbranded, riding the same
              aesthetic. A Genie bag with a muted palette and a Korean feel was going to retail at a multiple of those,
              and the consumer it was for could see both options on the same screen. <em>The aesthetic alone wasn't going
              to defend the price.</em>
            </p>
            <p>
              So the brief I set myself was harder than "design a Korean backpack." It was: make a backpack that reads as
              a <strong>different proposition</strong>, not a more expensive version of one she'd already seen. Anything
              less and I'd ship a bag that looked like a premium-priced copy of something already cheaper — the worst
              commercial position a design can be in.
            </p>
            <p>
              Which meant the Korean call couldn't sit on a single variable. A new fabric on a familiar silhouette would
              have read as a finish change on a known shape. A new silhouette in the existing palette would have looked
              like the same brand in different clothes. Each lever, moved on its own, lost. They had to move together.
            </p>
          </div>

          <div className="framework framework--4">
            <div className="cell">
              <span className="num">01</span>
              <span className="ttl">Construction</span>
              <span className="desc">
                A new silhouette built specifically for this line, distinct from the Genie shapes already on shelves. The
                first signal, from across a store, that this was something different.
              </span>
            </div>
            <div className="cell">
              <span className="num">02</span>
              <span className="ttl">Fabric</span>
              <span className="desc">
                A disruptive material brought in inside the season's fixed-vs-disruptive ratio. Chosen for tactility and
                finish, not novelty — the Korean aesthetic reads as considered, not loud.
              </span>
            </div>
            <div className="cell">
              <span className="num">03</span>
              <span className="ttl">Palette</span>
              <span className="desc">
                Muted, away from the brand's pastel-and-saturated language. The colour story carried the Korean signal
                more than any print could.
              </span>
            </div>
            <div className="cell">
              <span className="num">04</span>
              <span className="ttl">Features &amp; finish</span>
              <span className="desc">
                Detailing tuned to read as designed-on-purpose, not decorated. The accent layer that confirmed what the
                first three were telling her.
              </span>
            </div>
          </div>

          <div className="prose" style={{ marginTop: 'clamp(56px, 7vw, 80px)' }}>
            <p>
              In a category where the cheap version already existed, distinctiveness was compound — and that was the
              design problem. That logic — move four levers together because moving one isn't enough — is what made
              College Korea Genie's, not a more expensive copy of what Amazon was already selling. The Korean signal didn't
              decide what the product looked like. The market the signal was landing in did.
            </p>
          </div>

          <figure className="figure">
            <picture>
              <source srcSet="/croppedimages06.png" type="image/png" />
              <img src="/croppedimages06.png" alt="2025 and 2026 Korean-aesthetic backpack ranges" />
            </picture>
            <figcaption>
              The 2025 and 2026 ranges that came out of the taste-not-fandom call — 17″ college, 18″ teen, and the College
              Korea family. Built on the durable signals; no K-pop borrowing.
            </figcaption>
          </figure>
        </div>
      </section>

      {/* ================ 05 — BUILDING A COLLECTION SYSTEM ================ */}
      <section className="section">
        <div className="container">
          <div className="section-marker">
            <span className="num">05.</span>
            <span className="label">Building a collection system</span>
          </div>
          <h2 className="section-title">Five years of growing a system.</h2>

          <div className="prose">
            <p>
              Designing a back-to-school range every year on fast-fashion economics is not a design problem. It's an{' '}
              <em>architecture</em> problem. I designed a system that had to grow with the brand. Then I grew it.
            </p>
          </div>

          <div className="subsection">
            <span className="subsection-num">05a</span>
            <h3 className="subsection-title">What designs needed to exist.</h3>
            <div className="prose">
              <p>
                The cohort research from the previous section didn't just tell me how the girl was changing. It told me
                what the range had to do at every age she'd be carrying it. Each cohort got designs that read as theirs
                — not as a smaller or louder version of someone else's. That was the demand side of the system: the
                range answered the customer the audit found, at the sizes she was actually carrying.
              </p>
            </div>
          </div>

          <div className="subsection">
            <span className="subsection-num">05b</span>
            <h3 className="subsection-title">How they got built affordably enough to ship.</h3>
            <div className="prose">
              <p>
                Knowing what designs needed to exist was the easy part. The hard part was building a season's worth every
                year on a target cost that competed with unbranded products and a four-month selling window that punished
                any waste. The range couldn't be a set of separate design problems. It had to be one problem with many
                outputs.
              </p>
              <p>
                I formalised the architecture across three locked rules. The brand's existing twill stayed as the base
                fabric — that constraint I inherited. The rest, I built around it.
              </p>
            </div>
          </div>

          <div className="framework framework--3">
            <div className="cell">
              <span className="num">01</span>
              <span className="ttl">20 component colours, ≥2 backpacks each</span>
              <span className="desc">
                Body fabric, elastic, zippers, air mesh, webbings, ladder locks, thread — all matched into one palette per
                season, every colour amortised across at least two bags. No SKU carried a colour MOQ on its own.
              </span>
            </div>
            <div className="cell">
              <span className="num">02</span>
              <span className="ttl">~80% fixed fabric · 2—3 disruptive across 2—3 bags each</span>
              <span className="desc">
                The disruptive fabrics paid for themselves because the MOQ was shared. Innovation became affordable instead
                of expensive.
              </span>
            </div>
            <div className="cell">
              <span className="num">03</span>
              <span className="ttl">Platform-and-component thinking, not new shapes</span>
              <span className="desc">
                Designs built by varying print, palette and components on shared silhouettes. The architecture that made
                a growing range commercially possible.
              </span>
            </div>
          </div>

          <div className="subsection">
            <span className="subsection-num">05c</span>
            <h3 className="subsection-title">Five years, year by year.</h3>
            <div className="prose">
              <p>
                The architecture was the same across five years. The shape of the range that came out of it was not. The
                system grew, contracted, reframed and matured as the brand grew with its customer. Across five years,{' '}
                <strong>never more than three constructions live at once.</strong> Every addition, retirement and
                simplification was tied to a specific commercial reason.
              </p>
            </div>
          </div>

          <figure className="chart-fig">
            <span className="label" style={{ marginBottom: 0 }}>
              Five-year growth · Construction discipline held
            </span>
            <h3 className="chart-title">The system grew. The architecture didn't.</h3>
            <div className="chart-legend">
              <span className="lg">
                <span className="sw sw--sku"></span>SKUs
              </span>
              <span className="lg">
                <span className="sw sw--des"></span>Designs
              </span>
              <span className="lg">
                <span className="sw sw--rng"></span>Ranges
              </span>
              <span className="lg">
                <span className="sw sw--con"></span>Constructions
              </span>
            </div>
            <svg
              className="chart-svg"
              viewBox="0 0 1000 510"
              role="img"
              aria-label="Five-year growth: SKUs, designs, ranges and constructions, 2022 to 2026. SKUs rose from 21 to a 2025 peak of 104 then eased to 84; constructions never exceeded three."
            >
              {/* constructions ceiling reference */}
              <line x1="90" y1="420.2" x2="870" y2="420.2" className="refline" />
              <text x="480" y="362" className="refnote" textAnchor="middle">
                Never more than three constructions — five years running
              </text>
              {/* simplification annotation */}
              <line x1="870" y1="72" x2="870" y2="149" className="anno-tick" />
              <text x="884" y="44" className="anno-sub" textAnchor="end">
                Designs &amp; SKUs deliberately lower
              </text>
              <text x="884" y="62" className="anno-key" textAnchor="end">
                SIMPLIFICATION
              </text>
              {/* series */}
              <polyline points="90,423.5 285,420.2 480,420.2 675,420.2 870,420.2" className="ln ln--con" />
              <polyline points="90,420.2 285,407.1 480,407.1 675,400.5 870,400.5" className="ln ln--rng" />
              <polyline points="90,380.9 285,295.8 480,276.2 675,253.3 870,269.6" className="ln ln--des" />
              <polyline points="90,361.3 285,164.9 480,135.5 675,89.6 870,155.1" className="ln ln--sku" />
              <circle cx="90" cy="423.5" r="3.5" className="dot dot--rng" />
              <circle cx="285" cy="420.2" r="3.5" className="dot dot--rng" />
              <circle cx="480" cy="420.2" r="3.5" className="dot dot--rng" />
              <circle cx="675" cy="420.2" r="3.5" className="dot dot--rng" />
              <circle cx="870" cy="420.2" r="3.5" className="dot dot--rng" />
              <circle cx="90" cy="420.2" r="3.5" className="dot dot--rng" />
              <circle cx="285" cy="407.1" r="3.5" className="dot dot--rng" />
              <circle cx="480" cy="407.1" r="3.5" className="dot dot--rng" />
              <circle cx="675" cy="400.5" r="3.5" className="dot dot--rng" />
              <circle cx="870" cy="400.5" r="3.5" className="dot dot--rng" />
              <circle cx="90" cy="380.9" r="5" className="dot dot--des" />
              <circle cx="285" cy="295.8" r="5" className="dot dot--des" />
              <circle cx="480" cy="276.2" r="5" className="dot dot--des" />
              <circle cx="675" cy="253.3" r="5" className="dot dot--des" />
              <circle cx="870" cy="269.6" r="5" className="dot dot--des" />
              <circle cx="90" cy="361.3" r="5.5" className="dot dot--sku" />
              <circle cx="285" cy="164.9" r="5.5" className="dot dot--sku" />
              <circle cx="480" cy="135.5" r="5.5" className="dot dot--sku" />
              <circle cx="675" cy="89.6" r="5.5" className="dot dot--sku" />
              <circle cx="870" cy="155.1" r="5.5" className="dot dot--sku" />
              <text x="90" y="345.3" className="vlab vlab--sku" textAnchor="middle">
                21
              </text>
              <text x="285" y="148.9" className="vlab vlab--sku" textAnchor="middle">
                81
              </text>
              <text x="480" y="119.5" className="vlab vlab--sku" textAnchor="middle">
                90
              </text>
              <text x="675" y="73.6" className="vlab vlab--sku" textAnchor="middle">
                104
              </text>
              <text x="852" y="160" className="vlab vlab--sku" textAnchor="end">
                84
              </text>
              <text x="90" y="406.9" className="vlab vlab--des" textAnchor="middle">
                15
              </text>
              <text x="285" y="321.8" className="vlab vlab--des" textAnchor="middle">
                41
              </text>
              <text x="480" y="302.2" className="vlab vlab--des" textAnchor="middle">
                47
              </text>
              <text x="675" y="279.3" className="vlab vlab--des" textAnchor="middle">
                54
              </text>
              <text x="870" y="295.6" className="vlab vlab--des" textAnchor="middle">
                49
              </text>
              <text x="90" y="462" className="xyear" textAnchor="middle">
                2022
              </text>
              <text x="90" y="486" className="xphase" textAnchor="middle">
                INHERITED
              </text>
              <text x="285" y="462" className="xyear" textAnchor="middle">
                2023
              </text>
              <text x="285" y="486" className="xphase" textAnchor="middle">
                VOLUME
              </text>
              <text x="480" y="462" className="xyear" textAnchor="middle">
                2024
              </text>
              <text x="480" y="486" className="xphase" textAnchor="middle">
                TELEGRAPHED
              </text>
              <text x="675" y="462" className="xyear" textAnchor="middle">
                2025
              </text>
              <text x="675" y="486" className="xphase" textAnchor="middle">
                SUBSTITUTION
              </text>
              <text x="870" y="462" className="xyear" textAnchor="middle">
                2026
              </text>
              <text x="870" y="486" className="xphase" textAnchor="middle">
                SIMPLIFY
              </text>
            </svg>
            <figcaption className="chart-cap">
              SKUs grew nearly 5× from 2022 to the 2025 peak; constructions never exceeded three. The 2026 retraction in
              designs and SKUs is deliberate simplification, not contraction — the system was being tightened, not the
              business.
            </figcaption>
          </figure>

          <table className="data-table">
            <thead>
              <tr>
                <th>Year</th>
                <th>Phase</th>
                <th>Constructions</th>
                <th>Ranges</th>
                <th>Designs</th>
                <th>SKUs</th>
                <th>Annotation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="year">2022</td>
                <td className="phase">Inherited baseline</td>
                <td>2</td>
                <td>3</td>
                <td>15</td>
                <td>21</td>
                <td className="note">
                  Trade only. Basic carried the brand identity; 16″ Supreme served the entry price point.
                </td>
              </tr>
              <tr>
                <td className="year">2023</td>
                <td className="phase">Volume response</td>
                <td>3</td>
                <td>7</td>
                <td>41</td>
                <td>81</td>
                <td className="note">
                  Added 19″ Max as a separate 40L construction for consumer volume. Split CORE into HP and RC — two
                  needs at one price point. Hero designs: Cool, Amore, Sass.
                </td>
              </tr>
              <tr>
                <td className="year">2024</td>
                <td className="phase">Telegraphed exit</td>
                <td>3</td>
                <td>7</td>
                <td>47</td>
                <td>90</td>
                <td className="note">
                  Supreme's margins below double-digit floor. Reduced its SKUs and signalled retirement to dealers a
                  full year ahead. Managed retirement, not surprise cut.
                </td>
              </tr>
              <tr>
                <td className="year">2025</td>
                <td className="phase">Substitution</td>
                <td>3</td>
                <td>9</td>
                <td>54</td>
                <td>104</td>
                <td className="note">
                  Launched Teen at deliberately different sizes — 17″ College, 18″ Teen, College Korea. Supreme
                  retired; Teen filled the gap before dealers felt it.
                </td>
              </tr>
              <tr>
                <td className="year">2026</td>
                <td className="phase">Simplification</td>
                <td>3</td>
                <td>9</td>
                <td>
                  49 <span style={{ color: 'var(--muted)' }}>(29 mine)</span>
                </td>
                <td>
                  84 <span style={{ color: 'var(--muted)' }}>(58 mine)</span>
                </td>
                <td className="note">
                  Teen collapsed into 17″/19″ rhythm. From mid-2025, my successor Shital produced the remaining 20
                  designs / 26 SKUs operating inside the constructions, ranges and cohort logic I'd defined.
                </td>
              </tr>
            </tbody>
          </table>

          <figure className="figure">
            <picture>
              <source srcSet="/images/genie/03c.webp" type="image/webp" />
              <img src="/images/genie/03c.jpg" alt="The Genie range evolving from 2022 to 2026" />
            </picture>
            <figcaption>
              The same five years, seen as product — every addition, retirement and simplification the chart and table
              describe, evolving in one frame.
            </figcaption>
          </figure>

          <div className="subsection">
            <span className="subsection-num">05d</span>
            <h3 className="subsection-title">One operating model, six channels.</h3>
            <div className="prose">
              <p>
                Trade was the case study's deepest evidence. The same operating model also carried into five other
                channels — hypermarket, ecommerce marketplace, ecommerce outright, quick commerce, and retail. Each ran
                its own design counts, price points and calendars inside the broader system.{' '}
                <em>The architecture held; the distribution scaled.</em>
              </p>
            </div>
          </div>

          <div className="hub-grid">
            <div className="hub-core">
              <span className="label" style={{ marginBottom: 0 }}>
                Core operating model
              </span>
              <span className="ttl">Platform &amp; components, cohort logic, sampling protocol</span>
              <span className="desc">
                One architecture, scaled across six commercial channels with their own design counts, price points and
                calendars.
              </span>
            </div>
            <div className="hub-channels">
              <div className="ch">
                <span className="num">CH 01</span>
                <span className="ttl">Trade</span>
                <span className="sub">Back-to-school spine</span>
              </div>
              <div className="ch">
                <span className="num">CH 02</span>
                <span className="ttl">Hypermarket</span>
                <span className="sub">V-Mart, Reliance Trends, D-Mart</span>
              </div>
              <div className="ch">
                <span className="num">CH 03</span>
                <span className="ttl">Ecom marketplace</span>
                <span className="sub">Amazon, Flipkart, Myntra</span>
              </div>
              <div className="ch">
                <span className="num">CH 04</span>
                <span className="ttl">Ecom outright</span>
                <span className="sub">Direct-to-consumer</span>
              </div>
              <div className="ch">
                <span className="num">CH 05</span>
                <span className="ttl">Quick commerce</span>
                <span className="sub">Blinkit</span>
              </div>
              <div className="ch">
                <span className="num">CH 06</span>
                <span className="ttl">Retail</span>
                <span className="sub">Owned stores</span>
              </div>
            </div>
          </div>

          <figure className="figure">
            <picture>
              <source srcSet="/images/genie/06.webp" type="image/webp" />
              <img
                src="/images/genie/06.jpg"
                alt="2026 collection — three constructions, nine ranges, four cohorts"
              />
            </picture>
            <figcaption>
              The 2026 collection — three constructions, nine ranges, four cohorts. Platform architecture and lead
              design: mine; 58 of 84 SKUs by me, 26 by my successor under the architecture I'd authored.
            </figcaption>
          </figure>
        </div>
      </section>

      {/* ================ 06 — THE 2023 SPLIT (DARK FEATURED) ================ */}
      <section className="band band--ink section section--ink">
        <div className="container">
          <div className="featured-head">
            <div className="section-marker">
              <span className="num">06.</span>
              <span className="label">Case-in-case · The 2023 split</span>
            </div>
            <span className="label">When the bill of materials wouldn't bend, the architecture did</span>
          </div>

          <h2 className="H2">When the cost-down ran out, the range had to give.</h2>

          <div className="prose" style={{ marginTop: 'clamp(40px, 5vw, 56px)' }}>
            <p>
              The 2023 PM brief carried one new consumer signal: raincover, as a feature, was no longer optional. The
              category was offering it. Genie had to.
            </p>
            <p>
              That brief landed on a range already carrying happy pouch — a small pouch that clips to the outside of the
              bag for a girl's coins and lip balm. The two features do completely different jobs: happy pouch carries
              small bits on the outside; raincover shields the whole bag in the monsoon. What they shared was a cost. At
              component level raincover landed at fifty cents, happy pouch at fifty-eight — near-identical lines on a bill
              of materials that wasn't allowed to grow. The target FOB hadn't moved, but a feature was being added to an
              existing range at the same cost, so carrying both on one bag would have broken the price the brief had
              locked.
            </p>
          </div>

          <div className="subsection">
            <span className="subsection-num">06a</span>
            <h3 className="subsection-title" style={{ color: 'var(--paper)' }}>Every cost-down lever was already spent.</h3>
            <div className="prose">
              <p>
                The obvious response to a cost squeeze is to take the rest of the bill of materials down. There was
                nothing left to take down. Pullers, mesh, webbing, logo, thread — all at base. Construction and fabric
                consumption were fixed by the silhouette. Size was locked: 19″ CORE was the platform's structural
                anchor, and shrinking it would have read in trade and at point of sale as a downgrade, not a refinement.
                That left one lever. <strong>The fabric.</strong>
              </p>
            </div>
          </div>

          <div className="subsection">
            <span className="subsection-num">06b</span>
            <h3 className="subsection-title" style={{ color: 'var(--paper)' }}>The fabric was the line we couldn't cross.</h3>
            <div className="prose">
              <p>
                Genie ran on cotton-backed twill — not as a finish call, as the brand's structural differentiator. In a
                category where unbranded competitors were sourcing direct from the same Chinese suppliers, the fabric was
                what held a customer's hand on a Genie bag rather than the bag next to it. Competitors operated at lower
                price points because they didn't carry that fabric identity. Moving Genie to PU-backed would have moved
                Genie into their cost structure — and into their commodity position.
              </p>
              <p>
                To show the sales team what a PU-backed Genie would actually look and feel like as a trade product,
                sourcing and I developed a PU-backed trade sample of the same bag. The sample made the case concrete. In
                trade, where dealers and consumers pick the product up before they buy, the fabric is a deciding signal.
                The PU-backed version sat against unbranded competitors without the difference being visible.{' '}
                <em>Taking the fabric down wasn't a margin save. It was a brand-level surrender.</em>
              </p>
            </div>
          </div>

          <div className="framework framework--3 framework--ink">
            <div className="cell">
              <span className="num">01</span>
              <span className="ttl">Raise the price</span>
              <span className="meta">Rejected</span>
              <span className="desc">
                Sales pushed back. Competition was already priced below Genie. A further price step would have shifted the
                bag out of the consideration set in trade, where price visibility against unbranded alternatives is high.
              </span>
            </div>
            <div className="cell">
              <span className="num">02</span>
              <span className="ttl">Downgrade the fabric</span>
              <span className="meta">Rejected</span>
              <span className="desc">
                The PU-backed trade sample had answered this one already. The cost of the move was the brand itself, not a
                few cents on the bill of materials.
              </span>
            </div>
            <div className="cell">
              <span className="num">03</span>
              <span className="ttl">Split the range</span>
              <span className="meta meta--chosen">Chosen</span>
              <span className="desc">
                Two propositions at the same quality tier — same fabric, construction, size, price band. One carrying
                happy pouch. One carrying raincover. The customer got the feature they came for. The brand kept the thing
                it was built on.
              </span>
            </div>
          </div>

          <div className="subsection">
            <span className="subsection-num">06c</span>
            <h3 className="subsection-title" style={{ color: 'var(--paper)' }}>The call.</h3>
            <div className="prose">
              <p>
                I proposed the split. The team aligned on it. 19″ CORE became <strong>CORE(HP)</strong> and{' '}
                <strong>CORE(RC)</strong> — the platform variants that still anchor the range three years on. The fabric
                stayed. The cycle margin held without taking the consumer price up. Dealers got a feature-choice within the
                same price band, rather than one feature forced to displace the other.
              </p>
            </div>
          </div>

          <div className="pull pull--ink">
            When the bill of materials wouldn't bend, the architecture did. The fabric identity held.
          </div>
        </div>
      </section>

      {/* ================ 07 — DESIGNING BACKPACK COLLECTIONS ================ */}
      <section className="section">
        <div className="container">
          <div className="section-marker">
            <span className="num">07.</span>
            <span className="label">Designing backpack collections</span>
          </div>
          <h2 className="section-title">The system in evidence.</h2>

          <div className="prose">
            <p>
              The system architecture had to show up in the product itself. Below are the design moves that carried it —
              how the floral language grew up, how construction did the work a print used to, and how the brand started
              reading as premium from across a store. Not the whole range; the decisions that prove the system held.
            </p>
              <p>
              Across the brand portfolio I led, roughly <b>60 print and surface designs</b> were developed each year — about <b>95%</b> making it through range review to market launch.
            </p>
          </div>

          <div className="media-split">
            <div className="ms-text">
              <div className="subsec-head">
                <span className="n">07a</span>
                <span className="ttl">Maturing the floral language.</span>
              </div>
              <div className="prose">
                <p>
                  Genie had been roughly 85% florals. The move wasn't to drop them, it was to grow them up: the floral
                  language matured rather than disappeared — same identity, more restraint, less literal. It proved the
                  brand reframe didn't mean abandoning what already worked; it meant making it read older.
                </p>
              </div>
            </div>
            <figure className="figure ms-fig">
              <picture>
                <source srcSet="/images/genie/07a.webp" type="image/webp" />
                <img src="/images/genie/07a.jpg" alt="Floral language matured" />
              </picture>
              <figcaption>The floral language matured — same identity, read older.</figcaption>
            </figure>
          </div>

          <div className="pull">Happiness wasn't a colour. It was a posture.</div>

          <div className="media-split media-split--rev">
            <div className="ms-text">
              <div className="subsec-head">
                <span className="n">07b</span>
                <span className="ttl">The age-up move — Korean construction.</span>
              </div>
              <div className="prose">
                <p>
                  The elevated Korean construction, read at close range — tactile, considered, deliberately not loud. It's
                  the first signal, from across a store, that this isn't another school backpack. The age-up didn't come
                  from a louder graphic; it came from how the bag was built.
                </p>
              </div>
            </div>
            <figure className="figure ms-fig">
              <picture>
                <source srcSet="/images/genie/07b.webp" type="image/webp" />
                <img src="/images/genie/07b.jpg" alt="Korean construction detail" />
              </picture>
              <figcaption>Korean construction: the age-up came from the build, not a louder graphic.</figcaption>
            </figure>
          </div>

          <div className="media-split">
            <div className="ms-text">
              <div className="subsec-head">
                <span className="n">07c</span>
                <span className="ttl">Ebony — a denim look without the denim.</span>
              </div>
              <div className="prose">
                <p>
                  Ebony took a fashion-led denim texture and achieved it through digital print rather than real denim
                  fabric. Actual denim would have added weight and cost and compromised the bag's job — a school backpack
                  is carried all day and has to stay light. The print delivered the fashion read while the bag kept doing
                  what a school backpack has to do.
                </p>
              </div>
            </div>
            <figure className="figure ms-fig">
              <picture>
                <source srcSet="/images/genie/07c.webp" type="image/webp" />
                <img src="/images/genie/07c.jpg" alt="Ebony denim-texture digital print" />
              </picture>
              <figcaption>Denim texture by digital print — the fashion read without the weight.</figcaption>
            </figure>
          </div>

          <div className="media-split media-split--rev">
            <div className="ms-text">
              <div className="subsec-head">
                <span className="n">07d</span>
                <span className="ttl">Construction as colour-block.</span>
              </div>
              <div className="prose">
                <p>
                  The side panels were aligned so the construction itself created clean colour-blocking — the seams
                  doing the work a print would otherwise do. Precise alignment is what separates a colour-block that
                  reads premium from one that reads cheap. The perceived value came from the build, not from added
                  decoration.
                </p>
              </div>
            </div>
            <figure className="figure ms-fig">
              <picture>
                <source srcSet="/images/genie/07d.webp" type="image/webp" />
                <img src="/images/genie/07d.jpg" alt="Construction-aligned colour-blocking" />
              </picture>
              <figcaption>
                Construction aligned for clean colour-blocking — premium from precision, not decoration.
              </figcaption>
            </figure>
          </div>

          <div className="media-split">
            <div className="ms-text">
              <div className="subsec-head">
                <span className="n">07e</span>
                <span className="ttl">Nightsky — detail instead of print.</span>
              </div>
              <div className="prose">
                <p>
                  Nightsky used quilting and a quirky puller as the design element, in place of a print. A non-print
                  move widens who the bag is for — it reaches the child who wants something tactile and distinctive
                  over something graphic. The detail, not the print, became the reason she chose it.
                </p>
              </div>
            </div>
            <figure className="figure ms-fig">
              <picture>
                <source srcSet="/images/genie/07e.webp" type="image/webp" />
                <img src="/images/genie/07e.jpg" alt="Nightsky quilting and puller detail" />
              </picture>
              <figcaption>Nightsky — surface technique as the design element, not a print.</figcaption>
            </figure>
          </div>

          <div className="mini-stats mini-stats--4">
            <div className="mini">
              <span className="n">3</span>
              <span className="lbl">Constructions</span>
            </div>
            <div className="mini">
              <span className="n">9</span>
              <span className="lbl">Ranges</span>
            </div>
            <div className="mini">
              <span className="n">49</span>
              <span className="lbl">Designs</span>
            </div>
            <div className="mini">
              <span className="n">84</span>
              <span className="lbl">SKUs</span>
            </div>
          </div>

          <div className="prose" style={{ marginTop: 'clamp(40px, 5vw, 56px)' }}>
            <p style={{ fontSize: '14.5px', color: 'var(--muted)', maxWidth: '60ch' }}>
              <em>
                2026 collection. Of 49 designs and 84 SKUs, I designed 29 designs / 58 SKUs; my successor Shital produced
                20 designs / 26 SKUs inside the system.
              </em>
            </p>
          </div>
        </div>
      </section>

      {/* ================ 08 — EXPANDING INTO ADJACENT CATEGORIES ================ */}
      <section className="band band--paper-deep section">
        <div className="container">
          <div className="section-marker">
            <span className="num">08.</span>
            <span className="label">Expanding into adjacent categories</span>
          </div>
          <h2 className="section-title">The brand stretched across formats. The market told us how far.</h2>

          <div className="prose">
            <p>
              Luggage was one of the first things I did at Genie — before I rebuilt the backpack range, before the Korean
              call, before the operating system. The brand had committed to a luggage launch, and the brief came in as
              two ladders. Hard luggage ran three price points: Palm at value entry, Sprout and Rose (both at the same
              price point) through the mid-tier, Glam at the top. Soft luggage ran three: Lily at entry, Bahamas in the
              middle, Hazel at premium. The question was the same in both — what Genie's design language looked like in a
              category it had never been in.
            </p>
            <p>
              I analysed the brand on arrival and made the translation call: take what made Genie <em>Genie</em> — its
              visual sensibility, its feminine-led identity, its print-led design language — and carry it into luggage.
              The forms came in collaboration with another designer; my work was the design direction, the CMF, and the
              brand-coherence call across the four ranges. Among India's branded luggage players, we were the first to
              put deliberate feminine prints on shelf.
            </p>
            <p>
              The brand didn't have the budget or timeline to do formal consumer research before launch. So we did the
              next-best thing: we shipped what we believed in and used the market itself as the research instrument. Some
              of the printed ranges sold exceptionally — proof that the brand's identity travelled. But the niche turned
              out to be smaller than we'd hoped, and the volumes didn't scale to where we needed them.
            </p>
            <p>
              So we calibrated. Heavy prints made way for ombres, glitter films, texture plays — the same brand
              sensibility, said more quietly. The brand could still be read as Genie at twenty paces; the addressable
              market widened. That recalibration carried through Scarlette, Diana, the later Palm work in 2026.
            </p>
          </div>

          <span className="label" style={{ display: 'block', margin: 'clamp(48px, 6vw, 72px) 0 28px' }}>
            Hard luggage
          </span>
          <div className="framework framework--3">
            <div className="cell">
              <span className="num">01</span>
              <span className="ttl">Palm</span>
              <span className="meta">Value entry</span>
              <span className="desc">
                Solid polycarbonate with a twill texture and glossy finish; twin-side packing, fixed combination lock. The
                plain-shell entry into the category.
              </span>
            </div>
            <div className="cell">
              <span className="num">02</span>
              <span className="ttl">Sprout &amp; Rose</span>
              <span className="meta">Mid-tier</span>
              <span className="desc">
                Printed polycarbonate films over twin-side packing and premium grey components; Rose carried the volume on
                a maximum-capacity shell. The backbone of the hard range.
              </span>
            </div>
            <div className="cell">
              <span className="num">03</span>
              <span className="ttl">Glam</span>
              <span className="meta">Top of hard</span>
              <span className="desc">
                Gold semi-matte glitter film, TSA lock, multi-pocket interior. The aspirational ceiling that anchored the
                range upward.
              </span>
            </div>
          </div>

          <div className="two-col">
            <figure className="figure" style={{ marginTop: 0 }}>
              <picture>
                <source srcSet="/soft.png" type="image/png" />
                <img src="soft.png" alt="Genie hardshell luggage, 2022 — built on heavy graphic prints" />
              </picture>
              <figcaption>
                2022 — the hard range bet on prints. Heavy graphic films carried the brand across the shell.
              </figcaption>
            </figure>
            <figure className="figure" style={{ marginTop: 0 }}>
              <picture>
                <source srcSet="/2.png" type="image/png" />
                <img src="/2.png" alt="Genie hardshell luggage, 2026 — a distributed CMF programme" />
              </picture>
              <figcaption>
                2026 — recalibrated to a distributed CMF programme: ombrés, glitter films, concrete textures, brand accents
                on hardware. Same identity, said more quietly.
              </figcaption>
            </figure>
          </div>

          <span className="label" style={{ display: 'block', margin: '52px 0 28px' }}>
            Soft luggage
          </span>
          <div className="framework framework--3">
            <div className="cell">
              <span className="num">01</span>
              <span className="ttl">Lily</span>
              <span className="meta">Entry</span>
              <span className="desc">
                Full-body premium fabric, floral print, colour-matched components, expander, twin external pockets. The
                entry into soft.
              </span>
            </div>
            <div className="cell">
              <span className="num">02</span>
              <span className="ttl">Bahamas</span>
              <span className="meta">Mid</span>
              <span className="desc">
                Steps up with a TSA lock and a footwear-storage interior, on the same full-body premium fabric. The volume
                middle of the soft ladder.
              </span>
            </div>
            <div className="cell">
              <span className="num">03</span>
              <span className="ttl">Hazel</span>
              <span className="meta">Premium</span>
              <span className="desc">
                Anti-theft zipper, rose-gold detailing on colour-matched components, premium dual wheels, full-body
                premium fabric. Top of soft.
              </span>
            </div>
          </div>

          <figure className="figure">
            <picture>
              <source srcSet="/1.png" type="image/png" />
              <img
                src="/1.png"
                alt="Genie soft luggage, 2022 — printed range across three price points"
              />
            </picture>
            <figcaption>
              2022 — the soft range across entry, mid and premium. The soft format didn't carry into 2026.
            </figcaption>
          </figure>

          <div className="subsection">
            <span className="subsection-num">08a</span>
            <h3 className="subsection-title">Reading the signal.</h3>
            <div className="prose">
              <p>
                Heavy prints proved the language travelled — but the niche was small, and from there the two formats
                diverged. Hard luggage recalibrated: the same sensibility through ombrés and texture plays, widening the
                market without losing the brand. Soft went the other way — as the Indian market moved decisively to
                hardside, softside demand thinned, so we wound the soft ladder down rather than refresh a declining
                category. A managed exit, the same logic that retired Supreme on the backpack side. The read of the
                market told us what to do next.
              </p>
            </div>
          </div>

          <div className="two-col">
            <figure className="figure" style={{ marginTop: 0 }}>
              <picture>
                <source srcSet="/images/genie/08c.webp" type="image/webp" />
                <img
                  src="/images/genie/08c.jpg"
                  alt="Genie luggage — Sprout, a periwinkle hardside trolley with a botanical print across the upper shell"
                />
              </picture>
              <figcaption>
                Sprout — the early printed range. The brand identity travelled, but the printed niche stayed narrower
                than we'd hoped.
              </figcaption>
            </figure>
            <figure className="figure" style={{ marginTop: 0 }}>
              <picture>
                <source srcSet="/images/genie/08d.webp" type="image/webp" />
                <img
                  src="/images/genie/08d.jpg"
                  alt="Genie luggage — Scarlette, a blush ombré hardside trolley with a moulded wave texture"
                />
              </picture>
              <figcaption>
                Scarlette — the print language matured. Graphic gave way to ombré and moulded texture; the same
                sensibility, said quietly, and the market widened.
              </figcaption>
            </figure>
          </div>

          <div className="subsection">
            <span className="subsection-num">08b</span>
            <h3 className="subsection-title">Sourced and adapted — the white-label extension.</h3>
            <div className="prose">
              <p>
                Not every category-expansion move had to start from scratch. For Genie's push into work and professional
                categories — backpacks, satchels, totes — I sourced and customised designs from third-party manufacturers.
                I inherited their construction, platform and fabrics; my work was the colour, branding and small-feature
                adaptations that made each piece read as Genie.
              </p>
              <p>
                This was a deliberate commercial decision, not a shortcut. Developing a new construction from scratch
                costs months of factory time the calendar didn't have. Sourcing and adapting let us bring newness to the
                work and professional range in weeks rather than seasons — cost-effective expansion without diluting the
                original-design programme running on the school and college sides.
              </p>
              <p>
                It also clarified what's worth designing from scratch and what isn't. The school and college backpack
                ranges — where the brand identity lives and the cohort relationship is strongest — justified original
                construction development. The work and professional pieces, where customer expectation is "brand-appropriate
                variation of a familiar category" rather than "category-defining design," didn't.
              </p>
            </div>
          </div>

          <figure className="figure">
            <picture>
              <source srcSet="/images/genie/08e.webp" type="image/webp" />
              <img src="/images/genie/08e.jpg" alt="Genie white-label range 2026 — sourced and adapted" />
            </picture>
            <figcaption>
              The 2026 white-label range. Honest scope: construction, platform and fabric inherited from third-party
              manufacturers; colour, branding and small-feature adaptations by me. Original design credit not claimed.
            </figcaption>
          </figure>
        </div>
      </section>

      {/* ================ 09 — DESIGNING FOR SCALE ================ */}
      <section className="section">
        <div className="container">
          <div className="section-marker">
            <span className="num">09.</span>
            <span className="label">Designing for scale</span>
          </div>
          <h2 className="section-title">Holding a brand at scale.</h2>

          <div className="prose">
            <p>
              Designing collections was only part of the role. The larger challenge was holding a growing brand together
              — across forecasting, development, sampling, production and launch — while making hundreds of decisions that
              would only be proven months later, on a shelf.
            </p>
            <p>
              Designing forty-four bags a year is one job. Building the operating model that ships them consistently, on
              calendar and at scale, is another. Over five years, I gradually moved from doing the first to doing both.
            </p>
          </div>

          <div className="subsection">
            <span className="subsection-num">09a</span>
            <h3 className="subsection-title">The calendar inside the calendar.</h3>
            <div className="prose">
              <p>
                A Genie back-to-school range took roughly twelve months from brief to shelf. December, the brief arrived:
                design count, SKU count, target cost, timeline. The first three months were research — what worked in the
                recent launch, what was catching attention, how the consumer was evolving, what was happening in adjacent
                categories, where the brand could disrupt.
              </p>
              <p>
                By the first week of April, the direction went to marketing and stakeholders for sign-off. From there, specs
                went out, sample development began, and the production cycle ran through sample reviews, value-engineering
                against shifting material costs, a sales-team review, quantity lock, launch meet with dealers in December
                &amp; January, and delivery by February. Selling began in March. The peak window closed in July.
              </p>
              <p>
                Inside that calendar, hundreds of decisions had to land in the right order.{' '}
                <em>Miss one — wrong fabric direction, late component approval, missed value-engineering window — and
                the whole season slipped.</em>
              </p>
            </div>
          </div>

          <figure className="figure">
            <picture>
              <source srcSet="/12months.png" type="image/png" />
              <img src="/12months.png" alt="Genie annual development calendar — twelve months brief to shelf" />
            </picture>
            <figcaption>
              Two overlapping cycles — brief-to-brief loop (12 months) and brief-to-end-of-selling lifecycle (20 months).
              The overlap is where the in-season feedback loop lives.
            </figcaption>
          </figure>

          <div className="subsection">
            <span className="subsection-num">09b</span>
            <h3 className="subsection-title">One operational change that paid out every season.</h3>
            <div className="prose">
              <p>
                When I joined, two-to-three rounds of sampling was the norm for reaching the visual presentation the brand
                needed. I redesigned the protocol over two years, and the gain compounded every season after.
              </p>
            </div>
          </div>

          <div className="framework framework--3">
            <div className="cell">
              <span className="num">01</span>
              <span className="ttl">Sub-step approval</span>
              <span className="desc">
                Fabric dyeing and digital print signed off by me at the vendor stage — before the full bag was sampled —
                so colour and print fidelity were solved at the source, not discovered at assembly.
              </span>
            </div>
            <div className="cell">
              <span className="num">02</span>
              <span className="ttl">Decoupled components</span>
              <span className="desc">
                Pullers, charms, pouches and trims signed off independently of the bag, on their own timeline. Components
                have longer lead times than bag construction; running them in parallel removed the bottleneck.
              </span>
            </div>
            <div className="cell">
              <span className="num">03</span>
              <span className="ttl">Precision specs &amp; follow-up</span>
              <span className="desc">
                A spec accurate enough that round one converged on intent, plus an active vendor relationship that kept it
                converging.
              </span>
            </div>
          </div>

          <div className="mini-stats mini-stats--4">
            <div className="mini">
              <span className="n">~98%</span>
              <span className="lbl">
                First-round visual accuracy
                <br />
                against specification
              </span>
            </div>
            <div className="mini">
              <span className="n">~90%</span>
              <span className="lbl">
                Designs signed off
                <br />
                without a second round
              </span>
            </div>
            <div className="mini">
              <span className="n">3 → 1</span>
              <span className="lbl">
                Sampling rounds
                <br />
                typical cycle
              </span>
            </div>
            <div className="mini">
              <span className="n">2 yrs</span>
              <span className="lbl">
                To formalise
                <br />
                the protocol
              </span>
            </div>
          </div>

          <div className="prose" style={{ marginTop: 'clamp(40px, 5vw, 56px)' }}>
            <p style={{ fontSize: '14.5px', color: 'var(--muted)', maxWidth: '60ch' }}>
              <em>The remaining ten percent was mostly cost re-engineering — not aesthetic correction.</em>
            </p>
          </div>

          <div className="subsection">
            <span className="subsection-num">09c</span>
            <h3 className="subsection-title">One calendar wasn't the only calendar.</h3>
            <div className="prose">
              <p>
                The annual back-to-school cycle was the spine, but it wasn't the only commitment. Mid-year briefs ran in
                parallel across six channels, each with its own design count, target cost, and timeline. Fast-turn briefs
                landed for ecommerce events: Big Billion Days, the Great Indian Festival, Prime Day. Five new backpacks
                and two luggages for Flipkart could come in while the next back-to-school range was already in development,
                both with business commitments to meet.
              </p>
              <p>
                Holding multiple commercial calendars at once meant the operating model had to flex without breaking —{' '}
                <em>the design system carried the cohesion, the development protocol held the cycle, and the priority of
                what shipped when was managed in real time.</em>
              </p>
            </div>
          </div>

          <figure className="figure">
            <picture>
              <source srcSet="/sixchannels.png" type="image/png" />
              <img src="/sixchannels.png" alt="Parallel calendars across six channels" />
            </picture>
            <figcaption>
              Six channels, one operating model. Trade ran the back-to-school spine; the other five channels each ran
              their own calendars and fed the same architecture.
            </figcaption>
          </figure>

          <div className="pull">The point of an operating model isn't elegance. It's consistency at scale.</div>
        </div>
      </section>

      {/* ================ 10 — IMPACT (DARK FEATURED) ================ */}
      <section className="band band--ink section section--ink">
        <div className="container">
          <div className="featured-head">
            <div className="section-marker">
              <span className="num">10.</span>
              <span className="label">Impact</span>
            </div>
            <span className="label">2021 — 2026 · five back-to-school seasons</span>
          </div>

          <h2 className="H2">What working looked like.</h2>

          <div className="prose" style={{ marginTop: 'clamp(40px, 5vw, 56px)' }}>
            <p>
              Genie began as a kids-only, florals-led, trade-only school-bag label. Five years on, it was a teen-and-college
              brand spanning backpacks, luggage and handbags.
            </p>
          </div>

          <div className="giant-stats">
            <div className="cell">
              <span className="n">~6×</span>
              <span className="lbl">
                Brand growth
                <br />
                2021—2026
              </span>
            </div>
            <div className="cell">
              <span className="n">3 → 9</span>
              <span className="lbl">
                Ranges in a
                <br />
                BTS season
              </span>
            </div>
            <div className="cell">
              <span className="n">21 → 84</span>
              <span className="lbl">
                SKUs per
                <br />
                BTS range
              </span>
            </div>
            <div className="cell">
              <span className="n">1 → 6</span>
              <span className="lbl">
                Sales channels
                <br />
                operating model
              </span>
            </div>
          </div>

          <div className="prose">
            <p>
              Those are the headline figures. The clearest proof of the system, though, isn't the totals — it's
              individual products that outlived a market rebuilt every year. Three below stand for a wider pattern. None
              carries numbers here; what they show is what survival looked like.
            </p>
          </div>

          <div className="media-split">
            <div className="ms-text">
              <div className="subsec-head">
                <span className="n">10a</span>
                <span className="ttl">A property, not a product — Amore.</span>
              </div>
              <div className="prose">
                <p>
                  Most prints get a season. Amore got several. It was launched in 2023 as part of the brand reframe —
                  happiness as girl-power identity, not just florals — and the response made it clear it wasn't a
                  single-season win. The brand re-launched it the following year as a recurring property the customer
                  recognised and asked for by name. The print didn't sell as one design; it sold as a piece of brand
                  vocabulary.
                </p>
                <p>
                  That's the senior outcome of the floral-to-girl-power reframe: it gave the brand a second visual
                  language, and Amore proved that language could carry weight — not for one season, but as a property the
                  brand could return to.
                </p>
              </div>
            </div>
            <figure className="figure ms-fig">
              <picture>
                <source srcSet="/images/genie/10a.webp" type="image/webp" />
                <img src="/images/genie/10a.jpg" alt="Amore — multi-season property" />
              </picture>
              <figcaption>
                Amore — a property held across seasons rather than replaced each year. Continuity designed in, not a gap
                in the calendar.
              </figcaption>
            </figure>
          </div>

          <div className="media-split media-split--rev">
            <div className="ms-text">
              <div className="subsec-head">
                <span className="n">10b</span>
                <span className="ttl">Surviving the reset — Cool.</span>
              </div>
              <div className="prose">
                <p>
                  In a market where the entire range is rebuilt every year, the harshest test of a design is whether it
                  survives into the next collection at all. Cool survived three. It appears in successive Genie trade range
                  presentations and the 2023 retail catalogue, and remained on Flipkart through subsequent seasons.
                </p>
                <p>
                  One field-sales account from a market visit illustrated the mechanism —{' '}
                  <em>a girl walked into a dealer's shop with a screenshot of the bag from Genie's Instagram and asked
                  for it by sight, then walked from shop to shop trying to find it.</em> The dealer reorder followed.
                </p>
                <p>
                  A design that survives one annual reset is good fortune. A design that survives three is the audit
                  speaking through product.
                </p>
              </div>
            </div>
            <figure className="figure ms-fig">
              <picture>
                <source srcSet="/images/genie/10b.webp" type="image/webp" />
                <img src="/images/genie/10b.jpg" alt="Cool — the graphic backpack that survived three annual range resets" />
              </picture>
              <figcaption>
                Cool — survived three annual resets. Spotted on Instagram, asked for by sight at the dealer, reordered. A
                design that outlives the calendar is the audit speaking through product.
              </figcaption>
            </figure>
          </div>

          <div className="media-split">
            <div className="ms-text">
              <div className="subsec-head">
                <span className="n">10c</span>
                <span className="ttl">Sass.</span>
              </div>
              <div className="prose">
                <p>
                  Sass was launched in the same 2023 collection as Amore, into the 19″ Max segment — the high-volume backpacks at the top of the range. It performed strongly in its launch season and carried into 2024, supporting the same pattern: when the audit, the architecture, and the reframe were aligned, the products that came out of them didn't just sell — they re-sold.
                </p>
                <p>
                  Sass on its own is one design that worked. Sass alongside Amore and Cool, all carrying across multiple seasons, is the system in evidence.
                </p>
              </div>
            </div>
            <figure className="figure ms-fig">
              <picture>
                <img src="/10c.jpeg" alt="Sass — the high-volume backpack" />
              </picture>
              <figcaption>
                Sass — launched in the 19″ Max segment, it performed strongly and carried into the next year.
              </figcaption>
            </figure>
          </div>

          <div className="subsection">
            <span className="subsection-num">10d</span>
            <h3 className="subsection-title">What the market told us.</h3>
            <div className="prose">
              <p>
                Three designs are a sample, not a pattern. The pattern lived elsewhere — in sustained sell-through
                across the range, in high-bet designs reordering inside the four-month selling window, and in the
                in-season feedback loop that fed market signal back into in-flight development.
              </p>
              <p>
                While the season ran, I ran pan-India market visits — listening to dealers and watching what moved, region
                by region. What came back went into the next range's brief, and sometimes into the current range's
                mid-cycle calibrations.
              </p>
            </div>
          </div>

          <div className="pull pull--ink">
            Knowing what sold wasn't the work. Knowing why, and building the next range on the answer, was.
          </div>

          <div className="framework framework--3 framework--ink">
            <div className="cell">
              <span className="num">01</span>
              <span className="ttl">Sustained sell-through</span>
              <span className="desc">
                Range-wide performance held across multiple seasons, supported by the architecture and the audit.
              </span>
            </div>
            <div className="cell">
              <span className="num">02</span>
              <span className="ttl">Multi-season designs</span>
              <span className="desc">
                Strongest products — Amore, Cool, Sass among them — survived the annual reset and re-launched as recurring
                assets.
              </span>
            </div>
            <div className="cell">
              <span className="num">03</span>
              <span className="ttl">In-season reorders</span>
              <span className="desc">
                High-bet designs sold out inside the selling window and were reordered for the same season.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ================ 11 — REFLECTION ================ */}
      <section className="section">
        <div className="container">
          <div className="section-marker">
            <span className="num">11.</span>
            <span className="label">Reflection</span>
          </div>
          <h2 className="section-title">What the work was actually about.</h2>

          <div className="prose">
            <p>
              Five years of Genie produced a backpack range, a luggage line, the brand language that held them together,
              and the system that shipped them on calendar. Read at the level of artefacts, that's the case study.
            </p>
            <p>
              Read at the level of how the work was done, it was something else: a way of operating that I now recognise
              as five components, each one reinforcing the others. <em>None of them are specific to backpacks.</em> Any
              consumer brand operating across multiple audiences, channels and product cycles faces the same challenge —
              deciding what to change, what to keep, and how to know the difference.
            </p>
          </div>

          <div className="framework framework--5">
            <div className="cell">
              <span className="num">01</span>
              <span className="ttl">Reading the customer</span>
              <span className="desc">
                Cohort research and ongoing immersion. Not asking what she wanted. Looking at what she carried, watched,
                copied, and decided.
              </span>
            </div>
            <div className="cell">
              <span className="num">02</span>
              <span className="ttl">Separating signal from noise</span>
              <span className="desc">
                Trend forecasting is not the work. Choosing which part of a trend is durable enough to commit factory
                months to — and which part will age out before it ships — is.
              </span>
            </div>
            <div className="cell">
              <span className="num">03</span>
              <span className="ttl">Translating insight into systems</span>
              <span className="desc">
                Architecture as the answer to a fast-fashion problem. Locked palettes, platform silhouettes, fixed and
                disruptive fabric ratios — design as a way of building ranges, not bags.
              </span>
            </div>
            <div className="cell">
              <span className="num">04</span>
              <span className="ttl">Holding consistency at scale</span>
              <span className="desc">
                A brand language carried across formats and across years. The same identity ageing up with the customer
                carrying it. Not a rebrand. A continuation.
              </span>
            </div>
            <div className="cell">
              <span className="num">05</span>
              <span className="ttl">Learning while the market is still speaking</span>
              <span className="desc">
                Sales data, dealer feedback, regional market visits during the selling window. Building the next range on
                what the current range was teaching, in real time.
              </span>
            </div>
          </div>

          <div className="subsection">
            <span className="subsection-num">11a</span>
            <h3 className="subsection-title">Co-owning the dealer narrative.</h3>
            <div className="prose">
              <p>
                Design rationale at dealer launch meets was mine; PM led commercial — pricing, SKU strategy, MRP. Together
                we sequenced the 16″ Supreme retirement and the Teen construction launch as a single, year-long dealer story.{' '}
                <em>No surprise cuts. No orphan ranges.</em> The retirement landed because the replacement was already
                promised.
              </p>
            </div>
          </div>

          <div className="subsection">
            <span className="subsection-num">11b</span>
            <h3 className="subsection-title">What would come next.</h3>
            <div className="prose">
              <p>
                Looking back, I'd invest more heavily in formalising the feedback loop between regional market signals and
                range planning. The strongest insights often emerged during the selling window rather than before it.
                Creating a more structured way to capture and act on those signals would be the next evolution of the
                system.
              </p>
            </div>
          </div>

          <figure className="figure">
            <picture>
              <source srcSet="/5yearsgrowing.png" type="image/png" />
              <img src="/5yearsgrowing.png" alt="Genie 2026 — the system in evidence" />
            </picture>
            <figcaption>The system in evidence — five years on, the brand ageing up with the girl carrying it.</figcaption>
          </figure>
        </div>
      </section>

      {/* ================ 12 — ROLE & SCOPE ================ */}
      <section className="band band--paper-deep section">
        <div className="container">
          <div className="section-marker">
            <span className="num">12.</span>
            <span className="label">Role, scope &amp; attribution</span>
          </div>
          <h2 className="section-title">What I made, honestly.</h2>

          <div className="prose">
            <p>
              <strong>Design and Development Manager, Safari Industries · 2021 — February 2026.</strong> Sole design
              owner of Genie from 2021.
            </p>
          </div>

          <div className="scope-list">
            <div className="scope-row">
              <div className="k">Owned end-to-end</div>
              <div className="t">
                Genie's design language and its evolution across five years. Range strategy and architecture across
                backpacks. Original-design lines: 19″ MAX, 18″ Teen, College Korea, College range. CMF and surface direction
                across the brand. The sampling-protocol redesign and ongoing operational discipline.
              </div>
            </div>
            <div className="scope-row">
              <div className="k">Led with collaboration</div>
              <div className="t">
                Hardshell luggage forms — developed with another designer on construction and CAD; my work was design
                direction, CMF, and the brand-coherence call across the range. Range bet arguments — PMs locked final order
                quantities; I shaped the case for what each range bet should be. Campaign and catalogue work — PMs led the
                workstreams; I contributed design point of view in planning.
              </div>
            </div>
            <div className="scope-row">
              <div className="k">Commissioned &amp; partnered on</div>
              <div className="t">
                Consumer research — Matterfox conducted the qualitative cohort study; I shaped the brief, embedded in field
                interviews as observer, and translated the findings into product direction. Factory and vendor relationships
                — Rider Bags (Bangladesh) for backpack development; Quanzhou Maxbag Company for fabric sourcing.
              </div>
            </div>
            <div className="scope-row">
              <div className="k">Leadership &amp; succession</div>
              <div className="t">
                I led Genie's design from 2021 — the brand reframe, the cohort research, the operating model, the
                platform-and-component architecture, the College Korea call, the teen and college range, the luggage
                direction. As the portfolio grew and my move to the UK came onto the horizon, the brand needed a second pair
                of hands. Shital joined in early 2024 and worked under my direction on Genie: I scoped, assigned and
                reviewed her work against the brand. Through 2024 that review was close — the brand wasn't yet second nature
                to her. In parallel I designed the strategic newbuild myself: the 18″ Teen, College Korea, College Basic and
                19″ MAX, drawn in 2024 to launch in 2025. By 2025 she was designing independently within the system I'd
                built, while I focused on simplifying the collection into a cleaner, elevated line of 17″ and 19″ platforms
                — retiring the 18″ as a size, not the construction. By 2026 the handover was substantially complete. She now
                runs Genie.
              </div>
            </div>
          </div>

          <div className="pull">The products changed every year. The job was knowing what shouldn't.</div>
        </div>
      </section>

      {/* ================ NEXT PROJECT ================ */}
      <section className="next-band">
        <div className="container">
          <div className="next-head">
            <span className="label">Next project</span>
            <span className="label">Safari Industries · 2023 — 2025</span>
          </div>
          <Link href="/Phoenix_Case_Study" className="next-link">
            <h3 className="ttl">Phoenix →</h3>
            <p className="sub">A business trolley built to feel like a Samsonite — on a value brand's cost base.</p>
            <span className="cta">Read the case study</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
