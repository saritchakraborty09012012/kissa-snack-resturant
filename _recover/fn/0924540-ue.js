function ue(t, n) {
  let r = m,
    i = !1
  if (t) {
    ;((r = p.get(n)), r === void 0 && ((r = []), p.set(n, r)))
    let a = t.textures
    if (r.length !== a.length || r[0] !== e.COLOR_ATTACHMENT0) {
      for (let t = 0, n = a.length; t < n; t++) r[t] = e.COLOR_ATTACHMENT0 + t
      ;((r.length = a.length), (i = !0))
    }
  } else r[0] !== e.BACK && ((r[0] = e.BACK), (i = !0))
  i && e.drawBuffers(r)
}
