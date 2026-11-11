function se(e) {
  for (
    var r = e.viewer,
      i = { value: e.offset.value },
      a = new Uint16Array(e.width * e.scanlineBlockSize * (e.channels * e.type)),
      o = new Uint8Array(n),
      s = 0,
      l = Array(e.channels),
      u = 0;
    u < e.channels;
    u++
  )
    ((l[u] = {}),
      (l[u].start = s),
      (l[u].end = l[u].start),
      (l[u].nx = e.width),
      (l[u].ny = e.lines),
      (l[u].size = e.type),
      (s += l[u].nx * l[u].ny * l[u].size))
  var d = B(r, i),
    f = B(r, i)
  if (f >= n) throw `Something is wrong with PIZ_COMPRESSION BITMAP_SIZE`
  if (d <= f) for (var u = 0; u < f - d + 1; u++) o[u + d] = he(r, i)
  var p = new Uint16Array(t),
    m = c(o, p),
    h = R(r, i)
  k(e.array, r, i, h, a, s)
  for (var u = 0; u < e.channels; ++u)
    for (var g = l[u], _ = 0; _ < l[u].size; ++_)
      D(a, g.start + _, g.nx, g.size, g.ny, g.nx * g.size, m)
  A(p, a, s)
  for (var v = 0, y = new Uint8Array(a.buffer.byteLength), b = 0; b < e.lines; b++)
    for (var x = 0; x < e.channels; x++) {
      var g = l[x],
        S = g.nx * g.size,
        C = new Uint8Array(a.buffer, g.end * 2, S * 2)
      ;(y.set(C, v), (v += S * 2), (g.end += S))
    }
  return new DataView(y.buffer)
}
