function vI() {
  return (
    <div className="relative h-full min-h-[440px] w-full overflow-hidden border border-line bg-[#070a0f]">
      <div
        className="absolute inset-0 opacity-[0.16]"
        style={{
          backgroundImage: `linear-gradient(rgba(237,233,224,0.16) 1px, transparent 1px), linear-gradient(90deg, rgba(237,233,224,0.16) 1px, transparent 1px)`,
          backgroundSize: `46px 46px`,
        }}
      />
      <svg viewBox="0 0 600 560" className="absolute inset-0 h-full w-full" aria-hidden="true">
        <path
          d="M-40 470 C 90 420, 120 340, 250 330 S 470 380, 660 300"
          fill="none"
          stroke="#16222c"
          strokeWidth="54"
        />
        <path
          d="M-40 470 C 90 420, 120 340, 250 330 S 470 380, 660 300"
          fill="none"
          stroke="#223644"
          strokeWidth="1.2"
          strokeDasharray="8 10"
          opacity="0.8"
        />
        <g stroke="rgba(237,233,224,0.11)" strokeWidth="1">
          <path d="M42 -20 L120 580" />
          <path d="M210 -20 L260 580" />
          <path d="M378 -20 L340 580" />
          <path d="M520 -20 L470 580" />
          <path d="M-20 120 L620 150" />
          <path d="M-20 250 L620 268" />
          <path d="M-20 360 L620 352" />
          <path d="M-20 500 L620 470" />
        </g>
        <g stroke="rgba(237,233,224,0.055)" strokeWidth="0.8">
          {Array.from(
            {
              length: 12,
            },
            (e, t) => (
              <path key={`v${t}`} d={`M${t * 55} -20 L${t * 55 + 18} 600`} />
            ),
          )}
          {Array.from(
            {
              length: 11,
            },
            (e, t) => (
              <path key={`h${t}`} d={`M-20 ${t * 56} L620 ${t * 56 + 14}`} />
            ),
          )}
        </g>
        <g fill="rgba(237,233,224,0.22)" fontSize="7" letterSpacing="2.2">
          <text x="64" y="112">
            KOLIWADA
          </text>
          <text x="392" y="240">
            BANDRA WEST
          </text>
          <text x="468" y="452">
            THE SEA
          </text>
          <text x="150" y="392">
            BAZAAR ROAD
          </text>
        </g>
        <g fill="rgba(185,214,231,0.32)" fontSize="5.2" letterSpacing="1.4">
          <text x="64" y="126">
            FISHING VILLAGE
          </text>
          <text x="392" y="252">
            19.0596° N · 72.8295° E
          </text>
          <text x="468" y="464">
            ARABIAN SEA
          </text>
        </g>
        <circle
          cx="330"
          cy="300"
          r="42"
          fill="none"
          stroke="rgba(185,214,231,0.18)"
          strokeWidth="1"
        />
        <circle
          cx="330"
          cy="300"
          r="70"
          fill="none"
          stroke="rgba(185,214,231,0.08)"
          strokeWidth="1"
        />
      </svg>
      <div className="absolute left-[55%] top-[53%] -translate-x-1/2 -translate-y-1/2">
        <span className="pulse-ring absolute left-1/2 top-1/2 -ml-3 -mt-3 block h-6 w-6 rounded-full border border-ice/50" />
        <span className="relative flex h-2.5 w-2.5 items-center justify-center rounded-full bg-ice shadow-[0_0_28px_rgba(185,214,231,0.9)]" />
      </div>
      <div className="pointer-events-none absolute right-5 top-5 flex items-center gap-2 text-[7px] uppercase tracking-[0.24em] text-bone/30">
        <Pin size={11} />
        {' Koliwada Lane'}
      </div>
      <div className="absolute inset-x-0 bottom-0 flex flex-wrap items-end justify-between gap-4 border-t border-line bg-gradient-to-t from-[#05060a] via-[#05060a]/90 to-transparent p-5 pt-12">
        <div>
          <p className="label mb-2 text-bone/30">(We are here)</p>
          <p className="font-serif text-2xl leading-none text-bone/85">14, Koliwada Lane</p>
          <p className="mt-1.5 text-[8px] uppercase tracking-[0.2em] text-bone/30">
            Bandra West, Mumbai 400050
          </p>
        </div>
        <a
          href="https://maps.google.com/?q=Bandra+West+Mumbai"
          target="_blank"
          rel="noreferrer"
          data-cursor="view"
          className="group flex items-center gap-2 border-b border-bone/20 pb-1 text-[8px] uppercase tracking-[0.24em] text-bone/60 transition-colors hover:border-ice/60 hover:text-ice"
        >
          Get directions
          <ArrowUpRight
            size={11}
            className="transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </a>
      </div>
      <span className="pointer-events-none absolute left-5 top-5 h-7 w-px bg-ice/30" />
      <span className="pointer-events-none absolute left-5 top-5 h-px w-7 bg-ice/30" />
    </div>
  )
}
