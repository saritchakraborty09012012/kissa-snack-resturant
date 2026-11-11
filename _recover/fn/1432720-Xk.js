function Xk({
  blendFunction: e = 0,
  luminanceThreshold: t,
  luminanceSmoothing: n,
  mipmapBlur: r,
  radius: i,
  levels: a,
  resolutionScale: o,
  resolutionX: s,
  resolutionY: c,
  ...l
}) {
  let u = (0, v.useMemo)(
    () => [
      {
        luminanceThreshold: t,
        luminanceSmoothing: n,
        mipmapBlur: r,
        radius: i,
        levels: a,
        resolutionScale: o,
        resolutionX: s,
        resolutionY: c,
      },
    ],
    [t, n, r, i, a, o, s, c],
  )
  return (0, K.jsx)(Yk, { blendFunction: e, args: u, ...l })
}
var Zk = Pk(kO)
