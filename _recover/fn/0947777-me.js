function me(t, o, s) {
  if (o.image.length !== 6) return
  let c = fe(t, o),
    l = o.source
  n.bindTexture(e.TEXTURE_CUBE_MAP, t.__webglTexture, e.TEXTURE0 + s)
  let u = r.get(l)
  if (l.version !== u.__version || c === !0) {
    n.activeTexture(e.TEXTURE0 + s)
    let t = Wo.getPrimaries(Wo.workingColorSpace),
      r = o.colorSpace === `` ? null : Wo.getPrimaries(o.colorSpace),
      d = o.colorSpace === `` || t === r ? e.NONE : e.BROWSER_DEFAULT_WEBGL
    ;(n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL, o.flipY),
      n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, o.premultiplyAlpha),
      n.pixelStorei(e.UNPACK_ALIGNMENT, o.unpackAlignment),
      n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL, d))
    let f = o.isCompressedTexture || o.image[0].isCompressedTexture,
      p = o.image[0] && o.image[0].isDataTexture,
      m = []
    for (let e = 0; e < 6; e++)
      (!f && !p
        ? (m[e] = v(o.image[e], !0, i.maxCubemapSize))
        : (m[e] = p ? o.image[e].image : o.image[e]),
        (m[e] = xe(o, m[e])))
    let h = m[0],
      g = a.convert(o.format, o.colorSpace),
      _ = a.convert(o.type),
      x = S(o.internalFormat, g, _, o.normalized, o.colorSpace),
      T = o.isVideoTexture !== !0,
      E = u.__version === void 0 || c === !0,
      D = l.dataReady,
      O = w(o, h)
    de(e.TEXTURE_CUBE_MAP, o)
    let k
    if (o.isDepthTexture) {
      if (((x = C(o.format === di, o.type)), E)) {
        if (T) n.texStorage2D(e.TEXTURE_CUBE_MAP, 1, x, h.width, h.height)
        else
          for (let t = 0; t < 6; t++)
            n.texImage2D(
              e.TEXTURE_CUBE_MAP_POSITIVE_X + t,
              0,
              x,
              h.width,
              h.height,
              0,
              g,
              _,
              null,
            )
      }
    } else if (f) {
      T && E && n.texStorage2D(e.TEXTURE_CUBE_MAP, O, x, h.width, h.height)
      for (let t = 0; t < 6; t++) {
        k = m[t].mipmaps
        for (let r = 0; r < k.length; r++) {
          let i = k[r]
          o.format === 1023
            ? T
              ? D &&
                n.texSubImage2D(
                  e.TEXTURE_CUBE_MAP_POSITIVE_X + t,
                  r,
                  0,
                  0,
                  i.width,
                  i.height,
                  g,
                  _,
                  i.data,
                )
              : n.texImage2D(
                  e.TEXTURE_CUBE_MAP_POSITIVE_X + t,
                  r,
                  x,
                  i.width,
                  i.height,
                  0,
                  g,
                  _,
                  i.data,
                )
            : g === null
              ? q(
                  `WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`,
                )
              : T
                ? D &&
                  n.compressedTexSubImage2D(
                    e.TEXTURE_CUBE_MAP_POSITIVE_X + t,
                    r,
                    0,
                    0,
                    i.width,
                    i.height,
                    g,
                    i.data,
                  )
                : n.compressedTexImage2D(
                    e.TEXTURE_CUBE_MAP_POSITIVE_X + t,
                    r,
                    x,
                    i.width,
                    i.height,
                    0,
                    i.data,
                  )
        }
      }
    } else {
      if (((k = o.mipmaps), T && E)) {
        k.length > 0 && O++
        let t = Se(m[0])
        n.texStorage2D(e.TEXTURE_CUBE_MAP, O, x, t.width, t.height)
      }
      for (let t = 0; t < 6; t++)
        if (p) {
          T
            ? D &&
              n.texSubImage2D(
                e.TEXTURE_CUBE_MAP_POSITIVE_X + t,
                0,
                0,
                0,
                m[t].width,
                m[t].height,
                g,
                _,
                m[t].data,
              )
            : n.texImage2D(
                e.TEXTURE_CUBE_MAP_POSITIVE_X + t,
                0,
                x,
                m[t].width,
                m[t].height,
                0,
                g,
                _,
                m[t].data,
              )
          for (let r = 0; r < k.length; r++) {
            let i = k[r].image[t].image
            T
              ? D &&
                n.texSubImage2D(
                  e.TEXTURE_CUBE_MAP_POSITIVE_X + t,
                  r + 1,
                  0,
                  0,
                  i.width,
                  i.height,
                  g,
                  _,
                  i.data,
                )
              : n.texImage2D(
                  e.TEXTURE_CUBE_MAP_POSITIVE_X + t,
                  r + 1,
                  x,
                  i.width,
                  i.height,
                  0,
                  g,
                  _,
                  i.data,
                )
          }
        } else {
          T
            ? D && n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, 0, 0, 0, g, _, m[t])
            : n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, 0, x, g, _, m[t])
          for (let r = 0; r < k.length; r++) {
            let i = k[r]
            T
              ? D &&
                n.texSubImage2D(
                  e.TEXTURE_CUBE_MAP_POSITIVE_X + t,
                  r + 1,
                  0,
                  0,
                  g,
                  _,
                  i.image[t],
                )
              : n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, r + 1, x, g, _, i.image[t])
          }
        }
    }
    ;(y(o) && o.mipmapsAutoUpdate === !0 && b(e.TEXTURE_CUBE_MAP),
      (u.__version = l.version),
      o.onUpdate && o.onUpdate(o))
  }
  t.__version = o.version
}
