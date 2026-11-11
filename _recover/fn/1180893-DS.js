function DS(e, t, n) {
  var r
  return (
    (e = bS(yS(e)) ? e : e.replace(TS, ``)),
    ES(e, t),
    e === `primitive` && (r = t.object) != null && r.__r3f && delete t.object.__r3f,
    hx(t.object, n, e, t)
  )
}
