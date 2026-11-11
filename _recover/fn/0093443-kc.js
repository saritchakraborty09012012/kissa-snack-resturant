function kc(e, t, n, r, i) {
  if (e === null) {
    var a = n.type
    return typeof a == `function` && !Ei(a) && a.defaultProps === void 0 && n.compare === null
      ? ((t.tag = 15), (t.type = a), Ac(e, t, a, r, i))
      : ((e = ki(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e))
  }
  if (((a = e.child), !rl(e, i))) {
    var o = a.memoizedProps
    if (((n = n.compare), (n = n === null ? Fr : n), n(o, r) && e.ref === t.ref))
      return nl(e, t, i)
  }
  return ((t.flags |= 1), (e = Di(a, r)), (e.ref = t.ref), (e.return = t), (t.child = e))
}
