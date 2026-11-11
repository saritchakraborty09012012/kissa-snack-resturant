function s(e) {
  if (e !== void 0) {
    if (Array.isArray(e)) {
      let t = []
      for (let r = 0, i = e.length; r < i; r++) {
        let i = e[r]
        ;(n[i] === void 0 && q(`ObjectLoader: Undefined material`, i), t.push(n[i]))
      }
      return t
    }
    return (n[e] === void 0 && q(`ObjectLoader: Undefined material`, e), n[e])
  }
}
