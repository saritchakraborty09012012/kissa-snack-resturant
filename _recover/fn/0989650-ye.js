function ye(e, n) {
  return t.getContext(e, n)
}
let be, V, H, U, W, xe, Se, Ce, we, Te, Ee, De, Oe, ke, Ae, je, Me, G, Ne, Pe, Fe, Ie, Le
try {
  let e = {
    alpha: !0,
    depth: r,
    stencil: i,
    antialias: o,
    premultipliedAlpha: s,
    preserveDrawingBuffer: c,
    powerPreference: l,
    failIfMajorPerformanceCaveat: u,
  }
  if (
    (`setAttribute` in t && t.setAttribute(`data-engine`, `three.js r187`),
    t.addEventListener(`webglcontextlost`, Be, !1),
    t.addEventListener(`webglcontextrestored`, Ve, !1),
    t.addEventListener(`webglcontextcreationerror`, He, !1),
    B === null)
  ) {
    let t = `webgl2`
    if (((B = ye(t, e)), B === null))
      throw ye(t)
        ? Error(
            `THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`,
          )
        : Error(`THREE.WebGLRenderer: Error creating WebGL context.`)
  }
  Re()
} catch (e) {
  throw (
    t.removeEventListener(`webglcontextlost`, Be, !1),
    t.removeEventListener(`webglcontextrestored`, Ve, !1),
    t.removeEventListener(`webglcontextcreationerror`, He, !1),
    no(`WebGLRenderer: ` + e.message),
    e
  )
}
