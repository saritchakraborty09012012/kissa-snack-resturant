function nn(e, t, n, r) {
  if (t == null) {
    if (r != null) {
      if (n != null) throw Error(i(92))
      if (pe(r)) {
        if (1 < r.length) throw Error(i(93))
        r = r[0]
      }
      n = r
    }
    ;(n ?? (n = ``), (t = n))
  }
  ;((n = Wt(t)),
    (e.defaultValue = n),
    (r = e.textContent),
    r === n && r !== `` && r !== null && (e.value = r),
    qt(e))
}
