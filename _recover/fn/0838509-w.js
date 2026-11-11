function w(e) {
  for (let t in r) {
    let n = r[t],
      i = e.isInstancedMesh === !0 ? e.id : 0,
      a = n[i]
    if (a !== void 0) {
      for (let e in a) {
        let t = a[e]
        for (let e in t) (u(t[e].object), delete t[e])
        delete a[e]
      }
      ;(delete n[i], Object.keys(n).length === 0 && delete r[t])
    }
  }
}
