function dt(e, t) {
  var n = e.callbacks
  if (n !== null) for (e.callbacks = null, e = 0; e < n.length; e++) ut(n[e], t)
}
