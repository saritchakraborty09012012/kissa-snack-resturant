function ae(t, n, r, i) {
  let a = new Uint8Array(4),
    o = e.createTexture()
  ;(e.bindTexture(t, o),
    e.texParameteri(t, e.TEXTURE_MIN_FILTER, e.NEAREST),
    e.texParameteri(t, e.TEXTURE_MAG_FILTER, e.NEAREST))
  for (let o = 0; o < r; o++)
    t === e.TEXTURE_3D || t === e.TEXTURE_2D_ARRAY
      ? e.texImage3D(n, 0, e.RGBA, 1, 1, i, 0, e.RGBA, e.UNSIGNED_BYTE, a)
      : e.texImage2D(n + o, 0, e.RGBA, 1, 1, 0, e.RGBA, e.UNSIGNED_BYTE, a)
  return o
}
let oe = {}
;((oe[e.TEXTURE_2D] = ae(e.TEXTURE_2D, e.TEXTURE_2D, 1)),
  (oe[e.TEXTURE_CUBE_MAP] = ae(e.TEXTURE_CUBE_MAP, e.TEXTURE_CUBE_MAP_POSITIVE_X, 6)),
  (oe[e.TEXTURE_2D_ARRAY] = ae(e.TEXTURE_2D_ARRAY, e.TEXTURE_2D_ARRAY, 1, 1)),
  (oe[e.TEXTURE_3D] = ae(e.TEXTURE_3D, e.TEXTURE_3D, 1, 1)),
  a.setClear(0, 0, 0, 1),
  o.setClear(1),
  s.setClear(0),
  se(e.DEPTH_TEST),
  o.setFunc(3),
  me(!1),
  he(1),
  se(e.CULL_FACE),
  L(0))
