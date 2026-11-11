function Gb(e) {
  if (typeof requestAnimationFrame == `function`) {
    let t = requestAnimationFrame(e)
    return () => cancelAnimationFrame(t)
  }
  let t = setTimeout(e, 16)
  return () => clearTimeout(t)
}
