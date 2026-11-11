function c(e, t, a, o, c, l, u) {
  u.reversedDepth === !0 && (c = -c)
  let d = s(e, t, a, o, c, l)
  a.transmission > 0 ? r.push(d) : a.transparent === !0 ? i.push(d) : n.push(d)
}
