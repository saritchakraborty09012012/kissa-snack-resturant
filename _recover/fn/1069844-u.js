function u(e, t, n, r) {
  return t === null || t.tag !== 6
    ? ((t = ro(n, e.mode, r)), (t.return = e), t)
    : ((t = o(t, n)), (t.return = e), t)
}
