function $b() {
  let e = Bb(),
    t = Wb(),
    n = Qb()
  return v.useMemo(
    () =>
      ({ children: r }) => {
        let i = Ib(e, !0, (e) => e.type === v.StrictMode) ? v.StrictMode : v.Fragment
        return (0, K.jsx)(i, {
          children: (0, K.jsx)(n, { children: (0, K.jsx)(t, { children: r }) }),
        })
      },
    [e, t, n],
  )
}
