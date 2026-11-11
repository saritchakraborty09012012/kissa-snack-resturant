function kS(e) {
  if (e.isHidden) {
    var t
    ;(e.props.attach && (t = e.parent) != null && t.object
      ? vx(e.parent, e)
      : kx(e.object) && (e.object.visible = e.previousVisible ?? !0),
      (e.previousVisible = void 0),
      (e.isHidden = !1),
      Dx(e))
  }
}
