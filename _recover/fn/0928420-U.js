function U() {
  try {
    e.texSubImage3D(...arguments)
  } catch (e) {
    no(`WebGLState:`, e)
  }
}
