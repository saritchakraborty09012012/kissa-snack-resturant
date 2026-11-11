function Da(e, t) {
  var n = Kd
  Kd |= 2
  var i = Sa(),
    a = Ca()
  qd !== e || Yd !== t ? ((hf = null), (mf = Nl() + 500), ya(e, t)) : ($d = _(e, t))
  e: do
    try {
      if (Xd !== 0 && Jd !== null) {
        t = Jd
        var o = Zd
        n: switch (Xd) {
          case 1:
            ;((Xd = 0), (Zd = null), ja(e, t, o, 1))
            break
          case 2:
          case 9:
            if (Ve(o)) {
              ;((Xd = 0), (Zd = null), Aa(t))
              break
            }
            ;((t = function () {
              ;((Xd !== 2 && Xd !== 9) || qd !== e || (Xd = 7), Ee(e))
            }),
              o.then(t, t))
            break e
          case 3:
            Xd = 7
            break e
          case 4:
            Xd = 5
            break e
          case 7:
            Ve(o) ? ((Xd = 0), (Zd = null), Aa(t)) : ((Xd = 0), (Zd = null), ja(e, t, o, 7))
            break
          case 5:
            var s = null
            switch (Jd.tag) {
              case 26:
                s = Jd.memoizedState
              case 5:
              case 27:
                var c = Jd,
                  l = c.type,
                  u = c.pendingProps
                if (s ? fl(s) : hs(c.stateNode, l, u)) {
                  ;((Xd = 0), (Zd = null))
                  var d = c.sibling
                  if (d !== null) Jd = d
                  else {
                    var f = c.return
                    f === null ? (Jd = null) : ((Jd = f), Ma(f))
                  }
                  break n
                }
            }
            ;((Xd = 0), (Zd = null), ja(e, t, o, 5))
            break
          case 6:
            ;((Xd = 0), (Zd = null), ja(e, t, o, 6))
            break
          case 8:
            ;(va(), (nf = 6))
            break e
          default:
            throw Error(r(462))
        }
      }
      Oa()
      break
    } catch (t) {
      ba(e, t)
    }
  while (1)
  return (
    (_u = gu = null),
    (Ro.H = i),
    (Ro.A = a),
    (Kd = n),
    Jd === null ? ((qd = null), (Yd = 0), Xe(), nf) : 0
  )
}
