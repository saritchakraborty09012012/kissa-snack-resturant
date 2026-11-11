function Te() {
  try {
    e.texImage3D(...arguments)
  } catch (e) {
    no(`WebGLState:`, e)
  }
}
