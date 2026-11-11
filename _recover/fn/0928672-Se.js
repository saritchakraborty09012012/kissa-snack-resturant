function Se() {
  try {
    e.texStorage2D(...arguments)
  } catch (e) {
    no(`WebGLState:`, e)
  }
}
