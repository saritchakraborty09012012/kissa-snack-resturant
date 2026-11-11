function de(n, a) {
  if (
    (a.type === 1015 &&
      t.has(`OES_texture_float_linear`) === !1 &&
      (a.magFilter === 1006 ||
        a.magFilter === 1007 ||
        a.magFilter === 1005 ||
        a.magFilter === 1008 ||
        a.minFilter === 1006 ||
        a.minFilter === 1007 ||
        a.minFilter === 1005 ||
        a.minFilter === 1008) &&
      q(
        `WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`,
      ),
    e.texParameteri(n, e.TEXTURE_WRAP_S, ce[a.wrapS]),
    e.texParameteri(n, e.TEXTURE_WRAP_T, ce[a.wrapT]),
    (n === e.TEXTURE_3D || n === e.TEXTURE_2D_ARRAY) &&
      e.texParameteri(n, e.TEXTURE_WRAP_R, ce[a.wrapR]),
    e.texParameteri(n, e.TEXTURE_MAG_FILTER, le[a.magFilter]),
    e.texParameteri(n, e.TEXTURE_MIN_FILTER, le[a.minFilter]),
    a.compareFunction &&
      (e.texParameteri(n, e.TEXTURE_COMPARE_MODE, e.COMPARE_REF_TO_TEXTURE),
      e.texParameteri(n, e.TEXTURE_COMPARE_FUNC, ue[a.compareFunction])),
    t.has(`EXT_texture_filter_anisotropic`) === !0)
  ) {
    if (
      a.magFilter === 1003 ||
      (a.minFilter !== 1005 && a.minFilter !== 1008) ||
      (a.type === 1015 && t.has(`OES_texture_float_linear`) === !1)
    )
      return
    if (a.anisotropy > 1 || r.get(a).__currentAnisotropy) {
      let o = t.get(`EXT_texture_filter_anisotropic`)
      ;(e.texParameterf(
        n,
        o.TEXTURE_MAX_ANISOTROPY_EXT,
        Math.min(a.anisotropy, i.getMaxAnisotropy()),
      ),
        (r.get(a).__currentAnisotropy = a.anisotropy))
    }
  }
}
