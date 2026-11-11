function c(e, n) {
  for (var r = 0, i = 0; i < t; ++i) (i == 0 || e[i >> 3] & (1 << (i & 7))) && (n[r++] = i)
  for (var a = r - 1; r < t;) n[r++] = 0
  return a
}
