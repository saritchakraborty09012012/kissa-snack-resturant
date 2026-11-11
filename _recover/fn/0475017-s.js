function s(e, t, n, r) {
  let i = r + 1,
    a = []
  for (let r = 0; r <= i; r++) {
    a[r] = []
    let o = e.clone().lerp(n, r / i),
      s = t.clone().lerp(n, r / i),
      c = i - r
    for (let e = 0; e <= c; e++)
      e === 0 && r === i ? (a[r][e] = o) : (a[r][e] = o.clone().lerp(s, e / c))
  }
  for (let e = 0; e < i; e++)
    for (let t = 0; t < 2 * (i - e) - 1; t++) {
      let n = Math.floor(t / 2)
      t % 2 == 0
        ? (d(a[e][n + 1]), d(a[e + 1][n]), d(a[e][n]))
        : (d(a[e][n + 1]), d(a[e + 1][n + 1]), d(a[e + 1][n]))
    }
}
