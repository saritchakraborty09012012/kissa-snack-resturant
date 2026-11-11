function Of(e, t) {
  if (!Tf && wf) {
    Tf = !0
    do
      for (var n = !1, r = xf; r !== null;) {
        if (!t) {
          if (e !== 0) {
            var i = r.pendingLanes
            if (i === 0) var a = 0
            else {
              var o = r.suspendedLanes,
                s = r.pingedLanes
              ;((a = (1 << (31 - Ge(42 | e) + 1)) - 1),
                (a &= i & ~(o & ~s)),
                (a = a & 201326741 ? (a & 201326741) | 1 : a ? a | 2 : 0))
            }
            a !== 0 && ((n = !0), Nf(r, a))
          } else
            ((a = Qu),
              (a = $e(
                r,
                r === Xu ? a : 0,
                r.cancelPendingCommit !== null || r.timeoutHandle !== -1,
              )),
              !(a & 3) || et(r, a) || ((n = !0), Nf(r, a)))
        }
        r = r.next
      }
    while (n)
    Tf = !1
  }
}
