function Ki(e, t, n) {
  ;((Bi[Vi++] = Ui), (Bi[Vi++] = Wi), (Bi[Vi++] = Hi), (Hi = e))
  var r = Ui
  e = Wi
  var i = 32 - Ge(r) - 1
  ;((r &= ~(1 << i)), (n += 1))
  var a = 32 - Ge(t) + i
  if (30 < a) {
    var o = i - (i % 5)
    ;((a = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (i -= o),
      (Ui = (1 << (32 - Ge(t) + i)) | (n << i) | r),
      (Wi = a + e))
  } else ((Ui = (1 << a) | (n << i) | r), (Wi = e))
}
