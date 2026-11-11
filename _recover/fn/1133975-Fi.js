function Fi(e, t) {
  var n = Pi(e)
  t.forEach(function (t) {
    if (!n.has(t)) {
      n.add(t)
      var r = Xa.bind(null, e, t)
      t.then(r, r)
    }
  })
}
