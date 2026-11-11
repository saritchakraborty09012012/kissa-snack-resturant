function tI({ children: e, className: t = ``, delay: n = 0, as: r = `div`, ...i }) {
  let { ref: a, inView: o } = eI()
  return (0, K.jsx)(r, {
    ref: a,
    style: { transitionDelay: `${n}ms` },
    className: `fade-up ${o ? `in` : ``} ${t}`,
    ...i,
    children: e,
  })
}
