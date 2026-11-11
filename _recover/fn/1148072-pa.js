function pa(e, t, n) {
  if (Kd & 6) throw Error(r(327))
  var i = (!n && !(t & 127) && (t & e.expiredLanes) === 0) || _(e, t),
    a = i ? Da(e, t) : Ta(e, t, !0),
    o = i
  do {
    if (a === 0) {
      $d && !i && ga(e, t, 0, !1)
      break
    }
    if (((n = e.current.alternate), o && !ha(n))) ((a = Ta(e, t, !1)), (o = !1))
    else {
      if (a === 2) {
        if (((o = t), e.errorRecoveryDisabledLanes & o)) var s = 0
        else
          ((s = e.pendingLanes & -536870913),
            (s = s === 0 ? (s & 536870912 ? 536870912 : 0) : s))
        if (s !== 0) {
          t = s
          e: {
            var c = e
            a = lf
            var l = is && c.current.memoizedState.isDehydrated
            if ((l && (ya(c, s).flags |= 256), (s = Ta(c, s, !1)), s !== 2 && s !== 6)) {
              if (ef && !l) {
                ;((c.errorRecoveryDisabledLanes |= o), (af |= o), (a = 4))
                break e
              }
              ;((o = uf),
                (uf = a),
                o !== null && (uf === null ? (uf = o) : uf.push.apply(uf, o)))
            }
            a = s
          }
          if (((o = !1), a !== 2)) continue
        }
      }
      if (a === 1) {
        ;(ya(e, 0), ga(e, t, 0, !0))
        break
      }
      e: {
        switch (((i = e), (o = a), o)) {
          case 0:
          case 1:
            throw Error(r(345))
          case 4:
            if ((t & 4194048) !== t && (t & 62914560) !== t) break
          case 6:
            ga(i, t, sf, !Qd)
            break e
          case 2:
            uf = null
            break
          case 3:
          case 5:
            break
          default:
            throw Error(r(329))
        }
        if ((t & 62914560) === t && ((a = ff + 300 - Nl()), 10 < a)) {
          if ((ga(i, t, sf, !Qd), g(i, 0, !0) !== 0)) break e
          ;((bf = t),
            (i.timeoutHandle = Qo(
              ma.bind(null, i, n, uf, hf, df, t, sf, af, cf, Qd, o, `Throttled`, -0, 0),
              a,
            )))
          break e
        }
        ma(i, n, uf, hf, df, t, sf, af, cf, Qd, o, null, -0, 0)
      }
      break
    }
  } while (1)
  Ee(e)
}
