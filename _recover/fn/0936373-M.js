function M(e) {
  let t = r.get(e)
  if (t.__webglInit === void 0) return
  let n = e.source,
    i = p.get(n)
  if (i) {
    let r = i[t.__cacheKey]
    ;(r.usedTimes--, r.usedTimes === 0 && N(e), Object.keys(i).length === 0 && p.delete(n))
  }
  r.remove(e)
}
