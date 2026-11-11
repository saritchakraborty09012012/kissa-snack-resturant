function i(e, t, n, r, i, o) {
  let s = o.num_components(),
    c = n.num_points() * s,
    l = c * i.BYTES_PER_ELEMENT,
    u = a(e, i),
    d = e._malloc(l)
  t.GetAttributeDataArrayForAllPoints(n, o, u, l, d)
  let f = new i(e.HEAPF32.buffer, d, c).slice()
  return (e._free(d), { name: r, array: f, itemSize: s })
}
