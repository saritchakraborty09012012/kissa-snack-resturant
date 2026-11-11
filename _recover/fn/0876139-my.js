function my(e, t) {
  let n = {},
    r = e.getProgramParameter(t, e.ACTIVE_ATTRIBUTES)
  for (let i = 0; i < r; i++) {
    let r = e.getActiveAttrib(t, i),
      a = r.name,
      o = 1
    ;(r.type === e.FLOAT_MAT2 && (o = 2),
      r.type === e.FLOAT_MAT3 && (o = 3),
      r.type === e.FLOAT_MAT4 && (o = 4),
      (n[a] = { type: r.type, location: e.getAttribLocation(t, a), locationSize: o }))
  }
  return n
}
