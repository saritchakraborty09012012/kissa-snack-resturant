function Fa(e, t, n, r, i, a, o) {
  var s = t.lanes | t.childLanes
  if (
    ((xf = s),
    (s |= Ku),
    w(e, n, s, r, i, a),
    (Tf = null),
    (n & 335544064) === n ? ((Ef = we(e)), (r = 10262)) : ((Ef = null), (r = 10256)),
    (t.subtreeFlags & r) !== 0 || (t.flags & r) !== 0
      ? ((e.callbackNode = null),
        (e.callbackPriority = 0),
        Za(Il, function () {
          return (Ua(), null)
        }))
      : ((e.callbackNode = null), (e.callbackPriority = 0)),
    (bd = !1),
    (r = !!(t.flags & 13878)),
    t.subtreeFlags & 13878 || r)
  ) {
    ;((r = Ro.T), (Ro.T = null), (i = cs()), ss(2), (a = Kd), (Kd |= 4))
    try {
      Ci(e, t, n)
    } finally {
      ;((Kd = a), ss(i), (Ro.T = r))
    }
  }
  ;((_f = 1),
    bd
      ? (wf = nc(o, e.containerInfo, Ef, Ra, za, La, Ba, Ua, Ia, null, null))
      : (Ra(), za(), Ba()))
}
