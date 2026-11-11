function _() {
  let a = new Y(),
    _ = new Y(),
    v = 0,
    y = (t - e) / n
  for (let c = 0; c <= i; c++) {
    let l = [],
      g = c / i,
      v = g * (t - e) + e
    for (let e = 0; e <= r; e++) {
      let t = e / r,
        i = t * s + o,
        c = Math.sin(i),
        m = Math.cos(i)
      ;((_.x = v * c),
        (_.y = -g * n + h),
        (_.z = v * m),
        u.push(_.x, _.y, _.z),
        a.set(c, y, m).normalize(),
        d.push(a.x, a.y, a.z),
        f.push(t, 1 - g),
        l.push(p++))
    }
    m.push(l)
  }
  for (let n = 0; n < r; n++)
    for (let r = 0; r < i; r++) {
      let a = m[r][n],
        o = m[r + 1][n],
        s = m[r + 1][n + 1],
        c = m[r][n + 1]
      ;((e > 0 || r !== 0) && (l.push(a, o, c), (v += 3)),
        (t > 0 || r !== i - 1) && (l.push(o, s, c), (v += 3)))
    }
  ;(c.addGroup(g, v, 0), (g += v))
}
