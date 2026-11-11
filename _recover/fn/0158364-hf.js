function hf(e, t, n) {
  var r = e.pingCache
  if (r === null) {
    r = e.pingCache = new Ju()
    var i = new Set()
    r.set(t, i)
  } else ((i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i)))
  i.has(n) || ((rd = !0), i.add(n), (e = gf.bind(null, e, t, n)), t.then(e, e))
}
