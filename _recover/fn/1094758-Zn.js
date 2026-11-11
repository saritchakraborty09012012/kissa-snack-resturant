function Zn(e, t, n, r, i) {
  if (e === null) {
    var a = n.type
    return typeof a == `function` && !$a(a) && a.defaultProps === void 0 && n.compare === null
      ? ((t.tag = 15), (t.type = a), Qn(e, t, a, r, i))
      : ((e = q(n.type, null, r, t, t.mode, i)), (e.ref = t.ref), (e.return = t), (t.child = e))
  }
  if (((a = e.child), !Cr(e, i))) {
    var o = a.memoizedProps
    if (((n = n.compare), (n = n === null ? Be : n), n(o, r) && e.ref === t.ref))
      return Sr(e, t, i)
  }
  return ((t.flags |= 1), (e = eo(a, r)), (e.ref = t.ref), (e.return = t), (t.child = e))
}
