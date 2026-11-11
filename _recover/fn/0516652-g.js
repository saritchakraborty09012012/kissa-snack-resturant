function g() {
  for (let e = 1; e <= t; e++)
    for (let t = 1; t <= r; t++) {
      let n = (r + 1) * (e - 1) + (t - 1),
        i = (r + 1) * e + (t - 1),
        a = (r + 1) * e + t,
        o = (r + 1) * (e - 1) + t
      ;(p.push(n, i, o), p.push(i, a, o))
    }
}
