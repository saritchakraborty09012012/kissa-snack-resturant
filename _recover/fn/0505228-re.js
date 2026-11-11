function re(e, t) {
  let n = e.length
  for (; --n >= 0;) {
    let r = n,
      i = n - 1
    i < 0 && (i = e.length - 1)
    for (let e = 0, n = s + p * 2; e < n; e++) {
      let n = k * e,
        a = k * (e + 1)
      oe(t + r + n, t + i + n, t + i + a, t + r + a)
    }
  }
}
