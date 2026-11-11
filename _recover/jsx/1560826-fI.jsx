function fI() {
  let [e, t] = (0, React.useState)(0.42)
  ;(0, React.useEffect)(() => {
    let e = () => t(dI())
    e()
    let n = window.setInterval(e, 6e4)
    return () => window.clearInterval(n)
  }, [])
  let n = Array.from(
      {
        length: 13,
      },
      (e, t) => {
        let n = Math.PI - (t / 12) * Math.PI,
          r = t % 3 == 0 ? 74 : 78
        return {
          x1: 120 + Math.cos(n) * 84,
          y1: 118 - Math.sin(n) * 84,
          x2: 120 + Math.cos(n) * r,
          y2: 118 - Math.sin(n) * r,
          major: t % 3 == 0,
        }
      },
    ),
    r = Math.PI - e * Math.PI,
    i = 120 + Math.cos(r) * 92,
    a = 118 - Math.sin(r) * 92
  return (
    <div className="relative mx-auto w-full max-w-[430px]">
      <div className="absolute inset-x-0 top-[16%] mx-auto h-[62%] w-[62%] rounded-full bg-[#9cc4dc]/20 blur-[55px]" />
      <svg viewBox="0 0 240 160" className="relative w-full">
        <defs>
          <linearGradient id="arcGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#b9d6e7" stopOpacity="0.12" />
            <stop offset="55%" stopColor="#b9d6e7" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#b9d6e7" stopOpacity="0.25" />
          </linearGradient>
        </defs>
        <path
          d="M28 118 A92 92 0 0 1 212 118"
          fill="none"
          stroke="rgba(237,233,224,0.12)"
          strokeWidth="1"
        />
        <path
          d="M28 118 A92 92 0 0 1 212 118"
          fill="none"
          stroke="url(#arcGrad)"
          strokeWidth="1.4"
          strokeDasharray="289"
          strokeDashoffset={289 - e * 289}
          strokeLinecap="round"
          style={{
            transition: `stroke-dashoffset 1.4s cubic-bezier(0.16,1,0.3,1)`,
          }}
        />
        {n.map((t, n) => (
          <line
            key={n}
            x1={t.x1}
            y1={t.y1}
            x2={t.x2}
            y2={t.y2}
            stroke={n / 12 <= e ? `rgba(185,214,231,0.8)` : `rgba(237,233,224,0.16)`}
            strokeWidth={t.major ? 1.2 : 0.7}
          />
        ))}
        <circle cx={i} cy={a} r="4.4" fill="#b9d6e7" opacity="0.18" />
        <circle cx={i} cy={a} r="1.6" fill="#e7f4fb" />
        <text x="28" y="138" fill="rgba(237,233,224,0.3)" fontSize="6" letterSpacing="1.6">
          6 PM
        </text>
        <text x="196" y="138" fill="rgba(237,233,224,0.3)" fontSize="6" letterSpacing="1.6">
          5 AM
        </text>
      </svg>
      <div className="pointer-events-none absolute inset-x-0 top-[38%] text-center">
        <p className="font-serif text-[clamp(4rem,8vw,6.8rem)] leading-[0.8] text-bone/90">11</p>
        <p className="mt-3 text-[8px] uppercase tracking-[0.3em] text-bone/35">hours a night</p>
      </div>
    </div>
  )
}
