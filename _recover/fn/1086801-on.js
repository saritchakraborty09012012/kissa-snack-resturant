function on(e, t, n) {
  if (
    ((t = Bt(e, t, nn)[0]),
    (e = zt(Rt)[0]),
    typeof t == `object` && t && typeof t.then == `function`)
  )
    try {
      var r = Ft(t)
    } catch (e) {
      throw e === Fu ? Lu : e
    }
  else r = t
  t = Nt()
  var i = t.queue,
    a = i.dispatch
  return (
    n !== t.memoizedState &&
      ((td.flags |= 2048), ln(9, { destroy: void 0 }, sn.bind(null, i, n), null)),
    [r, a, e]
  )
}
