function Jx(e, t = 0) {
  let n = Kx(),
    r = n.getState().internal.subscribe,
    i = Yb(e)
  return (Jb(() => r(i, t, n), [t, r, n]), null)
}
var Yx = new WeakMap(),
  Xx = (e) => typeof e == `function` && e?.prototype?.constructor === e
