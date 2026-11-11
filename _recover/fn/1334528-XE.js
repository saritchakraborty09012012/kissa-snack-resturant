function XE(e, t) {
  let n = Math.floor(e),
    r = Math.floor(t),
    i = e - n,
    a = t - r,
    o = i * i * (3 - 2 * i),
    s = a * a * (3 - 2 * a),
    c = YE(n, r),
    l = YE(n + 1, r),
    u = YE(n, r + 1),
    d = YE(n + 1, r + 1)
  return qE(qE(c, l, o), qE(u, d, o), s)
}
