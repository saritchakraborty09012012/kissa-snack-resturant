function l(e, t) {
  ;(e.diffuse.value.copy(t.color),
    (e.opacity.value = t.opacity),
    (e.rotation.value = t.rotation),
    t.map && ((e.map.value = t.map), n(t.map, e.mapTransform)),
    t.alphaMap && ((e.alphaMap.value = t.alphaMap), n(t.alphaMap, e.alphaMapTransform)),
    t.alphaTest > 0 && (e.alphaTest.value = t.alphaTest))
}
