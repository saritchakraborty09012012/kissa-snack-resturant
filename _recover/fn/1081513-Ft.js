function Ft(e) {
  var t = cd
  return (
    (cd += 1),
    ld === null && (ld = []),
    (e = He(ld, e, t)),
    (t = td),
    (rd === null ? t.memoizedState : rd.next) === null &&
      ((t = t.alternate), (Ro.H = t === null || t.memoizedState === null ? fd : pd)),
    e
  )
}
