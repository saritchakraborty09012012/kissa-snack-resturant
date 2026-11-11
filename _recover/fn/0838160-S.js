function S(e) {
  if (r[e.id] === void 0) return
  let t = r[e.id]
  for (let e in t) {
    let n = t[e]
    for (let e in n) {
      let t = n[e]
      for (let e in t) (u(t[e].object), delete t[e])
      delete n[e]
    }
  }
  delete r[e.id]
}
