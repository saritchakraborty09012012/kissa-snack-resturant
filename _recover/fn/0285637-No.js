function No(e, t) {
  if (t.constructor === Float32Array) return e
  let n = Mo(t)
  if (n === void 0) throw Error(`THREE.MathUtils: Invalid component type.`)
  return Math.max(e / n, -1)
}
