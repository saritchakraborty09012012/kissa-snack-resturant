function Va(e, t) {
  ;(e.pooledCacheLanes &= t) === 0 &&
    ((t = e.pooledCache), t != null && ((e.pooledCache = null), Se(t)))
}
