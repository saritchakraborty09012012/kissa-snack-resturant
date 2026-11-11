function o(e, t) {
  ;(e.diffuse.value.copy(t.color),
    (e.opacity.value = t.opacity),
    t.map && ((e.map.value = t.map), n(t.map, e.mapTransform)))
}
