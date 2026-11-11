function R(t, o, s) {
  let c = e.TEXTURE_2D
  ;((o.isDataArrayTexture || o.isCompressedArrayTexture) && (c = e.TEXTURE_2D_ARRAY),
    o.isData3DTexture && (c = e.TEXTURE_3D))
  let l = fe(t, o),
    u = o.source
  n.bindTexture(c, t.__webglTexture, e.TEXTURE0 + s)
  let f = r.get(u)
  if (u.version !== f.__version || l === !0) {
    if (
      (n.activeTexture(e.TEXTURE0 + s),
      !(typeof ImageBitmap < `u` && o.image instanceof ImageBitmap))
    ) {
      let t = Wo.getPrimaries(Wo.workingColorSpace),
        r = o.colorSpace === `` ? null : Wo.getPrimaries(o.colorSpace),
        i = o.colorSpace === `` || t === r ? e.NONE : e.BROWSER_DEFAULT_WEBGL
      ;(n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL, o.flipY),
        n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, o.premultiplyAlpha),
        n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL, i))
    }
    n.pixelStorei(e.UNPACK_ALIGNMENT, o.unpackAlignment)
    let t = v(o.image, !1, i.maxTextureSize)
    t = xe(o, t)
    let r = a.convert(o.format, o.colorSpace),
      p = a.convert(o.type),
      m = S(o.internalFormat, r, p, o.normalized, o.colorSpace, o.isVideoTexture)
    de(c, o)
    let h,
      g = o.mipmaps,
      _ = o.isVideoTexture !== !0,
      x = f.__version === void 0 || l === !0,
      T = u.dataReady,
      E = w(o, t)
    if (o.isDepthTexture)
      ((m = C(o.format === di, o.type)),
        x &&
          (_
            ? n.texStorage2D(e.TEXTURE_2D, 1, m, t.width, t.height)
            : n.texImage2D(e.TEXTURE_2D, 0, m, t.width, t.height, 0, r, p, null)))
    else if (o.isDataTexture) {
      if (g.length > 0) {
        _ && x && n.texStorage2D(e.TEXTURE_2D, E, m, g[0].width, g[0].height)
        for (let t = 0, i = g.length; t < i; t++)
          ((h = g[t]),
            _
              ? T && n.texSubImage2D(e.TEXTURE_2D, t, 0, 0, h.width, h.height, r, p, h.data)
              : n.texImage2D(e.TEXTURE_2D, t, m, h.width, h.height, 0, r, p, h.data))
        o.generateMipmaps = !1
      } else
        _
          ? (x && n.texStorage2D(e.TEXTURE_2D, E, m, t.width, t.height), T && L(o, t, r, p))
          : n.texImage2D(e.TEXTURE_2D, 0, m, t.width, t.height, 0, r, p, t.data)
    } else if (o.isCompressedTexture) {
      if (o.isCompressedArrayTexture) {
        _ && x && n.texStorage3D(e.TEXTURE_2D_ARRAY, E, m, g[0].width, g[0].height, t.depth)
        for (let i = 0, a = g.length; i < a; i++)
          if (((h = g[i]), o.format !== 1023)) {
            if (r !== null) {
              if (_) {
                if (T) {
                  if (o.layerUpdates.size > 0) {
                    let t = r_(h.width, h.height, o.format, o.type)
                    for (let a of o.layerUpdates) {
                      let o = h.data.subarray(
                        (a * t) / h.data.BYTES_PER_ELEMENT,
                        ((a + 1) * t) / h.data.BYTES_PER_ELEMENT,
                      )
                      n.compressedTexSubImage3D(
                        e.TEXTURE_2D_ARRAY,
                        i,
                        0,
                        0,
                        a,
                        h.width,
                        h.height,
                        1,
                        r,
                        o,
                      )
                    }
                  } else
                    n.compressedTexSubImage3D(
                      e.TEXTURE_2D_ARRAY,
                      i,
                      0,
                      0,
                      0,
                      h.width,
                      h.height,
                      t.depth,
                      r,
                      h.data,
                    )
                }
              } else
                n.compressedTexImage3D(
                  e.TEXTURE_2D_ARRAY,
                  i,
                  m,
                  h.width,
                  h.height,
                  t.depth,
                  0,
                  h.data,
                  0,
                  0,
                )
            } else
              q(
                `WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`,
              )
          } else
            _
              ? T &&
                n.texSubImage3D(
                  e.TEXTURE_2D_ARRAY,
                  i,
                  0,
                  0,
                  0,
                  h.width,
                  h.height,
                  t.depth,
                  r,
                  p,
                  h.data,
                )
              : n.texImage3D(
                  e.TEXTURE_2D_ARRAY,
                  i,
                  m,
                  h.width,
                  h.height,
                  t.depth,
                  0,
                  r,
                  p,
                  h.data,
                )
        o.layerUpdates.size > 0 && o.clearLayerUpdates()
      } else {
        _ && x && n.texStorage2D(e.TEXTURE_2D, E, m, g[0].width, g[0].height)
        for (let t = 0, i = g.length; t < i; t++)
          ((h = g[t]),
            o.format === 1023
              ? _
                ? T && n.texSubImage2D(e.TEXTURE_2D, t, 0, 0, h.width, h.height, r, p, h.data)
                : n.texImage2D(e.TEXTURE_2D, t, m, h.width, h.height, 0, r, p, h.data)
              : r === null
                ? q(
                    `WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`,
                  )
                : _
                  ? T &&
                    n.compressedTexSubImage2D(
                      e.TEXTURE_2D,
                      t,
                      0,
                      0,
                      h.width,
                      h.height,
                      r,
                      h.data,
                    )
                  : n.compressedTexImage2D(e.TEXTURE_2D, t, m, h.width, h.height, 0, h.data))
      }
    } else if (o.isDataArrayTexture) {
      if (_) {
        if ((x && n.texStorage3D(e.TEXTURE_2D_ARRAY, E, m, t.width, t.height, t.depth), T)) {
          if (o.layerUpdates.size > 0) {
            let i = r_(t.width, t.height, o.format, o.type)
            for (let a of o.layerUpdates) {
              let o = t.data.subarray(
                (a * i) / t.data.BYTES_PER_ELEMENT,
                ((a + 1) * i) / t.data.BYTES_PER_ELEMENT,
              )
              n.texSubImage3D(e.TEXTURE_2D_ARRAY, 0, 0, 0, a, t.width, t.height, 1, r, p, o)
            }
            o.clearLayerUpdates()
          } else
            n.texSubImage3D(
              e.TEXTURE_2D_ARRAY,
              0,
              0,
              0,
              0,
              t.width,
              t.height,
              t.depth,
              r,
              p,
              t.data,
            )
        }
      } else n.texImage3D(e.TEXTURE_2D_ARRAY, 0, m, t.width, t.height, t.depth, 0, r, p, t.data)
    } else if (o.isData3DTexture)
      _
        ? (x && n.texStorage3D(e.TEXTURE_3D, E, m, t.width, t.height, t.depth),
          T &&
            n.texSubImage3D(e.TEXTURE_3D, 0, 0, 0, 0, t.width, t.height, t.depth, r, p, t.data))
        : n.texImage3D(e.TEXTURE_3D, 0, m, t.width, t.height, t.depth, 0, r, p, t.data)
    else if (o.isFramebufferTexture) {
      if (x) {
        if (_) n.texStorage2D(e.TEXTURE_2D, E, m, t.width, t.height)
        else {
          let i = t.width,
            a = t.height
          for (let t = 0; t < E; t++)
            (n.texImage2D(e.TEXTURE_2D, t, m, i, a, 0, r, p, null), (i >>= 1), (a >>= 1))
        }
      }
    } else if (o.isHTMLTexture) {
      if (`texElementImage2D` in e) {
        let n = e.canvas
        if (
          (n.hasAttribute(`layoutsubtree`) || n.setAttribute(`layoutsubtree`, `true`),
          t.parentNode !== n)
        ) {
          ;(n.appendChild(t),
            d.add(o),
            (n.onpaint = (e) => {
              let t = e.changedElements
              for (let e of d) t.includes(e.image) && (e.needsUpdate = !0)
            }),
            n.requestPaint())
          return
        }
        if (e.texElementImage2D.length === 3) e.texElementImage2D(e.TEXTURE_2D, e.RGBA8, t)
        else {
          let n = e.RGBA,
            r = e.RGBA,
            i = e.UNSIGNED_BYTE
          e.texElementImage2D(e.TEXTURE_2D, 0, n, r, i, t)
        }
        ;(e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.LINEAR),
          e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE),
          e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE))
      }
    } else if (g.length > 0) {
      if (_ && x) {
        let t = Se(g[0])
        n.texStorage2D(e.TEXTURE_2D, E, m, t.width, t.height)
      }
      for (let t = 0, i = g.length; t < i; t++)
        ((h = g[t]),
          _
            ? T && n.texSubImage2D(e.TEXTURE_2D, t, 0, 0, r, p, h)
            : n.texImage2D(e.TEXTURE_2D, t, m, r, p, h))
      o.generateMipmaps = !1
    } else if (_) {
      if (x) {
        let r = Se(t)
        n.texStorage2D(e.TEXTURE_2D, E, m, r.width, r.height)
      }
      T && n.texSubImage2D(e.TEXTURE_2D, 0, 0, 0, r, p, t)
    } else n.texImage2D(e.TEXTURE_2D, 0, m, r, p, t)
    ;(y(o) && o.mipmapsAutoUpdate === !0 && b(c),
      (f.__version = u.version),
      o.onUpdate && o.onUpdate(o))
  }
  t.__version = o.version
}
