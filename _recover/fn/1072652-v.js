function v(t, o, c, l) {
  if (c == null) throw Error(r(151))
  for (
    var u = null, d = null, f = o, p = (o = 0), _ = null, v = c.next();
    f !== null && !v.done;
    p++, v = c.next()
  ) {
    f.index > p ? ((_ = f), (f = null)) : (_ = f.sibling)
    var y = h(t, f, v.value, l)
    if (y === null) {
      f === null && (f = _)
      break
    }
    ;(e && f && y.alternate === null && n(t, f),
      (o = s(y, o, p)),
      d === null ? (u = y) : (d.sibling = y),
      (d = y),
      (f = _))
  }
  if (v.done) return (i(t, f), du && re(t, p), u)
  if (f === null) {
    for (; !v.done; p++, v = c.next())
      ((v = m(t, v.value, l)),
        v !== null && ((o = s(v, o, p)), d === null ? (u = v) : (d.sibling = v), (d = v)))
    return (du && re(t, p), u)
  }
  for (f = a(f); !v.done; p++, v = c.next())
    ((v = g(f, t, p, v.value, l)),
      v !== null &&
        (e && ((_ = v.alternate), _ !== null && f.delete(_.key === null ? p : _.key)),
        (o = s(v, o, p)),
        d === null ? (u = v) : (d.sibling = v),
        (d = v)))
  return (
    e &&
      f.forEach(function (e) {
        return n(t, e)
      }),
    du && re(t, p),
    u
  )
}
