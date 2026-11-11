function ct(e, t, n, r, i) {
  ;(t.isScene !== !0 && (t = _e), xe.resetTextureUnits())
  let a = t.fog,
    o =
      r.isMeshStandardMaterial || r.isMeshLambertMaterial || r.isMeshPhongMaterial
        ? t.environment
        : null,
    s =
      N === null
        ? T.outputColorSpace
        : N.isXRRenderTarget === !0
          ? N.texture.colorSpace
          : Wo.workingColorSpace,
    c =
      r.isMeshStandardMaterial ||
      (r.isMeshLambertMaterial && !r.envMap) ||
      (r.isMeshPhongMaterial && !r.envMap),
    l = Se.get(r.envMap || o, c),
    u = r.vertexColors === !0 && !!n.attributes.color && n.attributes.color.itemSize === 4,
    d = !!n.attributes.tangent && (!!r.normalMap || r.anisotropy > 0),
    f = !!n.morphAttributes.position,
    p = !!n.morphAttributes.normal,
    m = !!n.morphAttributes.color,
    h = 0
  r.toneMapped && (N === null || N.isXRRenderTarget === !0) && (h = T.toneMapping)
  let g = n.morphAttributes.position || n.morphAttributes.normal || n.morphAttributes.color,
    _ = g === void 0 ? 0 : g.length,
    v = W.get(r),
    b = x.state.lights
  if (L === !0 && (R === !0 || e !== F)) {
    let t = e === F && r.id === P
    Ae.setState(r, e, t)
  }
  let S = !1,
    C = !1
  r.version === v.__version
    ? (v.needsLights && v.lightsStateVersion !== b.state.version) ||
      (i.isBatchedMesh && v.batching === !1) ||
      (!i.isBatchedMesh && v.batching === !0) ||
      (i.isBatchedMesh && v.batchingColor === !0 && i._colorsTexture === null) ||
      (i.isBatchedMesh && v.batchingColor === !1 && i._colorsTexture !== null) ||
      (i.isInstancedMesh && v.instancing === !1) ||
      (!i.isInstancedMesh && v.instancing === !0) ||
      (i.isSkinnedMesh && v.skinning === !1) ||
      (!i.isSkinnedMesh && v.skinning === !0) ||
      (i.isInstancedMesh && v.instancingColor === !0 && i.instanceColor === null) ||
      (i.isInstancedMesh && v.instancingColor === !1 && i.instanceColor !== null) ||
      (i.isInstancedMesh && v.instancingMorph === !0 && i.morphTexture === null) ||
      (i.isInstancedMesh && v.instancingMorph === !1 && i.morphTexture !== null)
      ? (S = !0)
      : v.envMap === l
        ? (r.fog === !0 && v.fog !== a) ||
          (v.numClippingPlanes !== void 0 &&
            (v.numClippingPlanes !== Ae.numPlanes || v.numIntersection !== Ae.numIntersection))
          ? (S = !0)
          : v.vertexAlphas === u &&
              v.vertexTangents === d &&
              v.morphTargets === f &&
              v.morphNormals === p &&
              v.morphColors === m &&
              v.morphTargetsCount === _ &&
              v.numLightProbeGrids === rt(x.state.lightProbeGridArray)
            ? (v.outputColorSpace !== s || v.toneMapping !== h) && (C = !0)
            : (S = !0)
        : (S = !0)
    : ((S = !0), (v.__version = r.version))
  let w = v.currentProgram
  ;(S === !0 || C === !0) &&
    ((w = C === !0 ? at(r, t, i, s, h) : it(r, t, i)),
    D && r.isNodeMaterial && D.onUpdateProgram(r, w, v))
  let E = !1,
    O = !1,
    k = !1,
    A = w.getUniforms(),
    j = v.uniforms
  if (
    (H.useProgram(w.program) && ((E = !0), (O = !0), (k = !0)),
    r.id !== P && ((P = r.id), (O = !0)),
    E || F !== e)
  ) {
    ;(H.buffers.depth.getReversed() &&
      e.reversedDepth !== !0 &&
      ((e._reversedDepth = !0), e.updateProjectionMatrix()),
      A.setValue(B, `projectionMatrix`, e.projectionMatrix),
      A.setValue(B, `viewMatrix`, e.matrixWorldInverse))
    let t = A.map.cameraPosition
    ;(t !== void 0 && t.setValue(B, he.setFromMatrixPosition(e.matrixWorld)),
      V.logarithmicDepthBuffer &&
        A.setValue(B, `logDepthBufFC`, 2 / (Math.log(e.far + 1) / Math.LN2)),
      (r.isMeshPhongMaterial ||
        r.isMeshToonMaterial ||
        r.isMeshLambertMaterial ||
        r.isMeshBasicMaterial ||
        r.isMeshStandardMaterial ||
        r.isShaderMaterial) &&
        A.setValue(B, `isOrthographic`, e.isOrthographicCamera === !0),
      F !== e && ((F = e), (O = !0), (k = !0)))
  }
  if (
    (v.needsLights &&
      (b.state.sunShadowMap.length > 0 &&
        A.setValue(B, `sunShadowMap`, b.state.sunShadowMap, xe),
      b.state.directionalShadowMap.length > 0 &&
        A.setValue(B, `directionalShadowMap`, b.state.directionalShadowMap, xe),
      b.state.spotShadowMap.length > 0 &&
        A.setValue(B, `spotShadowMap`, b.state.spotShadowMap, xe),
      b.state.pointShadowMap.length > 0 &&
        A.setValue(B, `pointShadowMap`, b.state.pointShadowMap, xe)),
    i.isSkinnedMesh)
  ) {
    ;(A.setOptional(B, i, `bindMatrix`), A.setOptional(B, i, `bindMatrixInverse`))
    let e = i.skeleton
    e &&
      (e.boneTexture === null && e.computeBoneTexture(),
      A.setValue(B, `boneTexture`, e.boneTexture, xe))
  }
  i.isBatchedMesh &&
    (A.setOptional(B, i, `batchingTexture`),
    A.setValue(B, `batchingTexture`, i._matricesTexture, xe),
    A.setOptional(B, i, `batchingIdTexture`),
    A.setValue(B, `batchingIdTexture`, i._indirectTexture, xe),
    A.setOptional(B, i, `batchingColorTexture`),
    i._colorsTexture !== null && A.setValue(B, `batchingColorTexture`, i._colorsTexture, xe))
  let M = n.morphAttributes
  if (
    ((M.position !== void 0 || M.normal !== void 0 || M.color !== void 0) && G.update(i, n, w),
    (O || v.receiveShadow !== i.receiveShadow) &&
      ((v.receiveShadow = i.receiveShadow), A.setValue(B, `receiveShadow`, i.receiveShadow)),
    (r.isMeshStandardMaterial || r.isMeshLambertMaterial || r.isMeshPhongMaterial) &&
      r.envMap === null &&
      t.environment !== null &&
      (j.envMapIntensity.value = t.environmentIntensity),
    j.dfgLUT !== void 0 && (j.dfgLUT.value = gb()),
    O)
  ) {
    if (
      (A.setValue(B, `toneMappingExposure`, T.toneMappingExposure),
      v.needsLights && lt(j, k),
      a && r.fog === !0 && De.refreshFogUniforms(j, a),
      De.refreshMaterialUniforms(j, r, oe, ae, x.state.transmissionRenderTarget[e.id]),
      v.needsLights && v.numLightProbeGrids > 0)
    ) {
      let e = y,
        t = 0
      for (let n of x.state.lightProbeGridArray)
        n.texture !== null &&
          ((e.textures[t] = n.texture),
          (e.min[t] = n.boundingBox.min),
          (e.max[t] = n.boundingBox.max),
          (e.resolution[t] = n.resolution),
          t++)
      for (let n in e) e[n].length = t
      ;((j.probesSH.value = e.textures),
        (j.probesMin.value = e.min),
        (j.probesMax.value = e.max),
        (j.probesResolution.value = e.resolution))
    }
    $v.upload(B, ot(v), j, xe)
  }
  if (
    (r.isShaderMaterial &&
      r.uniformsNeedUpdate === !0 &&
      ($v.upload(B, ot(v), j, xe), (r.uniformsNeedUpdate = !1)),
    r.isSpriteMaterial && A.setValue(B, `center`, i.center),
    A.setValue(B, `modelViewMatrix`, i.modelViewMatrix),
    A.setValue(B, `normalMatrix`, i.normalMatrix),
    A.setValue(B, `modelMatrix`, i.matrixWorld),
    r.uniformsGroups !== void 0)
  ) {
    let e = r.uniformsGroups
    for (let t = 0, n = e.length; t < n; t++) {
      let n = e[t]
      ;(Le.update(n, w), Le.bind(n, w))
    }
  }
  return w
}
