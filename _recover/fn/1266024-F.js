function F(e, t, n) {
  for (var r, i = 1; i < 64;)
    ((r = t[e.value]),
      r == 65280 ? (i = 64) : r >> 8 == 255 ? (i += r & 255) : ((n[i] = r), i++),
      e.value++)
}
