function we(e, t, n) {
  let r = {}
  if (e.getUint32(0, !0) != 20000630)
    throw `THREE.EXRLoader: provided file doesn't appear to be in OpenEXR format.`
  r.version = e.getUint8(4)
  let i = e.getUint8(5)
  ;((r.spec = {
    singleTile: !!(i & 2),
    longName: !!(i & 4),
    deepFormat: !!(i & 8),
    multiPart: !!(i & 16),
  }),
    (n.value = 8))
  for (var a = !0; a;) {
    var o = ue(t, n)
    if (o == 0) a = !1
    else {
      var s = ue(t, n),
        c = Ce(e, t, n, s, R(e, n))
      c === void 0
        ? console.warn(`EXRLoader.parse: skipped unknown header attribute type '${s}'.`)
        : (r[o] = c)
    }
  }
  if (i & -5)
    throw (
      console.error(`EXRHeader:`, r),
      `THREE.EXRLoader: provided file is currently unsupported.`
    )
  return r
}
