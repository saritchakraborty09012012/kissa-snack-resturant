function im(e, t) {
  var n = t._eventListeners
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r]
      e.removeEventListener(i.type, i.attachedListener, Vp(i.optionsOrUseCapture))
    }
  e.nodeType !== 3 &&
    ((n = t._observers),
    n !== null &&
      n.forEach(function (n) {
        typeof n.rootMargin == `string` ? Zp(t, n, e) : n.unobserve(e)
      }),
    e.reactFragments != null && e.reactFragments.delete(t))
}
