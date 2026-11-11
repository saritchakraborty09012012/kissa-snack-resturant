function c(e) {
  e.index !== null && t.remove(e.index)
  for (let n in e.attributes) t.remove(e.attributes[n])
  ;(e.removeEventListener(`dispose`, s), delete i[e.id], o.unregister(e))
  let c = a.get(e)
  ;(c && (t.remove(c), a.delete(e)),
    r.releaseStatesOfGeometry(e),
    e.isInstancedBufferGeometry === !0 && delete e._maxInstanceCount,
    n.memory.geometries--)
}
