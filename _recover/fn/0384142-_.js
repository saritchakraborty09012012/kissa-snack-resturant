function _(e, t, r) {
  ;((c[e] = c[t] = c[r] = 1),
    l.fromBufferAttribute(n, e),
    u.fromBufferAttribute(n, t),
    d.fromBufferAttribute(n, r),
    f.fromBufferAttribute(i, e),
    p.fromBufferAttribute(i, t),
    m.fromBufferAttribute(i, r),
    u.sub(l),
    d.sub(l),
    p.sub(f),
    m.sub(f))
  let a = 1 / (p.x * m.y - m.x * p.y)
  isFinite(a) &&
    (h.copy(u).multiplyScalar(m.y).addScaledVector(d, -p.y).multiplyScalar(a),
    g.copy(d).multiplyScalar(p.x).addScaledVector(u, -m.x).multiplyScalar(a),
    o[e].add(h),
    o[t].add(h),
    o[r].add(h),
    s[e].add(g),
    s[t].add(g),
    s[r].add(g))
}
let v = this.groups
v.length === 0 && (v = [{ start: 0, count: e.count }])
for (let t = 0, n = v.length; t < n; ++t) {
  let n = v[t],
    r = n.start,
    i = n.count
  for (let t = r, n = r + i; t < n; t += 3) _(e.getX(t + 0), e.getX(t + 1), e.getX(t + 2))
}
let y = new Y(),
  b = new Y(),
  x = new Y(),
  S = new Y()
