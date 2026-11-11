function ke() {
  Eu = Tu = !1
  var e = 0
  Ou !== 0 && us() && (e = Ou)
  for (var t = Nl(), n = null, r = Cu; r !== null;) {
    var i = r.next,
      a = Ae(r, t)
    ;(a === 0
      ? ((r.next = null), n === null ? (Cu = i) : (n.next = i), i === null && (wu = n))
      : ((n = r), (e !== 0 || a & 3) && (Eu = !0)),
      (r = i))
  }
  ;((_f !== 0 && _f !== 5) || De(e, !1), Ou !== 0 && (Ou = 0))
}
