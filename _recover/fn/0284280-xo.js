function xo(e, t, n) {
  return e <= t
    ? 0
    : e >= n
      ? 1
      : ((e = (e - t) / (n - t)), e * e * e * (e * (e * 6 - 15) + 10))
}
