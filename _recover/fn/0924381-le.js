function le(t, n) {
  return (
    f[t] !== n &&
    (e.bindFramebuffer(t, n),
    (f[t] = n),
    t === e.DRAW_FRAMEBUFFER && (f[e.FRAMEBUFFER] = n),
    t === e.FRAMEBUFFER && (f[e.DRAW_FRAMEBUFFER] = n),
    !0)
  )
}
