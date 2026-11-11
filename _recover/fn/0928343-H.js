function H() {
  try {
    e.texSubImage2D(...arguments)
  } catch (e) {
    no(`WebGLState:`, e)
  }
}
