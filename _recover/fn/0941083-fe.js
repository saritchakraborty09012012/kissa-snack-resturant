function fe(t, n) {
  let r = !1
  t.__webglInit === void 0 && ((t.__webglInit = !0), n.addEventListener(`dispose`, D), T(n))
  let i = n.source,
    a = p.get(i)
  a === void 0 && ((a = {}), p.set(i, a))
  let s = re(n)
  if (s !== t.__cacheKey) {
    ;(a[s] === void 0 &&
      ((a[s] = { texture: e.createTexture(), usedTimes: 0 }), o.memory.textures++, (r = !0)),
      a[s].usedTimes++)
    let i = a[t.__cacheKey]
    ;(i !== void 0 && (a[t.__cacheKey].usedTimes--, i.usedTimes === 0 && N(n)),
      (t.__cacheKey = s),
      (t.__webglTexture = a[s].texture))
  }
  return r
}
