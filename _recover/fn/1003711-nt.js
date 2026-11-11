function nt(e, t, n, r, i, a) {
  ;(D !== null && i.isNodeMaterial && D.setObject(e, i),
    e.onBeforeRender(T, t, n, r, i, a),
    e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse, e.matrixWorld),
    e.normalMatrix.getNormalMatrix(e.modelViewMatrix),
    i.onBeforeRender(T, t, n, r, e, a),
    i.transparent === !0 && i.side === 2 && i.forceSinglePass === !1
      ? ((i.side = 1),
        (i.needsUpdate = !0),
        T.renderBufferDirect(n, t, r, i, e, a),
        (i.side = 0),
        (i.needsUpdate = !0),
        T.renderBufferDirect(n, t, r, i, e, a),
        (i.side = 2))
      : T.renderBufferDirect(n, t, r, i, e, a),
    e.onAfterRender(T, t, n, r, i, a))
}
