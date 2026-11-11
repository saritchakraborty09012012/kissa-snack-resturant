function P(e, t, n, r, i, a) {
  var o = new DataView(a.buffer),
    s = n[e.idx[0]].width,
    c = n[e.idx[0]].height,
    l = 3,
    u = Math.floor(s / 8),
    d = Math.ceil(s / 8),
    f = Math.ceil(c / 8),
    p = s - (d - 1) * 8,
    m = c - (f - 1) * 8,
    h = { value: 0 },
    g = Array(l),
    _ = Array(l),
    v = Array(l),
    y = Array(l),
    b = Array(l)
  for (let n = 0; n < l; ++n)
    ((b[n] = t[e.idx[n]]),
      (g[n] = n < 1 ? 0 : g[n - 1] + d * f),
      (_[n] = new Float32Array(64)),
      (v[n] = new Uint16Array(64)),
      (y[n] = new Uint16Array(d * 64)))
  for (let t = 0; t < f; ++t) {
    var x = 8
    t == f - 1 && (x = m)
    var S = 8
    for (let e = 0; e < d; ++e) {
      e == d - 1 && (S = p)
      for (let e = 0; e < l; ++e)
        (v[e].fill(0), (v[e][0] = i[g[e]++]), F(h, r, v[e]), ee(v[e], _[e]), te(_[e]))
      I(_)
      for (let t = 0; t < l; ++t) ne(_[t], y[t], e * 64)
    }
    let a = 0
    for (let r = 0; r < l; ++r) {
      let i = n[e.idx[r]].type
      for (let e = 8 * t; e < 8 * t + x; ++e) {
        a = b[r][e]
        for (let t = 0; t < u; ++t) {
          let n = t * 64 + (e & 7) * 8
          ;(o.setUint16(a + 0 * i, y[r][n + 0], !0),
            o.setUint16(a + 2 * i, y[r][n + 1], !0),
            o.setUint16(a + 4 * i, y[r][n + 2], !0),
            o.setUint16(a + 6 * i, y[r][n + 3], !0),
            o.setUint16(a + 8 * i, y[r][n + 4], !0),
            o.setUint16(a + 10 * i, y[r][n + 5], !0),
            o.setUint16(a + 12 * i, y[r][n + 6], !0),
            o.setUint16(a + 14 * i, y[r][n + 7], !0),
            (a += 16 * i))
        }
      }
      if (u != d)
        for (let e = 8 * t; e < 8 * t + x; ++e) {
          let t = b[r][e] + 8 * u * 2 * i,
            n = u * 64 + (e & 7) * 8
          for (let e = 0; e < S; ++e) o.setUint16(t + e * 2 * i, y[r][n + e], !0)
        }
    }
  }
  for (var C = new Uint16Array(s), o = new DataView(a.buffer), w = 0; w < l; ++w) {
    n[e.idx[w]].decoded = !0
    var T = n[e.idx[w]].type
    if (n[w].type == 2)
      for (var E = 0; E < c; ++E) {
        let e = b[w][E]
        for (var D = 0; D < s; ++D) C[D] = o.getUint16(e + D * 2 * T, !0)
        for (var D = 0; D < s; ++D) o.setFloat32(e + D * 2 * T, z(C[D]), !0)
      }
  }
}
