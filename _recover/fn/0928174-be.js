function be() {
  try {
    e.compressedTexImage2D(...arguments)
  } catch (e) {
    no(`WebGLState:`, e)
  }
}
