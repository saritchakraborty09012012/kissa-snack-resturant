function V() {
  try {
    e.compressedTexImage3D(...arguments)
  } catch (e) {
    no(`WebGLState:`, e)
  }
}
