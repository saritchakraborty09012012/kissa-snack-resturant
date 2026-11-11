function PT(e = !0, t = !0, n) {
  return (r) => {
    ;(n && n(r),
      e &&
        (MT || (MT = new DT()),
        MT.setDecoderPath(typeof e == `string` ? e : NT),
        r.setDRACOLoader(MT)),
      t && r.setMeshoptDecoder(typeof AT == `function` ? AT() : AT))
  }
}
var FT = (e, t, n, r) => Qx(ww, e, PT(t, n, r))
;((FT.preload = (e, t, n, r) => Qx.preload(ww, e, PT(t, n, r))),
  (FT.clear = (e) => Qx.clear(ww, e)),
  (FT.setDecoderPath = (e) => {
    NT = e
  }))
