function N(t) {
  let n = r.get(t)
  e.deleteTexture(n.__webglTexture)
  let i = t.source,
    a = p.get(i)
  ;(delete a[n.__cacheKey], o.memory.textures--)
}
