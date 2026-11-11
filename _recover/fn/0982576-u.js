function u(t, n, r, i) {
  if (f(t, n, r, i) === !0) {
    let n = t.__offset,
      r = t.value
    if (Array.isArray(r)) {
      let e = 0
      for (let n = 0; n < r.length; n++) {
        let i = r[n],
          a = h(i, !0)
        ;(d(i, t.__data, e), (e += a.storage / Float32Array.BYTES_PER_ELEMENT))
      }
    } else d(r, t.__data, 0)
    e.bufferSubData(e.UNIFORM_BUFFER, n, t.__data)
  }
}
