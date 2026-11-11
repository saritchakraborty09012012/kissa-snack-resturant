function xe() {
  try {
    e.compressedTexSubImage3D(...arguments)
  } catch (e) {
    no(`WebGLState:`, e)
  }
}
