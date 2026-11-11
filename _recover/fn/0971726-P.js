function P(e, t) {
  ;(t === null
    ? e.matrixWorld.copy(e.matrix)
    : e.matrixWorld.multiplyMatrices(t.matrixWorld, e.matrix),
    e.matrixWorldInverse.copy(e.matrixWorld).invert())
}
this.updateCamera = function (e) {
  if (r === null) return
  let t = e.near,
    n = e.far
  ;(h.texture !== null &&
    (h.depthNear > 0 && (t = h.depthNear), h.depthFar > 0 && (n = h.depthFar)),
    (O.near = E.near = T.near = t),
    (O.far = E.far = T.far = n),
    (k !== O.near || A !== O.far) &&
      (r.updateRenderState({ depthNear: O.near, depthFar: O.far }), (k = O.near), (A = O.far)),
    (O.layers.mask = e.layers.mask | 6),
    (T.layers.mask = O.layers.mask & -5),
    (E.layers.mask = O.layers.mask & -3))
  let i = e.parent,
    a = O.cameras
  P(O, i)
  for (let e = 0; e < a.length; e++) P(a[e], i)
  ;(O.projectionMatrix.copy(T.projectionMatrix),
    O.projectionMatrixInverse.copy(T.projectionMatrixInverse),
    w === null && e.isPerspectiveCamera && (w = { camera: e, fov: e.fov, zoom: e.zoom }),
    F(e, O, i))
}
