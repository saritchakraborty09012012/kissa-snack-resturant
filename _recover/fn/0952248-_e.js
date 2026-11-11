function _e(t, i, a) {
  let o = i.isWebGLCubeRenderTarget === !0
  if ((n.bindFramebuffer(e.FRAMEBUFFER, t), !(i.depthTexture && i.depthTexture.isDepthTexture)))
    throw Error(
      `THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`,
    )
  let c = r.get(i.depthTexture)
  c.__renderTarget = i
  let l = o ? i.depthTexture.image[0] : i.depthTexture.image
  ;((c.__webglTexture && l.width === i.width && l.height === i.height) ||
    ((l.width = i.width), (l.height = i.height), (i.depthTexture.needsUpdate = !0)),
    o ? se(i.depthTexture, 0) : ie(i.depthTexture, 0))
  let u = c.__webglTexture,
    d = H(i),
    f = o ? e.TEXTURE_CUBE_MAP_POSITIVE_X + a : e.TEXTURE_2D,
    p = i.depthTexture.format === 1027 ? e.DEPTH_STENCIL_ATTACHMENT : e.DEPTH_ATTACHMENT
  if (i.depthTexture.format === 1026)
    U(i)
      ? s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER, p, f, u, 0, d)
      : e.framebufferTexture2D(e.FRAMEBUFFER, p, f, u, 0)
  else if (i.depthTexture.format === 1027)
    U(i)
      ? s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER, p, f, u, 0, d)
      : e.framebufferTexture2D(e.FRAMEBUFFER, p, f, u, 0)
  else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)
}
