function Gd(e, t, n, r, i) {
  let a = (r - t) * 0.5,
    o = (i - n) * 0.5,
    s = e * e,
    c = e * s
  return (2 * n - 2 * r + a + o) * c + (-3 * n + 3 * r - 2 * a - o) * s + a * e + n
}
