function Ht(e, t, n) {
  var i = td,
    a = Nt(),
    o = du
  if (o) {
    if (n === void 0) throw Error(r(407))
    n = n()
  } else n = t()
  var s = !Ul((nd || a).memoizedState, n)
  if (
    (s && ((a.memoizedState = n), (_d = !0)),
    (a = a.queue),
    mn(Gt.bind(null, i, a, e), [e]),
    (e = a.getSnapshot !== t || s || (rd !== null && !!(rd.memoizedState.tag & 1))),
    ln(e ? 9 : 8, { destroy: void 0 }, Wt.bind(null, i, a, n, t), null),
    e)
  ) {
    if (((i.flags |= 2048), qd === null)) throw Error(r(349))
    o || ed & 127 || Ut(i, t, n)
  }
  return n
}
