function Dx(e) {
  var t
  if (!e.parent) return
  e.props.onUpdate == null || e.props.onUpdate(e.object)
  let n = (t = e.root) == null || t.getState == null ? void 0 : t.getState()
  n && n.internal.frames === 0 && n.invalidate()
}
