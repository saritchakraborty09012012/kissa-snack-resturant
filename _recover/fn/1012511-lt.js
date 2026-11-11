function lt(e, t) {
  ;((e.ambientLightColor.needsUpdate = t),
    (e.lightProbe.needsUpdate = t),
    (e.sunLights.needsUpdate = t),
    (e.sunLightShadows.needsUpdate = t),
    (e.directionalLights.needsUpdate = t),
    (e.directionalLightShadows.needsUpdate = t),
    (e.pointLights.needsUpdate = t),
    (e.pointLightShadows.needsUpdate = t),
    (e.spotLights.needsUpdate = t),
    (e.spotLightShadows.needsUpdate = t),
    (e.rectAreaLights.needsUpdate = t),
    (e.hemisphereLights.needsUpdate = t))
}
