function h(i) {
  l = e.getPointAt(i / t, l)
  let c = a.normals[i],
    f = a.binormals[i]
  for (let e = 0; e <= r; e++) {
    let t = (e / r) * Math.PI * 2,
      i = Math.sin(t),
      a = -Math.cos(t)
    ;((s.x = a * c.x + i * f.x),
      (s.y = a * c.y + i * f.y),
      (s.z = a * c.z + i * f.z),
      s.normalize(),
      d.push(s.x, s.y, s.z),
      (o.x = l.x + n * s.x),
      (o.y = l.y + n * s.y),
      (o.z = l.z + n * s.z),
      u.push(o.x, o.y, o.z))
  }
}
