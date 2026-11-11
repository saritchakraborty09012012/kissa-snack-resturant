function Yd(e, t) {
  var n = Yu
  Yu |= 2
  var r = Wd(),
    a = Gd()
  Xu !== e || Qu !== t ? ((_d = null), (gd = Ne() + 500), Vd(e, t)) : (nd = et(e, t))
  a: do
    try {
      if ($u !== 0 && Zu !== null) {
        t = Zu
        var o = ed
        b: switch ($u) {
          case 1:
            ;(($u = 0), (ed = null), $d(e, t, o, 1))
            break
          case 2:
          case 9:
            if (qa(o)) {
              ;(($u = 0), (ed = null), Qd(t))
              break
            }
            ;((t = function () {
              ;(($u !== 2 && $u !== 9) || Xu !== e || ($u = 7), Df(e))
            }),
              o.then(t, t))
            break a
          case 3:
            $u = 7
            break a
          case 4:
            $u = 5
            break a
          case 7:
            qa(o) ? (($u = 0), (ed = null), Qd(t)) : (($u = 0), (ed = null), $d(e, t, o, 7))
            break
          case 5:
            var s = null
            switch (Zu.tag) {
              case 26:
                s = Zu.memoizedState
              case 5:
              case 27:
                var c = Zu
                if (s ? Qm(s) : c.stateNode.complete) {
                  ;(($u = 0), (ed = null))
                  var l = c.sibling
                  if (l !== null) Zu = l
                  else {
                    var u = c.return
                    u === null ? (Zu = null) : ((Zu = u), ef(u))
                  }
                  break b
                }
            }
            ;(($u = 0), (ed = null), $d(e, t, o, 5))
            break
          case 6:
            ;(($u = 0), (ed = null), $d(e, t, o, 6))
            break
          case 8:
            ;(Bd(), (ad = 6))
            break a
          default:
            throw Error(i(462))
        }
      }
      Xd()
      break
    } catch (t) {
      Hd(e, t)
    }
  while (1)
  return (
    (da = ua = null),
    (L.H = r),
    (L.A = a),
    (Yu = n),
    Zu === null ? ((Xu = null), (Qu = 0), _i(), ad) : 0
  )
}
