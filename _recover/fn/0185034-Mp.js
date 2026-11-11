function Mp(e) {
  var t = e.getBoundingClientRect()
  t = new DOMRect(t.x + 2e4, t.y + 2e4, t.width, t.height)
  var n = getComputedStyle(e)
  return Ap(t, n, e)
}
