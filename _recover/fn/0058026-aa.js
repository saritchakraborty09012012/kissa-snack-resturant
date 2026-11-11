function aa(e) {
  if (e !== Xi) return !1
  if (!Qi) return (ia(e), (Qi = !0), !1)
  var t = e.tag,
    n
  if (
    ((n = t !== 3 && t !== 27) &&
      ((n = t === 5) &&
        ((n = e.type), (n = n === `form` || n === `button` || gp(e.type, e.memoizedProps))),
      (n = !n)),
    n && Zi && na(e),
    ia(e),
    t === 13)
  ) {
    if (((e = e.memoizedState), (e = e === null ? null : e.dehydrated), !e)) throw Error(i(317))
    Zi = mm(e)
  } else if (t === 31) {
    if (((e = e.memoizedState), (e = e === null ? null : e.dehydrated), !e)) throw Error(i(317))
    Zi = mm(e)
  } else
    t === 27
      ? ((t = Zi), Tp(e.type) ? ((e = pm), (pm = null), (Zi = e)) : (Zi = t))
      : (Zi = Xi ? fm(e.stateNode.nextSibling) : null)
  return !0
}
