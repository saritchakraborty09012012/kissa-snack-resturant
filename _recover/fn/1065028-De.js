function De(e, t) {
  if (!Du && Eu) {
    Du = !0
    do
      for (var n = !1, r = Cu; r !== null;) {
        if (!t) {
          if (e !== 0) {
            var i = r.pendingLanes
            if (i === 0) var a = 0
            else {
              var o = r.suspendedLanes,
                s = r.pingedLanes
              ;((a = (1 << (31 - Cl(42 | e) + 1)) - 1),
                (a &= i & ~(o & ~s)),
                (a = a & 201326741 ? (a & 201326741) | 1 : a ? a | 2 : 0))
            }
            a !== 0 && ((n = !0), Me(r, a))
          } else
            ((a = Yd),
              (a = g(
                r,
                r === qd ? a : 0,
                r.cancelPendingCommit !== null || r.timeoutHandle !== es,
              )),
              !(a & 3) || _(r, a) || ((n = !0), Me(r, a)))
        }
        r = r.next
      }
    while (n)
    Du = !1
  }
}
