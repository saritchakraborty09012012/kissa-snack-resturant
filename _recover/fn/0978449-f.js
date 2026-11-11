function f(e, t) {
  ;((e.metalness.value = t.metalness),
    t.metalnessMap &&
      ((e.metalnessMap.value = t.metalnessMap), n(t.metalnessMap, e.metalnessMapTransform)),
    (e.roughness.value = t.roughness),
    t.roughnessMap &&
      ((e.roughnessMap.value = t.roughnessMap), n(t.roughnessMap, e.roughnessMapTransform)),
    t.envMap && (e.envMapIntensity.value = t.envMapIntensity))
}
