function g(a, s, c, l) {
  if (c == null) throw Error(i(151))
  for (
    var u = null, d = null, h = s, g = (s = 0), _ = null, v = c.next();
    h !== null && !v.done;
    g++, v = c.next()
  ) {
    h.index > g ? ((_ = h), (h = null)) : (_ = h.sibling)
    var y = p(a, h, v.value, l)
    if (y === null) {
      h === null && (h = _)
      break
    }
    ;(e && h && y.alternate === null && t(a, h),
      (s = o(y, s, g)),
      d === null ? (u = y) : (d.sibling = y),
      (d = y),
      (h = _))
  }
  if (v.done) return (n(a, h), Qi && Gi(a, g), u)
  if (h === null) {
    for (; !v.done; g++, v = c.next())
      ((v = f(a, v.value, l)),
        v !== null && ((s = o(v, s, g)), d === null ? (u = v) : (d.sibling = v), (d = v)))
    return (Qi && Gi(a, g), u)
  }
  for (h = r(h); !v.done; g++, v = c.next())
    ((v = m(h, a, g, v.value, l)),
      v !== null &&
        (e && ((_ = v.alternate), _ !== null && h.delete(_.key === null ? g : _.key)),
        (s = o(v, s, g)),
        d === null ? (u = v) : (d.sibling = v),
        (d = v)))
  return (
    e &&
      h.forEach(function (e) {
        return t(a, e)
      }),
    Qi && Gi(a, g),
    u
  )
}
