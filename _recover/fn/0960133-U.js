function U(e) {
  let n = r.get(e)
  return (
    e.samples > 0 &&
    t.has(`WEBGL_multisampled_render_to_texture`) === !0 &&
    n.__useRenderToTexture !== !1
  )
}
