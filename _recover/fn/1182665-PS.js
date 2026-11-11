function PS(e, t, n) {
  if (!t) return
  let r = !!t.parent
  t.parent = null
  let i = e.children.indexOf(t)
  ;(i !== -1 && e.children.splice(i, 1),
    t.props.attach
      ? yx(e, t)
      : kx(t.object) && kx(e.object) && (e.object.remove(t.object), Nx(nx(t), t.object)))
  let a = t.props.dispose !== null && n !== !1
  for (let e = t.children.length - 1; e >= 0; e--) {
    let n = t.children[e]
    PS(t, n, a)
  }
  if (
    ((t.children.length = 0),
    delete t.object.__r3f,
    a && t.type !== `primitive` && t.object.type !== `Scene` && NS(t.object),
    n === void 0 && r)
  ) {
    var o
    let e = (o = t.root) == null || o.getState == null ? void 0 : o.getState()
    e && e.internal.frames === 0 && e.invalidate()
  }
}
