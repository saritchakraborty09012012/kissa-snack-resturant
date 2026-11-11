function d(e, t, n, r, i) {
  for (; n < e;) ((t = (t << 8) | me(r, i)), (n += 8))
  ;((n -= e), (u.l = (t >> n) & ((1 << e) - 1)), (u.c = t), (u.lc = n))
}
let f = Array(59)
