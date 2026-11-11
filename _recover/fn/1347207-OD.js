function OD({
  radius: e = 1,
  scale: t = [1, 1, 1],
  amp: n = 0.12,
  freq: r = 2.2,
  seed: i = 0,
  detail: a = 48,
} = {}) {
  return (0, v.useMemo)(() => {
    let o = new op(e, a, Math.max(20, Math.floor(a * 0.6))),
      s = o.attributes.position,
      c = new Y()
    for (let e = 0; e < s.count; e++) {
      c.fromBufferAttribute(s, e)
      let a = 1 + (ZE(c.x * r + i * 3.1, c.z * r + c.y * r * 0.6 + i, 3) - 0.5) * n * 2
      s.setXYZ(e, c.x * a * t[0], c.y * a * t[1], c.z * a * t[2])
    }
    return (o.computeVertexNormals(), o)
  }, [e, t, n, r, i, a])
}
