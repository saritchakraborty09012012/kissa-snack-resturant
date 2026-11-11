function Su(e, t) {
  var n = xu(e)
  t.forEach(function (t) {
    if (!n.has(t)) {
      n.add(t)
      var r = yf.bind(null, e, t)
      t.then(r, r)
    }
  })
}
