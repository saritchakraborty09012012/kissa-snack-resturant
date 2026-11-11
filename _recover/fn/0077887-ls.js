function ls(e, t, n) {
  var r = J,
    a = es(),
    o = Qi
  if (o) {
    if (n === void 0) throw Error(i(407))
    n = n()
  } else n = t()
  var s = !Pr((Io || a).memoizedState, n)
  if (
    (s && ((a.memoizedState = n), (Ec = !0)),
    (a = a.queue),
    Ps(fs.bind(null, r, a, e), [e]),
    (e = a.getSnapshot !== t || s || (Y !== null && !!(Y.memoizedState.tag & 1))),
    ks(e ? 9 : 8, { destroy: void 0 }, ds.bind(null, r, a, n, t), null),
    e)
  ) {
    if (((r.flags |= 2048), Xu === null)) throw Error(i(349))
    o || Fo & 127 || us(r, t, n)
  }
  return n
}
