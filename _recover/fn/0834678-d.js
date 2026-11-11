function d(e, t, n, i) {
  let a = i.wireframe === !0,
    o = r[t.id]
  o === void 0 && ((o = {}), (r[t.id] = o))
  let s = e.isInstancedMesh === !0 ? e.id : 0,
    l = o[s]
  l === void 0 && ((l = {}), (o[s] = l))
  let u = l[n.id]
  u === void 0 && ((u = {}), (l[n.id] = u))
  let d = u[a]
  return (d === void 0 && ((d = f(c())), (u[a] = d)), d)
}
