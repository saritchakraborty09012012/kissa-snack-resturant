function xf(e, t, n, r) {
  let i = []
  for (let n = 0, a = t.length; n < a; n++) {
    let o = mf(e, t[n] * r, n < a - 1 ? t[n + 1] * r : e.length, r, !1)
    ;(o === o.next && (o.steiner = !0), i.push(kf(o)))
  }
  i.sort(Sf)
  for (let e = 0; e < i.length; e++) n = Cf(i[e], n)
  return n
}
