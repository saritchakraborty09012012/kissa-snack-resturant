function kk(e, t, n) {
  let r = t.split(`-`),
    i = e
  for (let e = 0; e < r.length - 1; e++) {
    if (i == null) return
    i = i[r[e]]
  }
  i != null && (i[r[r.length - 1]] = n)
}
