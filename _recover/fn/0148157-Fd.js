function Fd(e, t, n) {
  if (Yu & 6) throw Error(i(327))
  var r = (!n && !(t & 127) && (t & e.expiredLanes) === 0) || et(e, t),
    a = r ? Yd(e, t) : qd(e, t, !0),
    o = r
  do {
    if (a === 0) {
      nd && !r && Rd(e, t, 0, !1)
      break
    }
    if (((n = e.current.alternate), o && !Ld(n))) ((a = qd(e, t, !1)), (o = !1))
    else {
      if (a === 2) {
        if (((o = t), e.errorRecoveryDisabledLanes & o)) var s = 0
        else
          ((s = e.pendingLanes & -536870913),
            (s = s === 0 ? (s & 536870912 ? 536870912 : 0) : s))
        if (s !== 0) {
          t = s
          a: {
            var c = e
            a = dd
            var l = c.current.memoizedState.isDehydrated
            if ((l && (Vd(c, s).flags |= 256), (s = qd(c, s, !1)), s !== 2 && s !== 6)) {
              if (rd && !l) {
                ;((c.errorRecoveryDisabledLanes |= o), (sd |= o), (a = 4))
                break a
              }
              ;((o = fd),
                (fd = a),
                o !== null && (fd === null ? (fd = o) : fd.push.apply(fd, o)))
            }
            a = s
          }
          if (((o = !1), a !== 2)) continue
        }
      }
      if (a === 1) {
        ;(Vd(e, 0), Rd(e, t, 0, !0))
        break
      }
      a: {
        switch (((r = e), (o = a), o)) {
          case 0:
          case 1:
            throw Error(i(345))
          case 4:
            if ((t & 4194048) !== t && (t & 62914560) !== t) break
          case 6:
            Rd(r, t, ld, !td)
            break a
          case 2:
            fd = null
            break
          case 3:
          case 5:
            break
          default:
            throw Error(i(329))
        }
        if ((t & 62914560) === t && ((a = md + 300 - Ne()), 10 < a)) {
          if ((Rd(r, t, ld, !td), $e(r, 0, !0) !== 0)) break a
          ;((Sd = t),
            (r.timeoutHandle = yp(
              Id.bind(null, r, n, fd, _d, pd, t, ld, sd, ud, td, o, `Throttled`, -0, 0),
              a,
            )))
          break a
        }
        Id(r, n, fd, _d, pd, t, ld, sd, ud, td, o, null, -0, 0)
      }
      break
    }
  } while (1)
  Df(e)
}
