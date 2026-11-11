function Qt(e, t, n, r, i, a, o, s) {
  if (
    (a != null &&
      typeof a != `function` &&
      typeof a != `symbol` &&
      typeof a != `boolean` &&
      (e.type = a),
    t != null || n != null)
  ) {
    if (!((a !== `submit` && a !== `reset`) || t != null)) {
      qt(e)
      return
    }
    ;((n = n == null ? `` : `` + Wt(n)),
      (t = t == null ? n : `` + Wt(t)),
      s || t === e.value || (e.value = t),
      (e.defaultValue = t))
  }
  ;((r = r ?? i),
    (r = typeof r != `function` && typeof r != `symbol` && !!r),
    (e.checked = s ? e.checked : !!r),
    (e.defaultChecked = !!r),
    o != null &&
      typeof o != `function` &&
      typeof o != `symbol` &&
      typeof o != `boolean` &&
      (e.name = o),
    qt(e))
}
