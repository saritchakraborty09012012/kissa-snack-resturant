function Ka(e, t, n) {
  var r = e.pingCache
  if (r === null) {
    r = e.pingCache = new Gd()
    var i = new Set()
    r.set(t, i)
  } else ((i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i)))
  i.has(n) || ((ef = !0), i.add(n), (e = qa.bind(null, e, t, n)), t.then(e, e))
}
