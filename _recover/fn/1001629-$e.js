function $e(e, t, n, r) {
  let { opaque: i, transmissive: a, transparent: o } = e
  ;(x.setupLightsView(n),
    L === !0 && Ae.setGlobalState(T.clippingPlanes, n),
    r && H.viewport(ee.copy(r)),
    i.length > 0 && tt(i, t, n),
    a.length > 0 && tt(a, t, n),
    o.length > 0 && tt(o, t, n),
    H.buffers.depth.setTest(!0),
    H.buffers.depth.setMask(!0),
    H.buffers.color.setMask(!0),
    H.setPolygonOffset(!1))
}
