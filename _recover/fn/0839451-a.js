function a() {
  if (i !== void 0) return i
  if (t.has(`EXT_texture_filter_anisotropic`) === !0) {
    let n = t.get(`EXT_texture_filter_anisotropic`)
    i = e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)
  } else i = 0
  return i
}
