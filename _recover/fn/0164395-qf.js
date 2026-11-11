function qf(e, t, n, r) {
  switch (Eh(t)) {
    case 2:
      var i = bh
      break
    case 8:
      i = xh
      break
    default:
      i = Sh
  }
  ;((n = i.bind(null, t, n, e)),
    (i = void 0),
    !Sn || (t !== `touchstart` && t !== `touchmove` && t !== `wheel`) || (i = !0),
    r
      ? i === void 0
        ? e.addEventListener(t, n, !0)
        : e.addEventListener(t, n, { capture: !0, passive: i })
      : i === void 0
        ? e.addEventListener(t, n, !1)
        : e.addEventListener(t, n, { passive: i }))
}
