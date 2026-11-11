function Fr(e, t) {
  if (Pr(e, t)) return !0
  if (typeof e != `object` || !e || typeof t != `object` || !t) return !1
  var n = Object.keys(e),
    r = Object.keys(t)
  if (n.length !== r.length) return !1
  for (r = 0; r < n.length; r++) {
    var i = n[r]
    if (!ke.call(t, i) || !Pr(e[i], t[i])) return !1
  }
  return !0
}
