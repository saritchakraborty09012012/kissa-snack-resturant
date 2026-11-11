function jo(e, t, n, r, i) {
  let a = Math.cos,
    o = Math.sin,
    s = a(n / 2),
    c = o(n / 2),
    l = a((t + r) / 2),
    u = o((t + r) / 2),
    d = a((t - r) / 2),
    f = o((t - r) / 2),
    p = a((r - t) / 2),
    m = o((r - t) / 2)
  switch (i) {
    case `XYX`:
      e.set(s * u, c * d, c * f, s * l)
      break
    case `YZY`:
      e.set(c * f, s * u, c * d, s * l)
      break
    case `ZXZ`:
      e.set(c * d, c * f, s * u, s * l)
      break
    case `XZX`:
      e.set(s * u, c * m, c * p, s * l)
      break
    case `YXY`:
      e.set(c * p, s * u, c * m, s * l)
      break
    case `ZYZ`:
      e.set(c * m, c * p, s * u, s * l)
      break
    default:
      q(`MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: ` + i)
  }
}
