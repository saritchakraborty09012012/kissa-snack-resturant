function to(e) {
  let t = e[0]
  if (typeof t == `string` && t.startsWith(`TSL:`)) {
    let t = e[1]
    t && t.isStackTrace
      ? (e[0] += ` ` + t.getLocation())
      : (e[1] = `Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`)
  }
  return e
}
