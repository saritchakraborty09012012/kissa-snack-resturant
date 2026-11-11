function Af() {
  wf = Cf = !1
  var e = 0
  Ef !== 0 && vp() && (e = Ef)
  for (var t = Ne(), n = null, r = xf; r !== null;) {
    var i = r.next,
      a = jf(r, t)
    ;(a === 0
      ? ((r.next = null), n === null ? (xf = i) : (n.next = i), i === null && (Sf = n))
      : ((n = r), (e !== 0 || a & 3) && (wf = !0)),
      (r = i))
  }
  ;((yd !== 0 && yd !== 5) || Of(e, !1), Ef !== 0 && (Ef = 0))
}
