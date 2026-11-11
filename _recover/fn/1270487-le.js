function le(e) {
  var t = e.viewer,
    n = { value: e.offset.value },
    r = new Uint8Array(e.width * e.lines * (e.channels * e.type * 2)),
    i = {
      version: ge(t, n),
      unknownUncompressedSize: ge(t, n),
      unknownCompressedSize: ge(t, n),
      acCompressedSize: ge(t, n),
      dcCompressedSize: ge(t, n),
      rleCompressedSize: ge(t, n),
      rleUncompressedSize: ge(t, n),
      rleRawSize: ge(t, n),
      totalAcUncompressedCount: ge(t, n),
      totalDcUncompressedCount: ge(t, n),
      acCompression: ge(t, n),
    }
  if (i.version < 2)
    throw `EXRLoader.parse: ` + ke.compression + ` version ` + i.version + ` is unsupported`
  for (var a = [], o = B(t, n) - 2; o > 0;) {
    var s = ue(t.buffer, n),
      c = he(t, n),
      l = (c >> 2) & 3,
      u = (c >> 4) - 1,
      d = new Int8Array([u])[0],
      f = he(t, n)
    ;(a.push({ name: s, index: d, type: f, compression: l }), (o -= s.length + 3))
  }
  for (var p = ke.channels, m = Array(e.channels), h = 0; h < e.channels; ++h) {
    var g = (m[h] = {}),
      _ = p[h]
    ;((g.name = _.name),
      (g.compression = 0),
      (g.decoded = !1),
      (g.type = _.pixelType),
      (g.pLinear = _.pLinear),
      (g.width = e.width),
      (g.height = e.lines))
  }
  for (var v = { idx: [, , ,] }, y = 0; y < e.channels; ++y)
    for (var g = m[y], h = 0; h < a.length; ++h) {
      var b = a[h]
      g.name == b.name &&
        ((g.compression = b.compression), b.index >= 0 && (v.idx[b.index] = y), (g.offset = y))
    }
  if (i.acCompressedSize > 0)
    switch (i.acCompression) {
      case 0:
        var x = new Uint16Array(i.totalAcUncompressedCount)
        k(e.array, t, n, i.acCompressedSize, x, i.totalAcUncompressedCount)
        break
      case 1:
        var S = e.array.slice(n.value, n.value + i.totalAcUncompressedCount),
          C = hw(S),
          x = new Uint16Array(C.buffer)
        n.value += i.totalAcUncompressedCount
    }
  if (i.dcCompressedSize > 0) {
    var w = { array: e.array, offset: n, size: i.dcCompressedSize },
      T = new Uint16Array(oe(w).buffer)
    n.value += i.dcCompressedSize
  }
  if (i.rleRawSize > 0) {
    var S = e.array.slice(n.value, n.value + i.rleCompressedSize),
      C = hw(S),
      E = N(C.buffer)
    n.value += i.rleCompressedSize
  }
  for (var D = 0, O = Array(m.length), h = 0; h < O.length; ++h) O[h] = []
  for (var A = 0; A < e.lines; ++A)
    for (var j = 0; j < m.length; ++j) (O[j].push(D), (D += m[j].width * e.type * 2))
  P(v, O, m, x, T, r)
  for (var h = 0; h < m.length; ++h) {
    var g = m[h]
    if (!g.decoded)
      switch (g.compression) {
        case 2:
          for (var M = 0, F = 0, A = 0; A < e.lines; ++A) {
            for (var ee = O[h][M], te = 0; te < g.width; ++te) {
              for (var I = 0; I < 2 * g.type; ++I) r[ee++] = E[F + I * g.width * g.height]
              F++
            }
            M++
          }
          break
        default:
          throw `EXRLoader.parse: unsupported channel compression`
      }
  }
  return new DataView(r.buffer)
}
