function m(e) {
  let t = e.uniforms,
    n = 0
  for (let e = 0, r = t.length; e < r; e++) {
    let r = Array.isArray(t[e]) ? t[e] : [t[e]]
    for (let i = 0, a = r.length; i < a; i++) {
      let a = r[i],
        o = Array.isArray(a.value) ? a.value : [a.value],
        s = Array.isArray(t[e]) || Array.isArray(a.value),
        c = n
      for (let e = 0, t = o.length; e < t; e++) {
        let t = o[e],
          r = h(t, s),
          i = n % 16,
          a = i % r.boundary,
          l = i + a
        ;((n += a),
          l !== 0 && 16 - l < r.storage && (n += 16 - l),
          e === 0 && (c = n),
          (n += r.storage))
      }
      ;((a.__data = new (
        a.type === `int` ? Int32Array : a.type === `uint` ? Uint32Array : Float32Array
      )((n - c) / Float32Array.BYTES_PER_ELEMENT)),
        (a.__offset = c))
    }
  }
  let r = n % 16
  return (r > 0 && (n += 16 - r), (e.__size = n), (e.__cache = {}), this)
}
