function p(e, t, n, r, i) {
  return t === null || t.tag !== 7
    ? ((t = no(n, e.mode, r, i)), (t.return = e), t)
    : ((t = o(t, n)), (t.return = e), t)
}
