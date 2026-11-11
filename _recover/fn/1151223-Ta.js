function Ta(e, t, n) {
  var r = Kd
  Kd |= 2
  var i = Sa(),
    a = Ca()
  ;((qd !== e || Yd !== t) && ((hf = null), ya(e, t)), (t = !1))
  var o = nf
  e: do
    try {
      if (Xd !== 0 && Jd !== null) {
        var s = Jd,
          c = Zd
        switch (Xd) {
          case 8:
            ;(va(), (o = 6))
            break e
          case 3:
          case 2:
          case 9:
          case 6:
            Zu.current === null && (t = !0)
            var l = Xd
            if (((Xd = 0), (Zd = null), ja(e, s, c, l), n && $d)) {
              o = 0
              break e
            }
            break
          default:
            ;((l = Xd), (Xd = 0), (Zd = null), ja(e, s, c, l))
        }
      }
      ;(Ea(), (o = nf))
      break
    } catch (t) {
      ba(e, t)
    }
  while (1)
  return (
    t && e.shellSuspendCounter++,
    (_u = gu = null),
    (Kd = r),
    (Ro.H = i),
    (Ro.A = a),
    Jd === null && ((qd = null), (Yd = 0), Xe()),
    o
  )
}
