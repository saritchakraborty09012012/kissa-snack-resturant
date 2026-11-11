function it(e, t, n) {
  t.isScene !== !0 && (t = _e)
  let r = W.get(e),
    i = x.state.lights,
    a = x.state.shadowsArray,
    o = i.state.version,
    s = Ee.getParameters(e, i.state, a, t, n, x.state.lightProbeGridArray),
    c = Ee.getProgramCacheKey(s),
    l = r.programs
  ;((r.environment =
    e.isMeshStandardMaterial || e.isMeshLambertMaterial || e.isMeshPhongMaterial
      ? t.environment
      : null),
    (r.fog = t.fog))
  let u =
    e.isMeshStandardMaterial ||
    (e.isMeshLambertMaterial && !e.envMap) ||
    (e.isMeshPhongMaterial && !e.envMap)
  ;((r.envMap = Se.get(e.envMap || r.environment, u)),
    (r.envMapRotation =
      r.environment !== null && e.envMap === null ? t.environmentRotation : e.envMapRotation),
    l === void 0 &&
      (e.addEventListener(`dispose`, Ue),
      (l = new Map()),
      (r.programs = l),
      (r.programVariants = new Map())))
  let d = l.get(c)
  if (d !== void 0) {
    if (r.currentProgram === d && r.lightsStateVersion === o) return (st(e, s), d)
  } else
    ((s.uniforms = Ee.getUniforms(e)),
      D !== null && e.isNodeMaterial && D.build(e, n, s),
      e.onBeforeCompile(s, T),
      (d = Ee.acquireProgram(s, c)),
      l.set(c, d),
      (r.uniforms = s.uniforms))
  let f = r.uniforms
  return (
    ((!e.isShaderMaterial && !e.isRawShaderMaterial) || e.clipping === !0) &&
      (f.clippingPlanes = Ae.uniform),
    st(e, s),
    (r.needsLights = ut(e)),
    (r.lightsStateVersion = o),
    r.needsLights &&
      ((f.ambientLightColor.value = i.state.ambient),
      (f.lightProbe.value = i.state.probe),
      (f.sunLights.value = i.state.sun),
      (f.sunLightShadows.value = i.state.sunShadow),
      (f.directionalLights.value = i.state.directional),
      (f.directionalLightShadows.value = i.state.directionalShadow),
      (f.spotLights.value = i.state.spot),
      (f.spotLightShadows.value = i.state.spotShadow),
      (f.rectAreaLights.value = i.state.rectArea),
      (f.ltc_1.value = i.state.rectAreaLTC1),
      (f.ltc_2.value = i.state.rectAreaLTC2),
      (f.pointLights.value = i.state.point),
      (f.pointLightShadows.value = i.state.pointShadow),
      (f.hemisphereLights.value = i.state.hemi),
      (f.sunShadowMatrix.value = i.state.sunShadowMatrix),
      (f.sunShadowCascade.value = i.state.sunShadowCascade),
      (f.directionalShadowMatrix.value = i.state.directionalShadowMatrix),
      (f.spotLightMatrix.value = i.state.spotLightMatrix),
      (f.spotLightMap.value = i.state.spotLightMap),
      (f.pointShadowMatrix.value = i.state.pointShadowMatrix)),
    (r.numLightProbeGrids = rt(x.state.lightProbeGridArray)),
    (r.currentProgram = d),
    (r.uniformsList = null),
    d
  )
}
