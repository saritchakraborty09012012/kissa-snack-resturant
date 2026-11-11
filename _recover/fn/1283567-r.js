function r(e, t, n) {
  let r = n.num_faces() * 3,
    i = r * 4,
    a = e._malloc(i)
  t.GetTrianglesUInt32Array(n, i, a)
  let o = new Uint32Array(e.HEAPF32.buffer, a, r).slice()
  return (e._free(a), { array: o, itemSize: 1 })
}
