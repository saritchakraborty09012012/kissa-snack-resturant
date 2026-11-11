function QF({ dish: e, index: t, active: n }) {
  return (
    <div
      className="dish-overlay absolute inset-0 z-[1]"
      data-active={n ? `true` : `false`}
      aria-hidden={!n}
    >
      <div className="shell relative h-full">
        <div className="absolute left-[var(--pad)] top-[16%] max-w-[56vw] md:top-[19%] md:max-w-[46vw]">
          <div className="mb-5 flex items-center gap-3 md:mb-7">
            <span className="h-px w-8 bg-bone/30" />
            <p className="label whitespace-nowrap">({e.kicker})</p>
          </div>
          <h2 className="display text-[clamp(3.5rem,8.2vw,9.4rem)] text-bone">
            {e.lines.map((t, n) => (
              <span key={t} className="block overflow-hidden">
                <span
                  className={`dish-line ${n === e.lines.length - 1 && e.lines.length > 1 ? `italic text-ice/90` : ``}`}
                  style={{
                    transitionDelay: `${120 + n * 90}ms`,
                  }}
                >
                  {t}
                </span>
              </span>
            ))}
          </h2>
          <div
            className="dish-fade mt-7 hidden max-w-[310px] md:block"
            style={{
              transitionDelay: `480ms`,
            }}
          >
            <p className="text-[11px] font-light leading-relaxed text-bone/45">{e.description}</p>
            <div className="mt-5 flex items-center gap-5">
              <span className="font-serif text-2xl leading-none text-bone/85">{e.price}</span>
              <span className="h-3 w-px bg-bone/20" />
              <span className="text-[8px] uppercase tracking-[0.22em] text-bone/35">{e.since}</span>
            </div>
          </div>
        </div>
        <div
          className="dish-fade absolute bottom-[124px] left-[var(--pad)] hidden items-center gap-3 lg:flex"
          style={{
            transitionDelay: `600ms`,
          }}
        >
          <Star size={8} className="text-ice/60" />
          <span className="text-[8px] uppercase tracking-[0.24em] text-bone/35">{e.label}</span>
          <span className="h-px w-10 bg-bone/15" />
          <span className="text-[8px] uppercase tracking-[0.24em] text-bone/25">{e.spec}</span>
        </div>
        <div className="pointer-events-none absolute bottom-[15%] right-[var(--pad)] flex items-start gap-4 md:bottom-[20%]">
          <span className="mt-2 hidden text-[7px] uppercase leading-relaxed tracking-[0.3em] text-bone/25 md:block">
            Dish
            <br />
            number
          </span>
          <span className="display text-[clamp(5.2rem,15vw,15rem)] leading-[0.7] text-bone/[0.14]">
            {e.id}
          </span>
        </div>
      </div>
    </div>
  )
}
