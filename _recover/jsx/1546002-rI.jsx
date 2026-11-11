function Counter({ to: e, suffix: t = ``, duration: n = 1800, className: r = `` }) {
  let { ref: i, inView: a } = useInView({
      threshold: 0.4,
    }),
    [o, s] = (0, React.useState)(0),
    c = (0, React.useRef)(!1)
  return (
    (0, React.useEffect)(() => {
      if (!a || c.current) return
      c.current = !0
      let t = 0,
        r = performance.now(),
        i = (a) => {
          let o = Math.min(1, (a - r) / n),
            c = 1 - (1 - o) ** 3
          ;(s(Math.round(c * e)), o < 1 && (t = requestAnimationFrame(i)))
        }
      return ((t = requestAnimationFrame(i)), () => cancelAnimationFrame(t))
    }, [a, e, n]),
    (
      <span ref={i} className={`tabular-nums ${r}`}>
        {o}
        {t}
      </span>
    )
  )
}
