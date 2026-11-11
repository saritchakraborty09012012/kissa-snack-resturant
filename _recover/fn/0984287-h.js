function h(e, t) {
  let n = { boundary: 0, storage: 0 }
  return (
    typeof e == `number` || typeof e == `boolean`
      ? ((n.boundary = 4), (n.storage = 4))
      : e.isVector2
        ? ((n.boundary = 8), (n.storage = 8))
        : e.isVector3 || e.isColor
          ? ((n.boundary = 16), (n.storage = 12))
          : e.isVector4
            ? ((n.boundary = 16), (n.storage = 16))
            : e.isMatrix3
              ? ((n.boundary = 16), (n.storage = 48))
              : e.isMatrix4
                ? ((n.boundary = 16), (n.storage = 64))
                : e.isTexture
                  ? q(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`)
                  : ArrayBuffer.isView(e)
                    ? ((n.boundary = 16), (n.storage = e.byteLength))
                    : q(`WebGLRenderer: Unsupported uniform value type.`, e),
    t === !0 && ((n.boundary = 16), (n.storage = Math.ceil(n.storage / 16) * 16)),
    n
  )
}
