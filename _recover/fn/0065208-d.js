function d(e, t, n, r, i) {
  return t === null || t.tag !== 7
    ? ((t = Ai(n, e.mode, r, i)), (t.return = e), t)
    : ((t = a(t, n)), (t.return = e), t)
}
