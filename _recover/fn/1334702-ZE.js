function ZE(e, t, n = 4) {
  let r = 0,
    i = 0.5,
    a = 1
  for (let o = 0; o < n; o++) ((r += XE(e * a, t * a) * i), (a *= 2.03), (i *= 0.5))
  return r
}
