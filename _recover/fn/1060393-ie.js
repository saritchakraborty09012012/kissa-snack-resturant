function ie(e, t, n) {
  ;((eu[tu++] = ru), (eu[tu++] = iu), (eu[tu++] = nu), (nu = e))
  var r = ru
  e = iu
  var i = 32 - Cl(r) - 1
  ;((r &= ~(1 << i)), (n += 1))
  var a = 32 - Cl(t) + i
  if (30 < a) {
    var o = i - (i % 5)
    ;((a = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (i -= o),
      (ru = (1 << (32 - Cl(t) + i)) | (n << i) | r),
      (iu = a + e))
  } else ((ru = (1 << a) | (n << i) | r), (iu = e))
}
