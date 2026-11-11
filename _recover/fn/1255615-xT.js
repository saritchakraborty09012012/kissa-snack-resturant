function xT(e, t, n) {
  let r = t.attributes,
    i = new cc()
  if (r.POSITION !== void 0) {
    let e = n.json.accessors[r.POSITION],
      t = e.min,
      a = e.max
    if (t !== void 0 && a !== void 0) {
      if ((i.set(new Y(t[0], t[1], t[2]), new Y(a[0], a[1], a[2])), e.normalized)) {
        let t = _T(nT[e.componentType])
        ;(i.min.multiplyScalar(t), i.max.multiplyScalar(t))
      }
    } else {
      console.warn(`THREE.GLTFLoader: Missing min/max properties for accessor POSITION.`)
      return
    }
  } else return
  let a = t.targets
  if (a !== void 0) {
    let e = new Y(),
      t = new Y()
    for (let r = 0, i = a.length; r < i; r++) {
      let i = a[r]
      if (i.POSITION !== void 0) {
        let r = n.json.accessors[i.POSITION],
          a = r.min,
          o = r.max
        if (a !== void 0 && o !== void 0) {
          if (
            (t.setX(Math.max(Math.abs(a[0]), Math.abs(o[0]))),
            t.setY(Math.max(Math.abs(a[1]), Math.abs(o[1]))),
            t.setZ(Math.max(Math.abs(a[2]), Math.abs(o[2]))),
            r.normalized)
          ) {
            let e = _T(nT[r.componentType])
            t.multiplyScalar(e)
          }
          e.max(t)
        } else
          console.warn(`THREE.GLTFLoader: Missing min/max properties for accessor POSITION.`)
      }
    }
    i.expandByVector(e)
  }
  e.boundingBox = i
  let o = new Wc()
  ;(i.getCenter(o.center), (o.radius = i.min.distanceTo(i.max) / 2), (e.boundingSphere = o))
}
