function aS(e, t) {
  if (
    !t &&
    typeof HTMLCanvasElement < `u` &&
    e instanceof HTMLCanvasElement &&
    e.parentElement
  ) {
    let { width: t, height: n, top: r, left: i } = e.parentElement.getBoundingClientRect()
    return { width: t, height: n, top: r, left: i }
  }
  return !t && typeof OffscreenCanvas < `u` && e instanceof OffscreenCanvas
    ? { width: e.width, height: e.height, top: 0, left: 0 }
    : { width: 0, height: 0, top: 0, left: 0, ...t }
}
