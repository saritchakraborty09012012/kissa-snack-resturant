function F(e, t, n) {
  ;(n === null
    ? e.matrix.copy(t.matrixWorld)
    : (e.matrix.copy(n.matrixWorld), e.matrix.invert(), e.matrix.multiply(t.matrixWorld)),
    e.matrix.decompose(e.position, e.quaternion, e.scale),
    e.updateMatrixWorld(!0),
    e.projectionMatrix.copy(t.projectionMatrix),
    e.projectionMatrixInverse.copy(t.projectionMatrixInverse),
    e.isPerspectiveCamera &&
      ((e.fov = uo * 2 * Math.atan(1 / e.projectionMatrix.elements[5])), (e.zoom = 1)))
}
;((this.getCamera = function () {
  return O
}),
  (this.getFoveation = function () {
    if (d !== null || f !== null) return s
  }),
  (this.setFoveation = function (e) {
    ;((s = e),
      d !== null && (d.fixedFoveation = e),
      f !== null && f.fixedFoveation !== void 0 && (f.fixedFoveation = e))
  }),
  (this.hasDepthSensing = function () {
    return h.texture !== null
  }),
  (this.getDepthSensingMesh = function () {
    return h.getMesh(O)
  }),
  (this.getCameraTexture = function (e) {
    return g[e]
  }))
let ee = null
