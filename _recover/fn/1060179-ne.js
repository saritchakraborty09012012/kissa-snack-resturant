function ne(e, t) {
  if (typeof e == `object` && e) {
    var n = Yl.get(e)
    return n === void 0 ? ((t = { value: e, source: t, stack: I(t) }), Yl.set(e, t), t) : n
  }
  return { value: e, source: t, stack: I(t) }
}
