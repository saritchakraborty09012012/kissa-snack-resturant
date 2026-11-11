function dC(e, t = 1) {
  var n
  if (!e) return GS.forEach((e) => dC(e.store.getState(), t))
  ;((n = e.gl.xr) != null && n.isPresenting) ||
    !e.internal.active ||
    e.frameloop === `never` ||
    (t > 1
      ? (e.internal.frames = Math.min(60, e.internal.frames + t))
      : oC
        ? (e.internal.frames = 2)
        : (e.internal.frames = 1),
    aC || ((aC = !0), requestAnimationFrame(uC)))
}
