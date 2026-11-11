function Preloader({ onDone: e }) {
  let [t, n] = (0, React.useState)(0),
    [r, i] = (0, React.useState)(0),
    [a, o] = (0, React.useState)(0),
    s = (0, React.useRef)(0),
    c = [
      `Grinding the spices`,
      `Lighting the stove`,
      `Simmering the milk`,
      `Pouring the first glass`,
    ]
  return (
    (0, React.useEffect)(() => {
      let t = window.matchMedia(`(prefers-reduced-motion: reduce)`).matches ? 500 : 2800,
        r = 0
      s.current = performance.now()
      let a = (o) => {
        let c = Math.min(1, (o - s.current) / t),
          l = 1 - (1 - c) ** 3
        ;(n(Math.round(l * 100)),
          c < 1
            ? (r = requestAnimationFrame(a))
            : (i(1),
              window.setTimeout(() => {
                ;(i(2), e?.())
              }, 700)))
      }
      r = requestAnimationFrame(a)
      let l = window.setInterval(() => o((e) => (e + 1) % c.length), 900)
      return () => {
        ;(cancelAnimationFrame(r), clearInterval(l))
      }
    }, []),
    (
      <div
        className={`pointer-events-none fixed inset-0 z-[300] flex flex-col justify-between overflow-hidden bg-ink px-6 py-8 transition-all duration-1000 ease-silk md:px-12 md:py-10 ${r === 2 ? `opacity-0` : `opacity-100`}`}
        style={{
          visibility: r === 2 ? `hidden` : `visible`,
        }}
      >
        <div className="pointer-events-none absolute inset-0 opacity-60">
          <div className="absolute left-[20%] top-[30%] h-[46vw] w-[46vw] rounded-full bg-[#6f8797]/20 blur-[110px]" />
          <div className="absolute right-[12%] top-[12%] h-[30vw] w-[30vw] rounded-full bg-[#b9d6e7]/10 blur-[90px]" />
          <div className="absolute bottom-[8%] left-[45%] h-[36vw] w-[36vw] rounded-full bg-[#3d4b57]/20 blur-[120px]" />
        </div>
        <div className="relative flex items-start justify-between">
          <div className="flex items-center gap-3 text-bone">
            <CupLogo size={38} />
            <div className="flex flex-col">
              <Wordmark />
              <span className="mt-1.5 text-[7px] uppercase tracking-[0.32em] text-bone/35">
                A night café · Mumbai
              </span>
            </div>
          </div>
          <div className="text-right">
            <p className="label">Opening hours</p>
            <p className="mt-2 text-[10px] tracking-[0.18em] text-bone/70">6:00 PM — 5:00 AM</p>
          </div>
        </div>
        <div className="relative flex flex-1 flex-col items-center justify-center">
          <div className="relative mb-10">
            <div className="absolute inset-0 rounded-full bg-ice/10 blur-3xl" />
            <CupLogo size={92} className="relative animate-pulse text-bone/80" />
          </div>
          <p className="max-w-md text-center font-serif text-3xl leading-tight text-bone/90 md:text-4xl">
            {'Chai, '}
            <em className="italic text-ice/90">poured slow.</em>
          </p>
          <p className="mt-5 h-4 text-[9px] uppercase tracking-[0.32em] text-bone/35 transition-all duration-500">
            {c[a]}
          </p>
        </div>
        <div className="relative">
          <div className="mb-4 flex items-end justify-between">
            <p className="label">Loading the kettle</p>
            <p className="font-serif text-5xl leading-none text-bone/80 tabular-nums md:text-7xl">
              {String(t).padStart(3, `0`)}
            </p>
          </div>
          <div className="h-px w-full overflow-hidden bg-bone/15">
            <div
              className="h-full bg-ice/80 transition-[width] duration-150 ease-linear"
              style={{
                width: `${t}%`,
              }}
            />
          </div>
          <div className="mt-4 flex justify-between text-[8px] uppercase tracking-[0.26em] text-bone/30">
            <span>Mr. Chaiwala — Est. 2003</span>
            <span>Best viewed after dark</span>
          </div>
        </div>
      </div>
    )
  )
}
var ArrowUpRight = ({ size: e = 14, className: t = `` }) => (
    <svg width={e} height={e} viewBox="0 0 24 24" fill="none" className={t} aria-hidden={!0}>
      <path
        d="M7 17 17 7M8 7h9v9"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  ArrowDown = ({ size: e = 14, className: t = `` }) => (
    <svg width={e} height={e} viewBox="0 0 24 24" fill="none" className={t} aria-hidden={!0}>
      <path
        d="M12 4v16m0 0 6-6m-6 6-6-6"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  Close = ({ size: e = 20, className: t = `` }) => (
    <svg width={e} height={e} viewBox="0 0 24 24" fill="none" className={t} aria-hidden={!0}>
      <path
        d="M5 5l14 14M19 5 5 19"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinecap="round"
      />
    </svg>
  ),
  MenuIcon = ({ size: e = 22, className: t = `` }) => (
    <svg width={e} height={e} viewBox="0 0 24 24" fill="none" className={t} aria-hidden={!0}>
      <path d="M3 8h18M3 16h18" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
    </svg>
  ),
  Pin = ({ size: e = 14, className: t = `` }) => (
    <svg width={e} height={e} viewBox="0 0 24 24" fill="none" className={t} aria-hidden={!0}>
      <path
        d="M12 21s7-5.4 7-11a7 7 0 1 0-14 0c0 5.6 7 11 7 11Z"
        stroke="currentColor"
        strokeWidth="1.1"
      />
      <circle cx="12" cy="10" r="2.4" stroke="currentColor" strokeWidth="1.1" />
    </svg>
  ),
  Star = ({ size: e = 10, className: t = `` }) => (
    <svg
      width={e}
      height={e}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={t}
      aria-hidden={!0}
    >
      <path d="M12 2c.6 5.4 3 8 8 10-5 2-7.4 4.6-8 10-.6-5.4-3-8-8-10 5-2 7.4-4.6 8-10Z" />
    </svg>
  ),
  mr = [
    {
      id: `01`,
      slug: `signature-chai`,
      name: `Signature Chai`,
      lines: [`Signature`, `Chai`],
      label: `The signature`,
      kicker: `The house pour`,
      description: `Strong, hot Indian tea brewed with fresh milk and aromatic leaves. Poured in a cutting or as a full glass.`,
      price: `₹40`,
      spec: `Served piping hot`,
      since: `Brewed since 2003`,
      accent: `#c9894b`,
      components: [`The glass`, `The brew`, `The milk`, `The malai`, `The steam`],
    },
    {
      id: `02`,
      slug: `kitkat-shake`,
      name: `KitKat Shake`,
      lines: [`KitKat`, `Shake`],
      label: `The shake`,
      kicker: `Cold, loud, excessive`,
      description: `Thick chocolate shake blended with KitKat, crowned with whipped cream, crushed chocolate and one more wafer for the road.`,
      price: `₹120`,
      spec: `Served ice cold`,
      since: `For the sweet-toothed`,
      accent: `#a56a45`,
      components: [`The glass`, `The blend`, `The KitKat`, `The cream`, `The rubble`],
    },
    {
      id: `03`,
      slug: `classic-vada-pav`,
      name: `Classic Vada Pav`,
      lines: [`Classic`, `Vada Pav`],
      label: `The classic`,
      kicker: `The city, in a bun`,
      description: `A soft ladi pav, a spiced potato vada, dry garlic chutney and green chutney. The city's favourite, built by hand.`,
      price: `₹40`,
      spec: `Built by hand`,
      since: `The 4 a.m. regular`,
      accent: `#d09a4a`,
      components: [`The pav`, `The vada`, `The chutneys`, `The chilli`, `The crunch`],
    },
    {
      id: `04`,
      slug: `paneer-tandoori-sandwich`,
      name: `Paneer Tandoori Sandwich`,
      lines: [`Paneer`, `Tandoori`, `Sandwich`],
      label: `The sandwich`,
      kicker: `Smoke, between bread`,
      description: `Char-grilled paneer with mint chutney, onion, tomato and house slaw. Smoked between two slices of toasted bread.`,
      price: `₹90`,
      spec: `Char-grilled to order`,
      since: `Best at midnight`,
      accent: `#c46a3a`,
      components: [`The bread`, `The paneer`, `The marinade`, `The slaw`, `The char`],
    },
    {
      id: `05`,
      slug: `masala-maggi`,
      name: `Masala Maggi`,
      lines: [`Masala`, `Maggi`],
      label: `The comfort`,
      kicker: `Two minutes, or as long as it takes`,
      description: `Noodles cooked with our house masala, fresh vegetables and a generous knob of butter. The bowl you order when nothing else makes sense.`,
      price: `₹50`,
      spec: `Cooked in small batches`,
      since: `The universal remedy`,
      accent: `#d3a93f`,
      components: [`The bowl`, `The noodles`, `The vegetables`, `The masala`, `The butter`],
    },
    {
      id: `06`,
      slug: `white-sauce-pasta`,
      name: `White Sauce Pasta`,
      lines: [`White`, `Sauce`, `Pasta`],
      label: `The pasta`,
      kicker: `Slow-cooked cream`,
      description: `Penne folded through a slow-cooked cream sauce with herbs, corn and bell pepper. Finished with cracked pepper at the pass.`,
      price: `₹110`,
      spec: `Finished at the pass`,
      since: `The quiet order`,
      accent: `#d8c9a2`,
      components: [`The bowl`, `The cream`, `The penne`, `The vegetables`, `The pepper`],
    },
    {
      id: `07`,
      slug: `stuffed-paratha`,
      name: `Stuffed Paratha`,
      lines: [`Stuffed`, `Paratha`],
      label: `The paratha`,
      kicker: `Flaky, warm, folded`,
      description: `Flaky wheat paratha stuffed with spiced potato, finished with white butter and served with curd and house pickle.`,
      price: `₹60`,
      spec: `Griddled to order`,
      since: `A Sunday, any day`,
      accent: `#d7b477`,
      components: [`The dough`, `The filling`, `The fold`, `The butter`, `The steam`],
    },
    {
      id: `08`,
      slug: `papadi-chaat`,
      name: `Papadi Chaat`,
      lines: [`Papadi`, `Chaat`],
      label: `The chaat`,
      kicker: `Cold, crisp, loud`,
      description: `Crisp papdi, chilled curd, tamarind, mint, sev and pomegranate. Sweet, sour, cold, and loud.`,
      price: `₹70`,
      spec: `Assembled at the counter`,
      since: `The 2 a.m. rescue`,
      accent: `#c05f58`,
      components: [`The bowl`, `The curd`, `The papdi`, `The chutneys`, `The sev`],
    },
  ],
  hr = [
    {
      name: `Cardamom`,
      no: `01`,
      note: `Green pods, cracked open.`,
      text: `Floral and cooling. The top note of the brew, the reason it smells like a morning that never quite ends.`,
    },
    {
      name: `Ginger`,
      no: `02`,
      note: `Pounded fresh each evening.`,
      text: `The heat that arrives late and stays. We use more than we should, and then a little more.`,
    },
    {
      name: `Clove`,
      no: `03`,
      note: `One or two. Never more.`,
      text: `Dark, numbing, sweet. Clove is the spine of the glass — you only notice it when it is missing.`,
    },
    {
      name: `Cinnamon`,
      no: `04`,
      note: `Rolled bark, slow warmth.`,
      text: `The backbone. Broken by hand, never ground, so the sweetness unfolds over the eleven hours we are open.`,
    },
    {
      name: `Fennel`,
      no: `05`,
      note: `A quiet sweetness.`,
      text: `The reason you want a second glass. It smooths the edges without ever announcing itself.`,
    },
    {
      name: `Black Pepper`,
      no: `06`,
      note: `A crack of heat at the end.`,
      text: `The last thing you taste. One turn of the mill over the kettle, and the whole glass wakes up.`,
    },
  ],
  gr = [
    {
      value: 11,
      suffix: ``,
      unit: `hours`,
      label: `A night`,
    },
    {
      value: 6,
      suffix: ``,
      unit: `days`,
      label: `A week`,
    },
    {
      value: 125,
      suffix: ``,
      unit: `seats`,
      label: `Inside & out`,
    },
    {
      value: 24,
      suffix: ``,
      unit: `spices`,
      label: `In the blend`,
    },
  ],
  _r = [
    {
      label: `First pour`,
      time: `6:00 PM`,
      text: `The kettle goes on before the lights do. The first glass is always for the staff.`,
    },
    {
      label: `The last chai`,
      time: `5:00 AM`,
      text: `Poured for the ones who stay, the night shifts and the ones who forgot the time.`,
    },
    {
      label: `Second home`,
      time: `Any hour`,
      text: `Our tables are yours. No rush, no last order, no one counting the minutes.`,
    },
    {
      label: `All are welcome`,
      time: `Every night`,
      text: `Students, drivers, dreamers, old friends and the ones who have not met yet.`,
    },
  ],
  vr = [
    {
      section: `Chai & shakes`,
      items: [
        {
          name: `Signature Chai`,
          note: `Fresh milk, whole spices`,
          price: `₹40`,
        },
        {
          name: `Cutting Chai`,
          note: `The small, strong one`,
          price: `₹25`,
        },
        {
          name: `Kulhad Chai`,
          note: `Clay cup, extra adrak`,
          price: `₹50`,
        },
        {
          name: `KitKat Shake`,
          note: `Whipped cream, crushed wafer`,
          price: `₹120`,
        },
      ],
    },
    {
      section: `Buns & sandwiches`,
      items: [
        {
          name: `Classic Vada Pav`,
          note: `Dry garlic & green chutney`,
          price: `₹40`,
        },
        {
          name: `Cheese Vada Pav`,
          note: `Amul cheese, extra chutney`,
          price: `₹60`,
        },
        {
          name: `Paneer Tandoori Sandwich`,
          note: `Charred paneer, house slaw`,
          price: `₹90`,
        },
      ],
    },
    {
      section: `Comfort`,
      items: [
        {
          name: `Masala Maggi`,
          note: `House masala, butter, vegetables`,
          price: `₹50`,
        },
        {
          name: `White Sauce Pasta`,
          note: `Penne, cream, cracked pepper`,
          price: `₹110`,
        },
        {
          name: `Stuffed Paratha`,
          note: `Potato, white butter, curd`,
          price: `₹60`,
        },
      ],
    },
    {
      section: `Chaat`,
      items: [
        {
          name: `Papadi Chaat`,
          note: `Curd, tamarind, sev, pomegranate`,
          price: `₹70`,
        },
        {
          name: `Sev Puri`,
          note: `Six pieces, three chutneys`,
          price: `₹60`,
        },
        {
          name: `Dahi Puri`,
          note: `Cold curd, sweet & sharp`,
          price: `₹70`,
        },
      ],
    },
  ],
  yr = [
    {
      label: `Menu`,
      href: `#menu`,
      action: `menu`,
    },
    {
      label: `Story`,
      href: `#story`,
    },
    {
      label: `Experience`,
      href: `#dishes`,
    },
    {
      label: `Visit`,
      href: `#visit`,
    },
  ],
  br = mr.length
