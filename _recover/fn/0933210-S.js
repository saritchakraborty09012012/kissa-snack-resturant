function S(n, r, i, a, o, s = !1) {
  if (n !== null) {
    if (e[n] !== void 0) return e[n]
    q(`WebGLRenderer: Attempt to use non-existing WebGL internal format '` + n + `'`)
  }
  let c
  a &&
    ((c = t.get(`EXT_texture_norm16`)),
    c ||
      q(
        `WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`,
      ))
  let l = r
  if (
    (r === e.RED &&
      (i === e.FLOAT && (l = e.R32F),
      i === e.HALF_FLOAT && (l = e.R16F),
      i === e.UNSIGNED_BYTE && (l = e.R8),
      i === e.UNSIGNED_SHORT && c && (l = c.R16_EXT),
      i === e.SHORT && c && (l = c.R16_SNORM_EXT)),
    r === e.RED_INTEGER &&
      (i === e.UNSIGNED_BYTE && (l = e.R8UI),
      i === e.UNSIGNED_SHORT && (l = e.R16UI),
      i === e.UNSIGNED_INT && (l = e.R32UI),
      i === e.BYTE && (l = e.R8I),
      i === e.SHORT && (l = e.R16I),
      i === e.INT && (l = e.R32I)),
    r === e.RG &&
      (i === e.FLOAT && (l = e.RG32F),
      i === e.HALF_FLOAT && (l = e.RG16F),
      i === e.UNSIGNED_BYTE && (l = e.RG8),
      i === e.UNSIGNED_SHORT && c && (l = c.RG16_EXT),
      i === e.SHORT && c && (l = c.RG16_SNORM_EXT)),
    r === e.RG_INTEGER &&
      (i === e.UNSIGNED_BYTE && (l = e.RG8UI),
      i === e.UNSIGNED_SHORT && (l = e.RG16UI),
      i === e.UNSIGNED_INT && (l = e.RG32UI),
      i === e.BYTE && (l = e.RG8I),
      i === e.SHORT && (l = e.RG16I),
      i === e.INT && (l = e.RG32I)),
    r === e.RGB_INTEGER &&
      (i === e.UNSIGNED_BYTE && (l = e.RGB8UI),
      i === e.UNSIGNED_SHORT && (l = e.RGB16UI),
      i === e.UNSIGNED_INT && (l = e.RGB32UI),
      i === e.BYTE && (l = e.RGB8I),
      i === e.SHORT && (l = e.RGB16I),
      i === e.INT && (l = e.RGB32I)),
    r === e.RGBA_INTEGER &&
      (i === e.UNSIGNED_BYTE && (l = e.RGBA8UI),
      i === e.UNSIGNED_SHORT && (l = e.RGBA16UI),
      i === e.UNSIGNED_INT && (l = e.RGBA32UI),
      i === e.BYTE && (l = e.RGBA8I),
      i === e.SHORT && (l = e.RGBA16I),
      i === e.INT && (l = e.RGBA32I)),
    r === e.RGB &&
      (i === e.UNSIGNED_SHORT && c && (l = c.RGB16_EXT),
      i === e.SHORT && c && (l = c.RGB16_SNORM_EXT),
      i === e.UNSIGNED_INT_5_9_9_9_REV && (l = e.RGB9_E5),
      i === e.UNSIGNED_INT_10F_11F_11F_REV && (l = e.R11F_G11F_B10F)),
    r === e.RGBA)
  ) {
    let t = s ? va : Wo.getTransfer(o)
    ;(i === e.FLOAT && (l = e.RGBA32F),
      i === e.HALF_FLOAT && (l = e.RGBA16F),
      i === e.UNSIGNED_BYTE && (l = t === `srgb` ? e.SRGB8_ALPHA8 : e.RGBA8),
      i === e.UNSIGNED_SHORT && c && (l = c.RGBA16_EXT),
      i === e.SHORT && c && (l = c.RGBA16_SNORM_EXT),
      i === e.UNSIGNED_SHORT_4_4_4_4 && (l = e.RGBA4),
      i === e.UNSIGNED_SHORT_5_5_5_1 && (l = e.RGB5_A1))
  }
  return (
    (l === e.R16F ||
      l === e.R32F ||
      l === e.RG16F ||
      l === e.RG32F ||
      l === e.RGBA16F ||
      l === e.RGBA32F) &&
      t.get(`EXT_color_buffer_float`),
    l
  )
}
