function m(i, o, l, u, m, h) {
  let g = u.fog,
    _ = m.geometry,
    v =
      i.isMeshStandardMaterial || i.isMeshLambertMaterial || i.isMeshPhongMaterial
        ? u.environment
        : null,
    y =
      i.isMeshStandardMaterial ||
      (i.isMeshLambertMaterial && !i.envMap) ||
      (i.isMeshPhongMaterial && !i.envMap),
    b = t.get(i.envMap || v, y),
    x = f[i.type],
    S = r.precision
  i.precision !== null &&
    ((S = r.getMaxPrecision(i.precision)),
    S !== i.precision &&
      q(`WebGLProgram.getParameters:`, i.precision, `not supported, using`, S, `instead.`))
  let C = _.morphAttributes.position || _.morphAttributes.normal || _.morphAttributes.color,
    w = C === void 0 ? 0 : C.length,
    T = 0
  ;(_.morphAttributes.position !== void 0 && (T = 1),
    _.morphAttributes.normal !== void 0 && (T = 2),
    _.morphAttributes.color !== void 0 && (T = 3))
  let E, D, O, k
  if (x) {
    let e = u_[x]
    ;((E = e.vertexShader), (D = e.fragmentShader))
  } else {
    ;((E = i.vertexShader), (D = i.fragmentShader))
    let e = s.getVertexShaderStage(i),
      t = s.getFragmentShaderStage(i)
    ;(s.update(i, e, t), (O = e.id), (k = t.id))
  }
  let A = e.getRenderTarget(),
    j = e.state.buffers.depth.getReversed(),
    M = m.isInstancedMesh === !0,
    N = m.isBatchedMesh === !0,
    P = !!i.map,
    F = !!i.matcap,
    ee = !!b,
    te = ee && b.isPMREMTexture === !0,
    I = !!i.aoMap,
    ne = !!i.lightMap,
    re = !!i.bumpMap && i.wireframe === !1,
    ie = !!i.normalMap,
    ae = !!i.displacementMap,
    oe = !!i.emissiveMap,
    se = !!i.metalnessMap,
    ce = !!i.roughnessMap,
    le = i.anisotropy > 0,
    ue = i.clearcoat > 0,
    de = i.diffuseRoughness > 0,
    fe = i.dispersion > 0,
    pe = i.retroreflectivity > 0,
    L = i.iridescence > 0,
    R = i.sheen > 0,
    me = i.transmission > 0,
    he = le && !!i.anisotropyMap,
    ge = ue && !!i.clearcoatMap,
    _e = ue && !!i.clearcoatNormalMap,
    ve = ue && !!i.clearcoatRoughnessMap,
    z = de && !!i.diffuseRoughnessMap,
    B = L && !!i.iridescenceMap,
    ye = L && !!i.iridescenceThicknessMap,
    be = R && !!i.sheenColorMap,
    V = R && !!i.sheenRoughnessMap,
    H = !!i.specularMap,
    U = !!i.specularColorMap,
    W = !!i.specularIntensityMap,
    xe = me && !!i.transmissionMap,
    Se = me && !!i.thicknessMap,
    Ce = !!i.gradientMap,
    we = !!i.alphaMap,
    Te = i.alphaTest > 0,
    Ee = !!i.alphaHash,
    De = !!i.extensions,
    Oe = 0
  i.toneMapped && (A === null || A.isXRRenderTarget === !0) && (Oe = e.toneMapping)
  let ke = te ? (b.isCompressedCubeTexture ? b.image[0].mipmaps : b.mipmaps) : null,
    Ae = {
      shaderID: x,
      shaderType: i.type,
      shaderName: i.name,
      vertexShader: E,
      fragmentShader: D,
      defines: i.defines,
      customVertexShaderID: O,
      customFragmentShaderID: k,
      isRawShaderMaterial: i.isRawShaderMaterial === !0,
      glslVersion: i.glslVersion,
      precision: S,
      batching: N,
      batchingColor: N && m._colorsTexture !== null,
      instancing: M,
      instancingColor: M && m.instanceColor !== null,
      instancingMorph: M && m.morphTexture !== null,
      outputColorSpace:
        A === null
          ? e.outputColorSpace
          : A.isXRRenderTarget === !0
            ? A.texture.colorSpace
            : Wo.workingColorSpace,
      alphaToCoverage: !!i.alphaToCoverage,
      map: P,
      matcap: F,
      envMap: ee,
      envMapMode: ee && b.mapping,
      envMapPMREM: te,
      envMapMaxLod: te ? ke.length - 1 : null,
      envMapSize: te ? ke[0].width : null,
      aoMap: I,
      lightMap: ne,
      bumpMap: re,
      normalMap: ie,
      displacementMap: ae,
      emissiveMap: oe,
      normalMapObjectSpace: ie && i.normalMapType === 1,
      normalMapTangentSpace: ie && i.normalMapType === 0,
      packedNormalMap: ie && i.normalMapType === 0 && Fy(i.normalMap.format),
      metalnessMap: se,
      roughnessMap: ce,
      anisotropy: le,
      anisotropyMap: he,
      clearcoat: ue,
      clearcoatMap: ge,
      clearcoatNormalMap: _e,
      clearcoatRoughnessMap: ve,
      diffuseRoughness: de,
      diffuseRoughnessMap: z,
      dispersion: fe,
      retroreflection: pe,
      iridescence: L,
      iridescenceMap: B,
      iridescenceThicknessMap: ye,
      sheen: R,
      sheenColorMap: be,
      sheenRoughnessMap: V,
      specularMap: H,
      specularColorMap: U,
      specularIntensityMap: W,
      transmission: me,
      transmissionMap: xe,
      thicknessMap: Se,
      gradientMap: Ce,
      opaque: i.transparent === !1 && i.blending === 1 && i.alphaToCoverage === !1,
      alphaMap: we,
      alphaTest: Te,
      alphaHash: Ee,
      combine: i.combine,
      mapUv: P && p(i.map.channel),
      aoMapUv: I && p(i.aoMap.channel),
      lightMapUv: ne && p(i.lightMap.channel),
      bumpMapUv: re && p(i.bumpMap.channel),
      normalMapUv: ie && p(i.normalMap.channel),
      displacementMapUv: ae && p(i.displacementMap.channel),
      emissiveMapUv: oe && p(i.emissiveMap.channel),
      metalnessMapUv: se && p(i.metalnessMap.channel),
      roughnessMapUv: ce && p(i.roughnessMap.channel),
      anisotropyMapUv: he && p(i.anisotropyMap.channel),
      clearcoatMapUv: ge && p(i.clearcoatMap.channel),
      clearcoatNormalMapUv: _e && p(i.clearcoatNormalMap.channel),
      clearcoatRoughnessMapUv: ve && p(i.clearcoatRoughnessMap.channel),
      diffuseRoughnessMapUv: z && p(i.diffuseRoughnessMap.channel),
      iridescenceMapUv: B && p(i.iridescenceMap.channel),
      iridescenceThicknessMapUv: ye && p(i.iridescenceThicknessMap.channel),
      sheenColorMapUv: be && p(i.sheenColorMap.channel),
      sheenRoughnessMapUv: V && p(i.sheenRoughnessMap.channel),
      specularMapUv: H && p(i.specularMap.channel),
      specularColorMapUv: U && p(i.specularColorMap.channel),
      specularIntensityMapUv: W && p(i.specularIntensityMap.channel),
      transmissionMapUv: xe && p(i.transmissionMap.channel),
      thicknessMapUv: Se && p(i.thicknessMap.channel),
      alphaMapUv: we && p(i.alphaMap.channel),
      vertexTangents: !!_.attributes.tangent && (ie || le),
      vertexNormals: !!_.attributes.normal,
      vertexColors: i.vertexColors,
      vertexAlphas:
        i.vertexColors === !0 && !!_.attributes.color && _.attributes.color.itemSize === 4,
      pointsUvs: m.isPoints === !0 && !!_.attributes.uv && (P || we),
      fog: !!g,
      useFog: i.fog === !0,
      fogExp2: !!g && g.isFogExp2,
      flatShading:
        i.wireframe === !1 &&
        (i.flatShading === !0 ||
          (_.attributes.normal === void 0 &&
            ie === !1 &&
            (i.isMeshLambertMaterial ||
              i.isMeshPhongMaterial ||
              i.isMeshStandardMaterial ||
              i.isMeshPhysicalMaterial))),
      sizeAttenuation: i.sizeAttenuation === !0,
      logarithmicDepthBuffer: d,
      reversedDepthBuffer: j,
      skinning: m.isSkinnedMesh === !0,
      hasPositionAttribute: _.attributes.position !== void 0,
      morphTargets: _.morphAttributes.position !== void 0,
      morphNormals: _.morphAttributes.normal !== void 0,
      morphColors: _.morphAttributes.color !== void 0,
      morphTargetsCount: w,
      morphTextureStride: T,
      numSunLights: o.sun.length,
      numDirLights: o.directional.length,
      numPointLights: o.point.length,
      numSpotLights: o.spot.length,
      numSpotLightMaps: o.spotLightMap.length,
      numRectAreaLights: o.rectArea.length,
      numHemiLights: o.hemi.length,
      numSunLightShadows: o.sunShadowMap.length,
      numDirLightShadows: o.directionalShadowMap.length,
      numPointLightShadows: o.pointShadowMap.length,
      numSpotLightShadows: o.spotShadowMap.length,
      numSpotLightShadowsWithMaps: o.numSpotLightShadowsWithMaps,
      numLightProbes: o.numLightProbes,
      numLightProbeGrids: h.filter((e) => e.texture !== null).length,
      numClippingPlanes: a.numPlanes,
      numClipIntersection: a.numIntersection,
      dithering: i.dithering,
      shadowMapEnabled: e.shadowMap.enabled && l.length > 0,
      shadowMapType: e.shadowMap.type,
      toneMapping: Oe,
      decodeVideoTexture:
        P && i.map.isVideoTexture === !0 && Wo.getTransfer(i.map.colorSpace) === `srgb`,
      decodeVideoTextureEmissive:
        oe &&
        i.emissiveMap.isVideoTexture === !0 &&
        Wo.getTransfer(i.emissiveMap.colorSpace) === `srgb`,
      premultipliedAlpha: i.premultipliedAlpha,
      doubleSided: i.side === 2,
      flipSided: i.side === 1,
      useDepthPacking: i.depthPacking >= 0,
      depthPacking: i.depthPacking || 0,
      index0AttributeName: i.index0AttributeName,
      extensionClipCullDistance:
        De && i.extensions.clipCullDistance === !0 && n.has(`WEBGL_clip_cull_distance`),
      extensionMultiDraw:
        ((De && i.extensions.multiDraw === !0) || N) && n.has(`WEBGL_multi_draw`),
      rendererExtensionParallelShaderCompile: n.has(`KHR_parallel_shader_compile`),
      customProgramCacheKey: i.customProgramCacheKey(),
    }
  return (
    (Ae.vertexUv1s = c.has(1)),
    (Ae.vertexUv2s = c.has(2)),
    (Ae.vertexUv3s = c.has(3)),
    c.clear(),
    Ae
  )
}
