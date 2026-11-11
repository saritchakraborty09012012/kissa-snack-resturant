function m(t) {
  let r = !1,
    i = p(t)
  i === null ? g(o, s) : i && i.isColor && (g(i, 1), (r = !0))
  let c = e.xr.getEnvironmentBlendMode()
  ;(c === `additive`
    ? n.buffers.color.setClear(0, 0, 0, 1, a)
    : c === `alpha-blend` && n.buffers.color.setClear(0, 0, 0, 0, a),
    (e.autoClear || r) &&
      (n.buffers.depth.setTest(!0),
      n.buffers.depth.setMask(!0),
      n.buffers.color.setMask(!0),
      e.clear(e.autoClearColor, e.autoClearDepth, e.autoClearStencil)))
}
