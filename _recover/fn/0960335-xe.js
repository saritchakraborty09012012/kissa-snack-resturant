function xe(e, t) {
  let n = e.colorSpace,
    r = e.format,
    i = e.type
  return (
    e.isCompressedTexture === !0 ||
      e.isVideoTexture === !0 ||
      (n !== `srgb-linear` &&
        n !== `` &&
        (Wo.getTransfer(n) === `srgb`
          ? (r !== 1023 || i !== 1009) &&
            q(
              `WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`,
            )
          : no(`WebGLTextures: Unsupported texture color space:`, n))),
    t
  )
}
