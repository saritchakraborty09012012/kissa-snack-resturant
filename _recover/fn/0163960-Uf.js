function Uf(e, t) {
  var n = t[vt]
  n === void 0 && (n = t[vt] = new Set())
  var r = e + `__bubble`
  n.has(r) || (qf(t, e, 2, !1), n.add(r))
}
