function w(e, t) {
  return y(e) === !0 || (e.isFramebufferTexture && e.minFilter !== 1003 && e.minFilter !== 1006)
    ? Math.log2(Math.max(t.width, t.height)) + 1
    : e.mipmaps.length > 0
      ? e.mipmaps.length
      : e.isCompressedTexture && Array.isArray(e.image)
        ? t.mipmaps.length
        : 1
}
