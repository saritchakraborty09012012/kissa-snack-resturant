function x() {
  T()
  for (let e in r) {
    let t = r[e]
    for (let e in t) {
      let n = t[e]
      for (let e in n) {
        let t = n[e]
        for (let e in t) (u(t[e].object), delete t[e])
        delete n[e]
      }
    }
    delete r[e]
  }
}
