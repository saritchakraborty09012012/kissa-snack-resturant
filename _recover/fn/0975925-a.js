function a(e, r) {
  ;((e.opacity.value = r.opacity),
    r.color && e.diffuse.value.copy(r.color),
    r.emissive && e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),
    r.map && ((e.map.value = r.map), n(r.map, e.mapTransform)),
    r.alphaMap && ((e.alphaMap.value = r.alphaMap), n(r.alphaMap, e.alphaMapTransform)),
    r.bumpMap &&
      ((e.bumpMap.value = r.bumpMap),
      n(r.bumpMap, e.bumpMapTransform),
      (e.bumpScale.value = r.bumpScale),
      r.side === 1 && (e.bumpScale.value *= -1)),
    r.normalMap &&
      ((e.normalMap.value = r.normalMap),
      n(r.normalMap, e.normalMapTransform),
      e.normalScale.value.copy(r.normalScale),
      r.side === 1 && e.normalScale.value.negate()),
    r.displacementMap &&
      ((e.displacementMap.value = r.displacementMap),
      n(r.displacementMap, e.displacementMapTransform),
      (e.displacementScale.value = r.displacementScale),
      (e.displacementBias.value = r.displacementBias)),
    r.emissiveMap &&
      ((e.emissiveMap.value = r.emissiveMap), n(r.emissiveMap, e.emissiveMapTransform)),
    r.specularMap &&
      ((e.specularMap.value = r.specularMap), n(r.specularMap, e.specularMapTransform)),
    r.alphaTest > 0 && (e.alphaTest.value = r.alphaTest))
  let i = t.get(r),
    a = i.envMap,
    o = i.envMapRotation
  ;(a &&
    ((e.envMap.value = a),
    e.envMapRotation.value.setFromMatrix4(ub.makeRotationFromEuler(o)).transpose(),
    a.isCubeTexture && a.isRenderTargetTexture === !1 && e.envMapRotation.value.premultiply(db),
    (e.reflectivity.value = r.reflectivity),
    (e.ior.value = r.ior),
    (e.refractionRatio.value = r.refractionRatio)),
    r.lightMap &&
      ((e.lightMap.value = r.lightMap),
      (e.lightMapIntensity.value = r.lightMapIntensity),
      n(r.lightMap, e.lightMapTransform)),
    r.aoMap &&
      ((e.aoMap.value = r.aoMap),
      (e.aoMapIntensity.value = r.aoMapIntensity),
      n(r.aoMap, e.aoMapTransform)))
}
