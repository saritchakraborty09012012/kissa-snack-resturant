function rm(e, t) {
  var n = t._eventListeners
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r]
      e.addEventListener(i.type, i.attachedListener, Vp(i.optionsOrUseCapture))
    }
  e.nodeType !== 3 &&
    ((n = t._observers),
    n !== null &&
      n.forEach(function (n) {
        for (var r = 0, i = 0; i < Yp.length; i++) {
          var a = Yp[i]
          ;(a.fragmentInstance !== t || a.observer !== n || a.instance !== e) && (Yp[r++] = a)
        }
        ;((Yp.length = r), n.observe(e))
      }),
    nm(e, t))
}
