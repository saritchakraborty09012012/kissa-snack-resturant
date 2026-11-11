function y(t, n, r, i) {
  let a = null,
    o = r.isPointLight === !0 ? t.customDistanceMaterial : t.customDepthMaterial
  if (o !== void 0) a = o
  else if (
    ((a = r.isPointLight === !0 ? c : s),
    (e.localClippingEnabled &&
      n.clipShadows === !0 &&
      Array.isArray(n.clippingPlanes) &&
      n.clippingPlanes.length !== 0) ||
      (n.displacementMap && n.displacementScale !== 0) ||
      (n.alphaMap && n.alphaTest > 0) ||
      (n.map && n.alphaTest > 0) ||
      n.alphaToCoverage === !0)
  ) {
    let e = a.uuid,
      t = n.uuid,
      r = l[e]
    r === void 0 && ((r = {}), (l[e] = r))
    let i = r[t]
    ;(i === void 0 && ((i = a.clone()), (r[t] = i), n.addEventListener(`dispose`, x)), (a = i))
  }
  if (
    ((a.visible = n.visible),
    (a.wireframe = n.wireframe),
    i === 3
      ? (a.side = n.shadowSide === null ? n.side : n.shadowSide)
      : (a.side = n.shadowSide === null ? d[n.side] : n.shadowSide),
    (a.alphaMap = n.alphaMap),
    (a.alphaTest = n.alphaToCoverage === !0 ? 0.5 : n.alphaTest),
    (a.map = n.map),
    (a.clipShadows = n.clipShadows),
    (a.clippingPlanes = n.clippingPlanes),
    (a.clipIntersection = n.clipIntersection),
    (a.displacementMap = n.displacementMap),
    (a.displacementScale = n.displacementScale),
    (a.displacementBias = n.displacementBias),
    (a.wireframeLinewidth = n.wireframeLinewidth),
    (a.linewidth = n.linewidth),
    r.isPointLight === !0 && a.isMeshDistanceMaterial === !0)
  ) {
    let t = e.properties.get(a)
    t.light = r
  }
  return a
}
