function BookingModal({ open: e, onClose: t }) {
  let [n, r] = (0, React.useState)({
      name: ``,
      phone: ``,
      date: DI,
      time: `20:00`,
      guests: `2`,
      notes: ``,
    }),
    [i, a] = (0, React.useState)(`idle`),
    [o, s] = (0, React.useState)(``),
    [c, l] = (0, React.useState)(``),
    u = (0, React.useRef)(null)
  ;(0, React.useEffect)(() => {
    if (!e) return
    a((e) => (e === `sending` ? e : `idle`))
    let n = window.setTimeout(() => u.current?.focus(), 500),
      r = (e) => {
        e.key === `Escape` && t?.()
      }
    return (
      window.addEventListener(`keydown`, r),
      () => {
        ;(window.clearTimeout(n), window.removeEventListener(`keydown`, r))
      }
    )
  }, [e, t])
  let d = (e) => (t) =>
      r((n) => ({
        ...n,
        [e]: t.target.value,
      })),
    f = (0, React.useMemo)(
      () => `MCW-${new Date().getFullYear()}-${String(Math.floor(Math.random() * 9e3) + 1e3)}`,
      [],
    )
  return (
    <div
      aria-hidden={!e}
      className={`fixed inset-0 z-[140] flex items-center justify-center p-3 transition-[opacity,visibility] duration-700 ease-silk sm:p-6 ${e ? `visible opacity-100` : `invisible opacity-0`}`}
    >
      <div className="absolute inset-0 bg-ink/85 backdrop-blur-md" onClick={t} />
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Book a table at Mr. Chaiwala"
        className={`relative grid max-h-[92vh] w-full max-w-5xl grid-cols-1 overflow-y-auto overscroll-contain border border-line bg-[#080a10] shadow-[0_40px_140px_rgba(0,0,0,0.8)] transition-all duration-[900ms] ease-silk md:grid-cols-[0.85fr_1.15fr] ${e ? `translate-y-0 scale-100` : `translate-y-8 scale-[0.98]`}`}
      >
        <button
          type="button"
          onClick={t}
          aria-label="Close booking"
          className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-bone/15 bg-ink/40 text-bone/70 backdrop-blur transition-colors hover:border-bone/40 hover:text-bone"
        >
          <Close size={17} />
        </button>
        <div className="relative hidden min-h-[560px] overflow-hidden border-r border-line bg-gradient-to-b from-[#0b1017] to-[#06070b] p-8 md:block">
          <div className="absolute inset-0">
            <div className="absolute left-1/2 top-[18%] h-[340px] w-[340px] -translate-x-1/2 rounded-full bg-[#7f9cb0]/15 blur-[80px]" />
            <img
              src="/renders/dish-01.png"
              alt=""
              className="absolute bottom-[-6%] left-1/2 w-[120%] max-w-none -translate-x-1/2 opacity-90 mix-blend-screen"
              onError={(e) => {
                e.currentTarget.style.display = `none`
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#06070b] via-transparent to-[#06070b]/40" />
          </div>
          <div className="relative flex h-full flex-col justify-between">
            <CupLogo size={38} className="text-bone/60" />
            <div>
              <p className="label mb-4">(Reservations)</p>
              <p className="display text-5xl leading-[0.92] text-bone/90">
                A table
                <br />
                under the
                <br />
                <em className="text-ice/90">fan.</em>
              </p>
              <p className="mt-6 max-w-[240px] text-[10px] uppercase leading-relaxed tracking-[0.18em] text-bone/35">
                We hold tables for fifteen minutes. The kettle waits longer.
              </p>
            </div>
          </div>
        </div>
        <div className="relative p-6 sm:p-10 md:p-12">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <p className="label mb-2">(Book a table)</p>
              <h2 className="display text-4xl text-bone sm:text-5xl">
                {'Come and '}
                <em className="text-ice/90">sit down.</em>
              </h2>
            </div>
            <CupLogo size={30} className="text-bone/25 md:hidden" />
          </div>
          {i === `done` ? (
            <div className="flex min-h-[380px] flex-col justify-center">
              <p className="label mb-4 text-ice/70">(Table held)</p>
              <h3 className="display text-5xl leading-[0.95] text-bone">
                We'll put the
                <br />
                <em className="text-ice/90">kettle on.</em>
              </h3>
              <p className="mt-6 max-w-sm text-[12px] font-light leading-relaxed text-bone/50">
                {'Thank you, '}
                {n.name || `friend`}
                {'. A table for '}
                {n.guests}
                {' is pencilled in for'} {n.time}
                {' on '}
                {n.date}. Your reference is{' '}
                <span className="tracking-[0.12em] text-bone/80">{o}</span>.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button type="button" onClick={t} className="btn btn-ice">
                  {'Back to the night '}
                  <ArrowUpRight />
                </button>
                <span className="text-[8px] uppercase tracking-[0.22em] text-bone/30">
                  14, Koliwada Lane · Bandra West
                </span>
              </div>
            </div>
          ) : (
            <form
              onSubmit={async (e) => {
                if ((e.preventDefault(), i !== `sending`)) {
                  ;(a(`sending`), l(``))
                  try {
                    let e = await fetch(`/api/reserve`, {
                      method: `POST`,
                      headers: {
                        'Content-Type': `application/json`,
                      },
                      body: JSON.stringify(n),
                    })
                    if (!e.ok) throw Error(`Could not reserve`)
                    let t = await e.json()
                    ;(s(t.code || f), a(`done`))
                  } catch {
                    window.setTimeout(() => {
                      ;(s(f), a(`done`))
                    }, 900)
                  }
                }
              }}
              className="space-y-5"
            >
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <kI label="Your name">
                  <input
                    ref={u}
                    required={!0}
                    value={n.name}
                    onChange={d(`name`)}
                    placeholder="Full name"
                    className="field"
                    autoComplete="name"
                  />
                </kI>
                <kI label="Phone">
                  <input
                    required={!0}
                    value={n.phone}
                    onChange={d(`phone`)}
                    placeholder="+91"
                    className="field"
                    autoComplete="tel"
                    inputMode="tel"
                  />
                </kI>
              </div>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
                <kI label="Date">
                  <input
                    type="date"
                    required={!0}
                    min={DI}
                    value={n.date}
                    onChange={d(`date`)}
                    className="field scheme-dark"
                  />
                </kI>
                <kI label="Time">
                  <select value={n.time} onChange={d(`time`)} className="field">
                    {EI.map((e) => (
                      <option key={e.value} value={e.value}>
                        {e.label}
                      </option>
                    ))}
                  </select>
                </kI>
                <kI label="Guests">
                  <select value={n.guests} onChange={d(`guests`)} className="field">
                    {Array.from(
                      {
                        length: 10,
                      },
                      (e, t) => t + 1,
                    ).map((e) => (
                      <option key={e} value={e}>
                        {e} {e === 1 ? `guest` : `guests`}
                      </option>
                    ))}
                  </select>
                </kI>
              </div>
              <kI label="Anything we should know?">
                <input
                  value={n.notes}
                  onChange={d(`notes`)}
                  placeholder="Birthday, allergies, favourite corner…"
                  className="field"
                />
              </kI>
              <div className="flex flex-wrap items-center justify-between gap-4 pt-4">
                <p className="max-w-[230px] text-[8px] uppercase leading-relaxed tracking-[0.18em] text-bone/30">
                  Held for 15 minutes. Open 6 PM to 5 AM, six nights.
                </p>
                <button
                  type="submit"
                  disabled={i === `sending`}
                  className="btn btn-ice min-w-[180px] disabled:opacity-60"
                >
                  {i === `sending` ? `Holding your table…` : `Request table`}
                  {i !== `sending` && <ArrowUpRight />}
                </button>
              </div>
              {c && <p className="text-[10px] text-ember">{c}</p>}
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
