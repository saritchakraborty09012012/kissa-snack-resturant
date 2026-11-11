function P(t) {
  let n = r.get(t)
  n.__depthDisposeCallback && n.__depthDisposeCallback()
  let i = t.depthTexture
  if ((i && i.renderTarget === t && k(i), t.isWebGLCubeRenderTarget))
    for (let t = 0; t < 6; t++) {
      if (Array.isArray(n.__webglFramebuffer[t]))
        for (let r = 0; r < n.__webglFramebuffer[t].length; r++)
          e.deleteFramebuffer(n.__webglFramebuffer[t][r])
      else e.deleteFramebuffer(n.__webglFramebuffer[t])
      n.__webglDepthbuffer && e.deleteRenderbuffer(n.__webglDepthbuffer[t])
    }
  else {
    if (Array.isArray(n.__webglFramebuffer))
      for (let t = 0; t < n.__webglFramebuffer.length; t++)
        e.deleteFramebuffer(n.__webglFramebuffer[t])
    else e.deleteFramebuffer(n.__webglFramebuffer)
    if (
      (n.__webglDepthbuffer && e.deleteRenderbuffer(n.__webglDepthbuffer),
      n.__webglMultisampledFramebuffer && e.deleteFramebuffer(n.__webglMultisampledFramebuffer),
      n.__webglColorRenderbuffer)
    )
      for (let t = 0; t < n.__webglColorRenderbuffer.length; t++)
        n.__webglColorRenderbuffer[t] && e.deleteRenderbuffer(n.__webglColorRenderbuffer[t])
    n.__webglDepthRenderbuffer && e.deleteRenderbuffer(n.__webglDepthRenderbuffer)
  }
  let a = t.textures
  for (let t = 0, n = a.length; t < n; t++) {
    let n = r.get(a[t])
    ;(n.__webglTexture && (e.deleteTexture(n.__webglTexture), o.memory.textures--),
      r.remove(a[t]))
  }
  r.remove(t)
}
let F = 0
