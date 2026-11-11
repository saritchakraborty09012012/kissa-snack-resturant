function b(n, i, a, o, s, c) {
  if (n.visible === !1) return
  if (
    n.layers.test(s) &&
    (n.isMesh || n.isLine || n.isPoints) &&
    (n.castShadow || (n.receiveShadow && c === 3)) &&
    (!n.frustumCulled || n.intersectsFrustum(r))
  ) {
    n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse, n.matrixWorld)
    let r = t.update(n),
      s = n.material
    if (Array.isArray(s)) {
      let t = r.groups
      for (let l = 0, u = t.length; l < u; l++) {
        let u = t[l],
          d = s[u.materialIndex]
        if (d && d.visible) {
          let t = y(n, d, o, c)
          ;(n.onBeforeShadow(e, n, i, a, r, t, u),
            e.renderBufferDirect(a, null, r, t, n, u),
            n.onAfterShadow(e, n, i, a, r, t, u))
        }
      }
    } else if (s.visible) {
      let t = y(n, s, o, c)
      ;(n.onBeforeShadow(e, n, i, a, r, t, null),
        e.renderBufferDirect(a, null, r, t, n, null),
        n.onAfterShadow(e, n, i, a, r, t, null))
    }
  }
  let l = n.children
  for (let e = 0, t = l.length; e < t; e++) b(l[e], i, a, o, s, c)
}
