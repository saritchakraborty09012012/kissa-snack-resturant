function rI({ to: e, suffix: t = ``, duration: n = 1800, className: r = `` }) {
  let { ref: i, inView: a } = eI({ threshold: 0.4 }),
    [o, s] = (0, v.useState)(0),
    c = (0, v.useRef)(!1)
  return (
    (0, v.useEffect)(() => {
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
    (0, K.jsxs)(`span`, { ref: i, className: `tabular-nums ${r}`, children: [o, t] })
  )
}
