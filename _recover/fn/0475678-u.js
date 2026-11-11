function u() {
  for (let e = 0; e < a.length; e += 6) {
    let t = a[e + 0],
      n = a[e + 2],
      r = a[e + 4]
    Math.max(t, n, r) > 0.9 &&
      Math.min(t, n, r) < 0.1 &&
      (t < 0.2 && (a[e + 0] += 1), n < 0.2 && (a[e + 2] += 1), r < 0.2 && (a[e + 4] += 1))
  }
}
