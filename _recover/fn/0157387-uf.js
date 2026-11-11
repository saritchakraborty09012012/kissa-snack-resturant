function uf(e, t) {
  ;(e.pooledCacheLanes &= t) === 0 &&
    ((t = e.pooledCache), t != null && ((e.pooledCache = null), Da(t)))
}
