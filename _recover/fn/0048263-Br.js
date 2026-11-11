function Br(e) {
  e =
    e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null
      ? e.ownerDocument.defaultView
      : window
  for (var t = Ir(e.document); t instanceof e.HTMLIFrameElement;) {
    try {
      var n = typeof t.contentWindow.location.href == `string`
    } catch {
      n = !1
    }
    if (n) e = t.contentWindow
    else break
    t = Ir(e.document)
  }
  return t
}
