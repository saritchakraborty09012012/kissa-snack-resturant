function C(e) {
  for (let t in r) {
    let n = r[t]
    for (let t in n) {
      let r = n[t]
      if (r[e.id] === void 0) continue
      let i = r[e.id]
      for (let e in i) (u(i[e].object), delete i[e])
      delete r[e.id]
    }
  }
}
