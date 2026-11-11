function Sh(e, t, n, r) {
  if (yh) {
    var i = Ch(r)
    if (i === null) (Jf(e, t, r, wh, n), Fh(e, r))
    else if (Lh(i, e, t, n, r)) r.stopPropagation()
    else if ((Fh(e, r), t & 4 && -1 < Ph.indexOf(e))) {
      for (; i !== null;) {
        var a = Et(i)
        if (a !== null)
          switch (a.tag) {
            case 3:
              if (((a = a.stateNode), a.current.memoizedState.isDehydrated)) {
                var o = Qe(a.pendingLanes)
                if (o !== 0) {
                  var s = a
                  for (s.pendingLanes |= 2, s.entangledLanes |= 2; o;) {
                    var c = 1 << (31 - Ge(o))
                    ;((s.entanglements[1] |= c), (o &= ~c))
                  }
                  ;(Df(a), !(Yu & 6) && ((gd = Ne() + 500), Of(0, !1)))
                }
              }
              break
            case 31:
            case 13:
              ;((s = bi(a, 2)), s !== null && Pd(s, a, 2), zd(), gh(a, 2))
          }
        if (((a = Ch(r)), a === null && Jf(e, t, r, wh, n), a === i)) break
        i = a
      }
      i !== null && r.stopPropagation()
    } else Jf(e, t, r, null, n)
  }
}
