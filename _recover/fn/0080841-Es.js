function Es(e, t, n) {
  if (
    ((t = ss(e, t, Cs)[0]),
    (e = os(as)[0]),
    typeof t == `object` && t && typeof t.then == `function`)
  )
    try {
      var r = ns(t)
    } catch (e) {
      throw e === Ua ? Ga : e
    }
  else r = t
  t = es()
  var i = t.queue,
    a = i.dispatch
  return (
    n !== t.memoizedState &&
      ((J.flags |= 2048), ks(9, { destroy: void 0 }, Ds.bind(null, i, n), null)),
    [r, a, e]
  )
}
