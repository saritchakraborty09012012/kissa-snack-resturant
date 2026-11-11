function pf(e, t, n = 2) {
  let r = t && t.length,
    i = r ? t[0] * n : e.length,
    a = mf(e, 0, i, n, !0),
    o = []
  if (!a || a.next === a.prev) return o
  let s, c, l
  if ((r && (a = xf(e, t, a, n)), e.length > 80 * n)) {
    ;((s = e[0]), (c = e[1]))
    let t = s,
      r = c
    for (let a = n; a < i; a += n) {
      let n = e[a],
        i = e[a + 1]
      ;(n < s && (s = n), i < c && (c = i), n > t && (t = n), i > r && (r = i))
    }
    ;((l = Math.max(t - s, r - c)), (l = l === 0 ? 0 : 32767 / l))
  }
  return (gf(a, o, n, s, c, l, 0), o)
}
