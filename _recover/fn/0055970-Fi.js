function Fi(e, t) {
  if (typeof e == `object` && e) {
    var n = Pi.get(e)
    return n === void 0 ? ((t = { value: e, source: t, stack: Oe(t) }), Pi.set(e, t), t) : n
  }
  return { value: e, source: t, stack: Oe(t) }
}
var Ii = [],
  Li = 0,
  Ri = null,
  zi = 0,
  Bi = [],
  Vi = 0,
  Hi = null,
  Ui = 1,
  Wi = ``
