function lA({ ready: e }) {
  let t = (0, v.useRef)(),
    { size: n } = qx()
  return (
    Jx(({ clock: r }) => {
      if (!t.current) return
      let i = r.elapsedTime,
        a = n.width / n.height < 0.85,
        o = +!!e
      ;(t.current.scale.setScalar(o * (a ? 0.7 : 1)),
        (t.current.rotation.y = Math.sin(i * 0.2) * 0.1),
        (t.current.position.x = a ? 0.28 : 1.5),
        (t.current.position.y = a ? -0.18 : 1.36))
    }),
    (0, K.jsx)(`group`, {
      ref: t,
      position: [1.5, 1.36, 0],
      children: (0, K.jsx)(CD, {
        count: 16,
        height: 2.2,
        radius: 0.5,
        opacity: 0.16,
        speed: 0.11,
        spread: 0.6,
      }),
    })
  )
}
