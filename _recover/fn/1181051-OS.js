function OS(e) {
  if (!e.isHidden) {
    var t
    ;(e.props.attach && (t = e.parent) != null && t.object
      ? yx(e.parent, e)
      : kx(e.object) && ((e.previousVisible = e.object.visible), (e.object.visible = !1)),
      (e.isHidden = !0),
      Dx(e))
  }
}
