function aA({ bloom: e = 0.62, noise: t = 0.04 }) {
  let { size: n } = qx()
  if (rA === `off`) return null
  let r = `${Math.round(n.width)}x${Math.round(n.height)}`
  return (0, K.jsxs)(
    Jk,
    {
      multisampling: 0,
      disableNormalPass: !0,
      frameBufferType: Jr,
      children: [
        (0, K.jsx)(Xk, {
          mipmapBlur: !0,
          intensity: e,
          luminanceThreshold: 0.55,
          luminanceSmoothing: 0.35,
          radius: 0.72,
        }),
        rA === `full` && (0, K.jsx)($k, { eskil: !1, offset: 0.32, darkness: 0.52 }),
        rA === `full` && (0, K.jsx)(Qk, { premultiply: !0, opacity: t }),
      ],
    },
    r,
  )
}
