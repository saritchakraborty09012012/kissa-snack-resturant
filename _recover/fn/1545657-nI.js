function nI({
  lines: e,
  className: t = ``,
  lineClassName: n = ``,
  delay: r = 0,
  step: i = 110,
}) {
  let { ref: a, inView: o } = eI()
  return (0, K.jsx)(`span`, {
    ref: a,
    className: t,
    children: e.map((e, t) =>
      (0, K.jsx)(
        `span`,
        {
          className: `reveal-wrap`,
          children: (0, K.jsx)(`span`, {
            className: `reveal-line ${o ? `in` : ``} ${n}`,
            style: { transitionDelay: `${r + t * i}ms` },
            children: e,
          }),
        },
        `${e}-${t}`,
      ),
    ),
  })
}
