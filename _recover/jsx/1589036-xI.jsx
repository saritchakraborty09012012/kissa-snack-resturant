function Footer({ onMenu: e, onBook: t }) {
  let [n, r] = (0, React.useState)(``),
    [i, a] = (0, React.useState)(`idle`),
    o = async (e) => {
      if ((e.preventDefault(), n && i !== `sending`)) {
        a(`sending`)
        try {
          if (
            !(
              await fetch(`/api/subscribe`, {
                method: `POST`,
                headers: {
                  'Content-Type': `application/json`,
                },
                body: JSON.stringify({
                  email: n,
                }),
              })
            ).ok
          )
            throw Error(`failed`)
          ;(a(`done`), r(``))
        } catch {
          ;(window.setTimeout(() => a(`done`), 700), r(``))
        }
      }
    },
    s = (e) => (t) => {
      ;(t.preventDefault(), scrollToEl(document.querySelector(e)))
    }
  return (
    <footer className="relative overflow-hidden border-t border-line bg-[#06070b]">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[40vw] w-[80vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#6d8596]/[0.08] blur-[130px]" />
      <div className="shell relative">
        <div className="grid grid-cols-1 gap-10 border-b border-line py-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <p className="label mb-4 text-ice/60">(Stay a little longer)</p>
            <p className="max-w-sm font-serif text-[clamp(1.8rem,3.4vw,2.6rem)] leading-[1.05] text-bone/85">
              One letter a month.
              <br />
              <em className="italic text-bone/40">New dishes, old stories.</em>
            </p>
            <form
              onSubmit={o}
              className="mt-6 flex max-w-sm items-center gap-3 border-b border-bone/20 pb-2 focus-within:border-ice/60"
            >
              <input
                type="email"
                required={!0}
                value={n}
                onChange={(e) => r(e.target.value)}
                placeholder="your@email.com"
                aria-label="Email address"
                className="w-full bg-transparent text-[11px] font-light text-bone outline-none placeholder:text-bone/20"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-bone/20 text-bone/60 transition-colors hover:border-ice/60 hover:text-ice"
              >
                <ArrowUpRight size={13} />
              </button>
            </form>
            <p className="mt-3 text-[8px] uppercase tracking-[0.22em] text-bone/20">
              {i === `done` ? `You are on the list. See you after dark.` : `No spam. Only smoke.`}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-7 lg:pl-16">
            {bI.map((n) => (
              <div key={n.title}>
                <p className="label mb-5 text-bone/30">{n.title}</p>
                <ul className="space-y-3">
                  {n.links.map((n) => (
                    <li key={n.label}>
                      <a
                        href={n.href || `#`}
                        onClick={(r) => {
                          n.action === `menu`
                            ? (r.preventDefault(), e?.())
                            : n.action === `book`
                              ? (r.preventDefault(), t?.())
                              : n.href && s(n.href)(r)
                        }}
                        className="text-[11px] font-light text-bone/45 transition-colors duration-500 hover:text-bone"
                      >
                        {n.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div>
              <p className="label mb-5 text-bone/30">Find us</p>
              <p className="text-[11px] font-light leading-relaxed text-bone/45">
                14, Koliwada Lane
                <br />
                Bandra West
                <br />
                Mumbai 400050
              </p>
              <a
                href="tel:+919820000003"
                className="mt-3 inline-block text-[11px] text-bone/45 transition-colors hover:text-bone"
              >
                +91 98200 00003
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between border-b border-line py-8">
          <div className="flex items-center gap-4">
            <Star size={10} className="text-ice/60" />
            <p className="text-[8px] uppercase tracking-[0.28em] text-bone/25">
              Open at sunset · pouring until five
            </p>
          </div>
          <div className="hidden items-center gap-6 text-[8px] uppercase tracking-[0.24em] text-bone/30 sm:flex">
            <a href="#" className="link-line hover:text-bone">
              Instagram
            </a>
            <a href="#" className="link-line hover:text-bone">
              Zomato
            </a>
            <a href="#" className="link-line hover:text-bone">
              Swiggy
            </a>
          </div>
        </div>
        <div className="relative py-12">
          <p
            aria-hidden="true"
            className="display select-none whitespace-nowrap text-[clamp(3.4rem,11.4vw,12.4rem)] leading-[0.78] text-bone/[0.08]"
          >
            MR. CHAIWALA<span className="ml-4 italic text-ice/20">Est. 2003</span>
          </p>
          <div className="mt-8 flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
            <Brand />
            <p className="text-[8px] uppercase leading-relaxed tracking-[0.24em] text-bone/20">
              {'© '}
              {new Date().getFullYear()}
              {' Mr. Chaiwala · All nights reserved'}
              <br />
              Built after dark in Bombay
            </p>
            <button
              type="button"
              onClick={() =>
                hA(0, {
                  duration: 1.6,
                })
              }
              className="group flex items-center gap-2 text-[8px] uppercase tracking-[0.24em] text-bone/35 transition-colors hover:text-ice"
            >
              Back to top
              <span className="flex h-7 w-7 items-center justify-center rounded-full border border-bone/15 transition-colors group-hover:border-ice/50">
                <ArrowUpRight size={11} className="-rotate-45" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
