function SplitLines({
  lines: e,
  className: t = ``,
  lineClassName: n = ``,
  delay: r = 0,
  step: i = 110,
}) {
  let { ref: a, inView: o } = useInView()
  return (
    <span ref={a} className={t}>
      {e.map((e, t) => (
        <span key={`${e}-${t}`} className="reveal-wrap">
          <span
            className={`reveal-line ${o ? `in` : ``} ${n}`}
            style={{
              transitionDelay: `${r + t * i}ms`,
            }}
          >
            {e}
          </span>
        </span>
      ))}
    </span>
  )
}
