function qt(e) {
  if (!e._valueTracker) {
    var t = Gt(e) ? `checked` : `value`
    e._valueTracker = Kt(e, t, `` + e[t])
  }
}
