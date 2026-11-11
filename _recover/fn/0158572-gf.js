function gf(e, t, n) {
  var r = e.pingCache
  ;(r !== null && r.delete(t),
    (e.pingedLanes |= e.suspendedLanes & n),
    (e.warmLanes &= ~n),
    Xu === e &&
      (Qu & n) === n &&
      (ad === 4 || (ad === 3 && (Qu & 62914560) === Qu && 300 > Ne() - md)
        ? Yu & 2
          ? (cd |= n)
          : Vd(e, 0)
        : (cd |= n),
      ud === Qu && (ud = 0)),
    Df(e))
}
