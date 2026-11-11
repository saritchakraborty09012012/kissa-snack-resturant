function R(e) {
  if (!is || e !== lu) return !1
  if (!du) return (L(e), (du = !0), !1)
  var t = e.tag
  if (
    (ml
      ? t !== 3 &&
        t !== 27 &&
        (t !== 5 || (Zc(e.type) && !Xo(e.type, e.memoizedProps))) &&
        uu &&
        fe(e)
      : t !== 3 && (t !== 5 || (Zc(e.type) && !Xo(e.type, e.memoizedProps))) && uu && fe(e),
    L(e),
    t === 13)
  ) {
    if (!is) throw Error(r(316))
    if (((e = e.memoizedState), (e = e === null ? null : e.dehydrated), !e)) throw Error(r(317))
    uu = Bc(e)
  } else if (t === 31) {
    if (((e = e.memoizedState), (e = e === null ? null : e.dehydrated), !e)) throw Error(r(317))
    uu = zc(e)
  } else uu = ml && t === 27 ? Tc(e.type, uu) : lu ? wc(e.stateNode) : null
  return !0
}
