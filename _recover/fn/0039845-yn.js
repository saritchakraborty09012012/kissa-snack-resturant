function yn(e, t, n) {
  if (vn) return e(t, n)
  vn = !0
  try {
    return e(t)
  } finally {
    if (
      ((vn = !1),
      (hn !== null || gn !== null) &&
        (zd(), hn && ((t = hn), (e = gn), (gn = hn = null), _n(t), e)))
    )
      for (t = 0; t < e.length; t++) _n(e[t])
  }
}
