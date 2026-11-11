function jE({
  children: e,
  near: t = 0.1,
  far: n = 1e3,
  resolution: r = 256,
  frames: i = 1,
  map: a,
  background: o = !1,
  blur: s,
  backgroundBlurriness: c,
  backgroundIntensity: l,
  backgroundRotation: u,
  environmentIntensity: d,
  environmentRotation: f,
  scene: p,
  files: m,
  path: h,
  preset: g = void 0,
  extensions: _,
}) {
  let y = qx((e) => e.gl),
    b = qx((e) => e.scene),
    x = v.useRef(null),
    [S] = v.useState(() => new qs()),
    C = v.useMemo(() => {
      let e = new y_(r)
      return ((e.texture.type = ti), e)
    }, [r])
  ;(v.useEffect(
    () => () => {
      C.dispose()
    },
    [C],
  ),
    v.useLayoutEffect(() => {
      if (i === 1) {
        let e = y.autoClear
        ;((y.autoClear = !0), x.current.update(y, S), (y.autoClear = e))
      }
      return OE(o, p, b, C.texture, {
        backgroundBlurriness: s ?? c,
        backgroundIntensity: l,
        backgroundRotation: u,
        environmentIntensity: d,
        environmentRotation: f,
      })
    }, [e, S, C.texture, p, b, o, i, y]))
  let w = 1
  return (
    Jx(() => {
      if (i === 1 / 0 || w < i) {
        let e = y.autoClear
        ;((y.autoClear = !0), x.current.update(y, S), (y.autoClear = e), w++)
      }
    }),
    v.createElement(
      v.Fragment,
      null,
      pC(
        v.createElement(
          v.Fragment,
          null,
          e,
          v.createElement(`cubeCamera`, { ref: x, args: [t, n, C] }),
          m || g
            ? v.createElement(AE, {
                background: !0,
                files: m,
                preset: g,
                path: h,
                extensions: _,
              })
            : a
              ? v.createElement(kE, { background: !0, map: a, extensions: _ })
              : null,
        ),
        S,
      ),
    )
  )
}
