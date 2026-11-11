function Nc(e, t, n, r, i) {
  var a = Ba()
  return (
    (a = a === null ? null : { parent: Ta._currentValue, pool: a }),
    (t.memoizedState = { baseLanes: n, cachePool: a }),
    e !== null && Va(t, null),
    So(),
    Oo(t),
    e !== null && ga(e, t, r, !0),
    (t.childLanes = i),
    null
  )
}
