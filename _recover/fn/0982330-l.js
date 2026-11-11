function l(t) {
  let n = i[t.id],
    r = t.uniforms,
    a = t.__cache
  e.bindBuffer(e.UNIFORM_BUFFER, n)
  for (let e = 0, t = r.length; e < t; e++) {
    let t = r[e]
    if (Array.isArray(t)) for (let n = 0, r = t.length; n < r; n++) u(t[n], e, n, a)
    else u(t, e, 0, a)
  }
  e.bindBuffer(e.UNIFORM_BUFFER, null)
}
