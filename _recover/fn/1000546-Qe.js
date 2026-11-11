function Qe(e, t, n, r) {
  if (e.visible === !1) return
  if (e.layers.test(t.layers)) {
    if (e.isGroup) n = e.renderOrder
    else if (e.isLOD) e.autoUpdate === !0 && e.update(t)
    else if (e.isLight) (x.pushLight(e), e.castShadow && x.pushShadow(e))
    else if (e.isSprite) {
      let i = t.isArrayCamera ? pe : fe
      if (!e.frustumCulled || e.intersectsFrustum(i)) {
        r && ge.setFromMatrixPosition(e.matrixWorld).applyMatrix4(me)
        let i = Te.update(e),
          a = e.material
        a.visible && b.push(e, i, a, n, ge.z, null, t)
      }
    } else if (e.isMesh || e.isLine || e.isPoints) {
      let i = t.isArrayCamera ? pe : fe
      if (!e.frustumCulled || e.intersectsFrustum(i)) {
        let i = Te.update(e),
          a = e.material
        if (
          (r &&
            (e.boundingSphere === void 0
              ? (i.boundingSphere === null && i.computeBoundingSphere(),
                ge.copy(i.boundingSphere.center))
              : (e.boundingSphere === null && e.computeBoundingSphere(),
                ge.copy(e.boundingSphere.center)),
            ge.applyMatrix4(e.matrixWorld).applyMatrix4(me)),
          Array.isArray(a))
        ) {
          let r = i.groups
          for (let o = 0, s = r.length; o < s; o++) {
            let s = r[o],
              c = a[s.materialIndex]
            c && c.visible && b.push(e, i, c, n, ge.z, s, t)
          }
        } else a.visible && b.push(e, i, a, n, ge.z, null, t)
      }
    }
  }
  let i = e.children
  for (let e = 0, a = i.length; e < a; e++) Qe(i[e], t, n, r)
}
