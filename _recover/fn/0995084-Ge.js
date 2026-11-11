function Ge(e) {
  let t = W.get(e).programs
  t !== void 0 &&
    (t.forEach(function (e) {
      Ee.releaseProgram(e)
    }),
    e.isShaderMaterial && Ee.releaseShaderCache(e))
}
this.renderBufferDirect = function (e, t, n, r, i, a) {
  t === null && (t = _e)
  let o = i.isMesh && i.matrixWorld.determinantAffine() < 0,
    s = ct(e, t, n, r, i)
  H.setMaterial(r, o)
  let c = n.index,
    l = 1
  if (r.wireframe === !0) {
    if (((c = we.getWireframeAttribute(n)), c === void 0)) return
    l = 2
  }
  let u = n.drawRange,
    d = n.attributes.position,
    f = u.start * l,
    p = (u.start + u.count) * l
  ;(a !== null && ((f = Math.max(f, a.start * l)), (p = Math.min(p, (a.start + a.count) * l))),
    c === null
      ? d != null && ((f = Math.max(f, 0)), (p = Math.min(p, d.count)))
      : ((f = Math.max(f, 0)), (p = Math.min(p, c.count))))
  let m = p - f
  if (m < 0 || m === 1 / 0) return
  Ie.setup(i, r, s, n, c)
  let h,
    g = Ne
  if ((c !== null && ((h = Ce.get(c)), (g = Pe), g.setIndex(h)), i.isMesh))
    r.wireframe === !0
      ? (H.setLineWidth(r.wireframeLinewidth * z()), g.setMode(B.LINES))
      : g.setMode(B.TRIANGLES)
  else if (i.isLine) {
    let e = r.linewidth
    ;(e === void 0 && (e = 1),
      H.setLineWidth(e * z()),
      i.isLineSegments
        ? g.setMode(B.LINES)
        : i.isLineLoop
          ? g.setMode(B.LINE_LOOP)
          : g.setMode(B.LINE_STRIP))
  } else i.isPoints ? g.setMode(B.POINTS) : i.isSprite && g.setMode(B.TRIANGLES)
  if (i.isBatchedMesh) {
    if (be.get(`WEBGL_multi_draw`))
      g.renderMultiDraw(i._multiDrawStarts, i._multiDrawCounts, i._multiDrawCount)
    else {
      let e = i._multiDrawStarts,
        t = i._multiDrawCounts,
        n = i._multiDrawCount,
        a = c ? Ce.get(c).bytesPerElement : 1,
        o = W.get(r).currentProgram.getUniforms()
      for (let r = 0; r < n; r++) (o.setValue(B, `_gl_DrawID`, r), g.render(e[r] / a, t[r]))
    }
  } else if (i.isInstancedMesh) g.renderInstances(f, m, i.count)
  else if (n.isInstancedBufferGeometry) {
    let e = n._maxInstanceCount === void 0 ? 1 / 0 : n._maxInstanceCount,
      t = Math.min(n.instanceCount, e)
    g.renderInstances(f, m, t)
  } else g.render(f, m)
}
