function j() {
  for (let e of m) {
    let t = e.deref()
    t !== void 0 && (t.isRenderTarget === !0 ? A(t) : k(t))
  }
  ;(m.clear(), d.clear())
}
