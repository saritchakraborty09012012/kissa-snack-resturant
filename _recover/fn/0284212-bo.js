function bo(e, t, n) {
  return e <= t ? 0 : e >= n ? 1 : ((e = (e - t) / (n - t)), e * e * (3 - 2 * e))
}
