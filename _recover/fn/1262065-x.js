function x(e, t, n, r, i, a, o, s, c, l) {
  if (e == t) {
    ;(r < 8 && (y(n, r, i, o), (n = v.c), (r = v.lc)), (r -= 8))
    var u = n >> r,
      u = new Uint8Array([u])[0]
    if (c.value + u > l) return !1
    for (var d = s[c.value - 1]; u-- > 0;) s[c.value++] = d
  } else if (c.value < l) s[c.value++] = e
  else return !1
  ;((b.c = n), (b.lc = r))
}
