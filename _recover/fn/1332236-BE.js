function BE(e, t, n) {
  return v.useMemo(() => {
    if (t !== void 0) {
      if (IE(t)) return t
      if (t instanceof X) {
        let n = Array.from({ length: e * 3 }, () => LE(t)).flat()
        return Float32Array.from(n)
      }
      if (RE(t) || Array.isArray(t)) {
        let n = Array.from({ length: e * 3 }, () => zE(t)).flat()
        return Float32Array.from(n)
      }
      return Float32Array.from({ length: e }, () => t)
    }
    return Float32Array.from({ length: e }, n)
  }, [t])
}
var VE = v.forwardRef(
  (
    {
      noise: e = 1,
      count: t = 100,
      speed: n = 1,
      opacity: r = 1,
      scale: i = 1,
      size: a,
      color: o,
      children: s,
      ...c
    },
    l,
  ) => {
    v.useMemo(() => SS({ SparklesImplMaterial: FE }), [])
    let u = v.useRef(null),
      d = qx((e) => e.viewport.dpr),
      f = zE(i),
      p = v.useMemo(
        () =>
          Float32Array.from(Array.from({ length: t }, () => f.map(Fo.randFloatSpread)).flat()),
        [t, ...f],
      ),
      m = BE(t, a, Math.random),
      h = BE(t, r),
      g = BE(t, n),
      _ = BE(t * 3, e),
      y = BE(o === void 0 ? t * 3 : t, IE(o) ? o : new X(o), () => 1)
    return (
      Jx((e) => {
        u.current && u.current.material && (u.current.material.time = e.clock.elapsedTime)
      }),
      v.useImperativeHandle(l, () => u.current, []),
      v.createElement(
        `points`,
        OC({ key: `particle-${t}-${JSON.stringify(i)}` }, c, { ref: u }),
        v.createElement(
          `bufferGeometry`,
          null,
          v.createElement(`bufferAttribute`, { attach: `attributes-position`, args: [p, 3] }),
          v.createElement(`bufferAttribute`, { attach: `attributes-size`, args: [m, 1] }),
          v.createElement(`bufferAttribute`, { attach: `attributes-opacity`, args: [h, 1] }),
          v.createElement(`bufferAttribute`, { attach: `attributes-speed`, args: [g, 1] }),
          v.createElement(`bufferAttribute`, { attach: `attributes-color`, args: [y, 3] }),
          v.createElement(`bufferAttribute`, { attach: `attributes-noise`, args: [_, 3] }),
        ),
        s ||
          v.createElement(`sparklesImplMaterial`, {
            transparent: !0,
            pixelRatio: d,
            depthWrite: !1,
          }),
      )
    )
  },
)
