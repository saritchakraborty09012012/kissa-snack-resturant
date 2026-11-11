function v(e, t, n) {
  let r = 1,
    i = Se(e)
  if (((i.width > n || i.height > n) && (r = n / Math.max(i.width, i.height)), r < 1)) {
    if (
      (typeof HTMLImageElement < `u` && e instanceof HTMLImageElement) ||
      (typeof HTMLCanvasElement < `u` && e instanceof HTMLCanvasElement) ||
      (typeof ImageBitmap < `u` && e instanceof ImageBitmap) ||
      (typeof VideoFrame < `u` && e instanceof VideoFrame)
    ) {
      let n = Math.floor(r * i.width),
        a = Math.floor(r * i.height)
      f === void 0 && (f = _(n, a))
      let o = t ? _(n, a) : f
      return (
        (o.width = n),
        (o.height = a),
        o.getContext(`2d`).drawImage(e, 0, 0, n, a),
        q(
          `WebGLRenderer: Texture has been resized from (` +
            i.width +
            `x` +
            i.height +
            `) to (` +
            n +
            `x` +
            a +
            `).`,
        ),
        o
      )
    }
    return (
      `data` in e &&
        q(`WebGLRenderer: Image in DataTexture is too big (` + i.width + `x` + i.height + `).`),
      e
    )
  }
  return e
}
