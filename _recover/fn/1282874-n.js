function n(e, t, n, a) {
  let o = a.attributeIDs,
    s = a.attributeTypes,
    c,
    l,
    u = t.GetEncodedGeometryType(n)
  if (u === e.TRIANGULAR_MESH) ((c = new e.Mesh()), (l = t.DecodeBufferToMesh(n, c)))
  else if (u === e.POINT_CLOUD)
    ((c = new e.PointCloud()), (l = t.DecodeBufferToPointCloud(n, c)))
  else throw Error(`THREE.DRACOLoader: Unexpected geometry type.`)
  if (!l.ok() || c.ptr === 0)
    throw Error(`THREE.DRACOLoader: Decoding failed: ` + l.error_msg())
  let d = { index: null, attributes: [] }
  for (let n in o) {
    let r = self[s[n]],
      l,
      u
    if (a.useUniqueIDs) ((u = o[n]), (l = t.GetAttributeByUniqueId(c, u)))
    else {
      if (((u = t.GetAttributeId(c, e[o[n]])), u === -1)) continue
      l = t.GetAttribute(c, u)
    }
    d.attributes.push(i(e, t, c, n, r, l))
  }
  return (u === e.TRIANGULAR_MESH && (d.index = r(e, t, c)), e.destroy(c), d)
}
