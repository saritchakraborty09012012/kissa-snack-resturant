function qa(e, t, n) {
  var r = e.pingCache
  ;(r !== null && r.delete(t),
    (e.pingedLanes |= e.suspendedLanes & n),
    (e.warmLanes &= ~n),
    qd === e &&
      (Yd & n) === n &&
      ((nf === 4 || (nf === 3 && (Yd & 62914560) === Yd && 300 > Nl() - ff)) && !(Kd & 2)
        ? ya(e, 0)
        : (of |= n),
      cf === Yd && (cf = 0)),
    Ee(e))
}
