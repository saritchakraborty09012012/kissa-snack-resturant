function p(e) {
  let n = e.isScene === !0 ? e.background : null
  if (n && n.isTexture) {
    let r = e.backgroundBlurriness > 0
    n = t.get(n, r)
  }
  return n
}
