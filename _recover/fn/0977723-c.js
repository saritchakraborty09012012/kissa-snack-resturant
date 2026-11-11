function c(e, t, r, i) {
  ;(e.diffuse.value.copy(t.color),
    (e.opacity.value = t.opacity),
    (e.size.value = t.size * r),
    (e.scale.value = i * 0.5),
    t.map && ((e.map.value = t.map), n(t.map, e.uvTransform)),
    t.alphaMap && ((e.alphaMap.value = t.alphaMap), n(t.alphaMap, e.alphaMapTransform)),
    t.alphaTest > 0 && (e.alphaTest.value = t.alphaTest))
}
