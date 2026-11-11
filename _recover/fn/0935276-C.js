function C(t, n) {
  let r
  return (
    t
      ? n === null || n === 1014 || n === 1020
        ? (r = e.DEPTH24_STENCIL8)
        : n === 1015
          ? (r = e.DEPTH32F_STENCIL8)
          : n === 1012 &&
            ((r = e.DEPTH24_STENCIL8),
            q(
              `DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`,
            ))
      : n === null || n === 1014 || n === 1020
        ? (r = e.DEPTH_COMPONENT24)
        : n === 1015
          ? (r = e.DEPTH_COMPONENT32F)
          : n === 1012 && (r = e.DEPTH_COMPONENT16),
    r
  )
}
