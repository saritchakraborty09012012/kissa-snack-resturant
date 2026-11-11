function $p(e, t, n, r, i) {
  var a = Tt(i)
  if (e & Node.DOCUMENT_POSITION_CONTAINED_BY) {
    if ((n = !!a))
      a: {
        for (; a !== null;) {
          if (a.tag === 7 && (a === t || a.alternate === t)) {
            n = !0
            break a
          }
          a = a.return
        }
        n = !1
      }
    return n
  }
  if (e & Node.DOCUMENT_POSITION_CONTAINS) {
    if (a === null)
      return ((a = i.ownerDocument), i === a || i === a.documentElement || i === a.body)
    a: {
      for (a = t, t = g(t); a !== null;) {
        if (!((a.tag !== 5 && a.tag !== 3 && a.tag !== 27) || (a !== t && a.alternate !== t))) {
          a = !0
          break a
        }
        a = a.return
      }
      a = !1
    }
    return a
  }
  return e & Node.DOCUMENT_POSITION_PRECEDING
    ? ((t = !!a) &&
        !(t = a === n) &&
        ((t = E(n, a, T)),
        t === null ? (t = !1) : (m(t, !0, C, a, n), (a = x), (x = null), (t = a !== null))),
      t)
    : e & Node.DOCUMENT_POSITION_FOLLOWING
      ? ((t = !!a) &&
          !(t = a === r) &&
          ((t = E(r, a, T)),
          t === null
            ? (t = !1)
            : (m(t, !0, w, a, r), (a = x), (S = x = null), (t = a !== null))),
        t)
      : !1
}
