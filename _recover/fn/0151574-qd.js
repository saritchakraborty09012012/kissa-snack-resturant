function qd(e, t, n) {
  var r = Yu
  Yu |= 2
  var i = Wd(),
    a = Gd()
  ;((Xu !== e || Qu !== t) && ((_d = null), Vd(e, t)), (t = !1))
  var o = ad
  a: do
    try {
      if ($u !== 0 && Zu !== null) {
        var s = Zu,
          c = ed
        switch ($u) {
          case 8:
            ;(Bd(), (o = 6))
            break a
          case 3:
          case 2:
          case 9:
          case 6:
            wo.current === null && (t = !0)
            var l = $u
            if ((($u = 0), (ed = null), $d(e, s, c, l), n && nd)) {
              o = 0
              break a
            }
            break
          default:
            ;((l = $u), ($u = 0), (ed = null), $d(e, s, c, l))
        }
      }
      ;(Jd(), (o = ad))
      break
    } catch (t) {
      Hd(e, t)
    }
  while (1)
  return (
    t && e.shellSuspendCounter++,
    (da = ua = null),
    (Yu = r),
    (L.H = i),
    (L.A = a),
    Zu === null && ((Xu = null), (Qu = 0), _i()),
    o
  )
}
