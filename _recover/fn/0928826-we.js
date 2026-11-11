function we() {
  try {
    e.texImage2D(...arguments)
  } catch (e) {
    no(`WebGLState:`, e)
  }
}
