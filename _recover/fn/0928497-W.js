function W() {
  try {
    e.compressedTexSubImage2D(...arguments)
  } catch (e) {
    no(`WebGLState:`, e)
  }
}
