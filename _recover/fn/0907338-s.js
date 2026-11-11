function s(i) {
  let a = 0,
    o = 0,
    s = 0
  for (let e = 0; e < 9; e++) r.probe[e].set(0, 0, 0)
  let c = 0,
    l = 0,
    u = 0,
    d = 0,
    f = 0,
    p = 0,
    m = 0,
    h = 0,
    g = 0,
    _ = 0,
    v = 0,
    y = 0,
    b = 0,
    x = 0
  i.sort(Gy)
  for (let e = 0, S = i.length; e < S; e++) {
    let S = i[e],
      C = S.color,
      w = S.intensity,
      T = S.distance,
      E = null
    if (
      (S.shadow &&
        S.shadow.map &&
        (E =
          S.shadow.map.texture.format === 1030
            ? S.shadow.map.texture
            : S.shadow.map.depthTexture || S.shadow.map.texture),
      S.isAmbientLight)
    )
      ((a += C.r * w), (o += C.g * w), (s += C.b * w))
    else if (S.isLightProbe) {
      for (let e = 0; e < 9; e++) r.probe[e].addScaledVector(S.sh.coefficients[e], w)
      x++
    } else if (S.isSunLight) {
      let e = t.get(S)
      if ((e.color.copy(S.color).multiplyScalar(S.intensity), S.castShadow)) {
        let e = S.shadow,
          t = n.get(S)
        ;((t.shadowIntensity = e.intensity),
          (t.shadowBias = e.bias),
          (t.shadowNormalBias = e.normalBias),
          (t.shadowRadius = e.radius),
          t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),
          (r.sunShadow[l] = t),
          (r.sunShadowMap[l] = E))
        let i = e.getViewportCount()
        for (let t = 0; t < i; t++)
          ((r.sunShadowMatrix[u + t] = e.getMatrix(t)),
            (r.sunShadowCascade[u + t] = e._cascadeData[t]))
        ;((u += i), l++)
      }
      ;((r.sun[c] = e), c++)
    } else if (S.isDirectionalLight) {
      let e = t.get(S)
      if ((e.color.copy(S.color).multiplyScalar(S.intensity), S.castShadow)) {
        let e = S.shadow,
          t = n.get(S)
        ;((t.shadowIntensity = e.intensity),
          (t.shadowBias = e.bias),
          (t.shadowNormalBias = e.normalBias),
          (t.shadowRadius = e.radius),
          (t.shadowMapSize = e.mapSize),
          (r.directionalShadow[d] = t),
          (r.directionalShadowMap[d] = E),
          (r.directionalShadowMatrix[d] = S.shadow.matrix),
          g++)
      }
      ;((r.directional[d] = e), d++)
    } else if (S.isSpotLight) {
      let e = t.get(S)
      ;(e.position.setFromMatrixPosition(S.matrixWorld),
        e.color.copy(C).multiplyScalar(w),
        (e.distance = T),
        (e.coneCos = Math.cos(S.angle)),
        (e.penumbraCos = Math.cos(S.angle * (1 - S.penumbra))),
        (e.decay = S.decay),
        (r.spot[p] = e))
      let i = S.shadow
      if (
        (S.map && ((r.spotLightMap[y] = S.map), y++, i.updateMatrices(S), S.castShadow && b++),
        (r.spotLightMatrix[p] = i.matrix),
        S.castShadow)
      ) {
        let e = n.get(S)
        ;((e.shadowIntensity = i.intensity),
          (e.shadowBias = i.bias),
          (e.shadowNormalBias = i.normalBias),
          (e.shadowRadius = i.radius),
          (e.shadowMapSize = i.mapSize),
          (r.spotShadow[p] = e),
          (r.spotShadowMap[p] = E),
          v++)
      }
      p++
    } else if (S.isRectAreaLight) {
      let e = t.get(S)
      ;(e.color.copy(C).multiplyScalar(w),
        e.halfWidth.set(S.width * 0.5, 0, 0),
        e.halfHeight.set(0, S.height * 0.5, 0),
        (r.rectArea[m] = e),
        m++)
    } else if (S.isPointLight) {
      let e = t.get(S)
      if (
        (e.color.copy(S.color).multiplyScalar(S.intensity),
        (e.distance = S.distance),
        (e.decay = S.decay),
        S.castShadow)
      ) {
        let e = S.shadow,
          t = n.get(S)
        ;((t.shadowIntensity = e.intensity),
          (t.shadowBias = e.bias),
          (t.shadowNormalBias = e.normalBias),
          (t.shadowRadius = e.radius),
          (t.shadowMapSize = e.mapSize),
          (t.shadowCameraNear = e.camera.near),
          (t.shadowCameraFar = e.camera.far),
          (r.pointShadow[f] = t),
          (r.pointShadowMap[f] = E),
          (r.pointShadowMatrix[f] = S.shadow.matrix),
          _++)
      }
      ;((r.point[f] = e), f++)
    } else if (S.isHemisphereLight) {
      let e = t.get(S)
      ;(e.skyColor.copy(S.color).multiplyScalar(w),
        e.groundColor.copy(S.groundColor).multiplyScalar(w),
        (r.hemi[h] = e),
        h++)
    }
  }
  ;(m > 0 &&
    (e.has(`OES_texture_float_linear`) === !0
      ? ((r.rectAreaLTC1 = Z.LTC_FLOAT_1), (r.rectAreaLTC2 = Z.LTC_FLOAT_2))
      : ((r.rectAreaLTC1 = Z.LTC_HALF_1), (r.rectAreaLTC2 = Z.LTC_HALF_2))),
    (r.ambient[0] = a),
    (r.ambient[1] = o),
    (r.ambient[2] = s))
  let S = r.hash
  ;(S.sunLength !== c ||
    S.directionalLength !== d ||
    S.pointLength !== f ||
    S.spotLength !== p ||
    S.rectAreaLength !== m ||
    S.hemiLength !== h ||
    S.numSunShadows !== l ||
    S.numDirectionalShadows !== g ||
    S.numPointShadows !== _ ||
    S.numSpotShadows !== v ||
    S.numSpotMaps !== y ||
    S.numLightProbes !== x) &&
    ((r.sun.length = c),
    (r.directional.length = d),
    (r.spot.length = p),
    (r.rectArea.length = m),
    (r.point.length = f),
    (r.hemi.length = h),
    (r.sunShadow.length = l),
    (r.sunShadowMap.length = l),
    (r.sunShadowMatrix.length = u),
    (r.sunShadowCascade.length = u),
    (r.directionalShadow.length = g),
    (r.directionalShadowMap.length = g),
    (r.directionalShadowMatrix.length = g),
    (r.pointShadow.length = _),
    (r.pointShadowMap.length = _),
    (r.pointShadowMatrix.length = _),
    (r.spotShadow.length = v),
    (r.spotShadowMap.length = v),
    (r.spotLightMatrix.length = v + y - b),
    (r.spotLightMap.length = y),
    (r.numSpotLightShadowsWithMaps = b),
    (r.numLightProbes = x),
    (S.sunLength = c),
    (S.directionalLength = d),
    (S.pointLength = f),
    (S.spotLength = p),
    (S.rectAreaLength = m),
    (S.hemiLength = h),
    (S.numSunShadows = l),
    (S.numDirectionalShadows = g),
    (S.numPointShadows = _),
    (S.numSpotShadows = v),
    (S.numSpotMaps = y),
    (S.numLightProbes = x),
    (r.version = Wy++))
}
