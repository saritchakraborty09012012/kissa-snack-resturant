function cA({ ready: e }) {
  let t = (0, v.useRef)(),
    n = (0, v.useRef)(0),
    { size: r } = qx()
  return (
    Jx(({ clock: i }, a) => {
      if (!t.current) return
      let o = Math.min(a, 0.05),
        s = r.width / r.height < 0.85
      e && (n.current = GE(n.current + o * 1.8, 0, 1))
      let c = oA(n.current),
        l = i.elapsedTime
      ;((t.current.position.x = s ? 0.28 : 1.5),
        (t.current.position.y =
          (s ? -1.15 : -0.75) + Math.sin(l * 0.4) * 0.035 - (1 - c) * 0.5),
        (t.current.rotation.y =
          -0.28 + Math.sin(l * 0.17) * 0.09 + fD.pointer.x * (s ? 0.08 : 0.16)),
        (t.current.rotation.z = Math.sin(l * 0.24) * 0.012 - (1 - c) * 0.08),
        (t.current.rotation.x = 0.02 - fD.pointer.y * 0.03),
        t.current.scale.setScalar((s ? 0.72 : 1.15) * (0.9 + c * 0.1)))
    }),
    (0, K.jsx)(`group`, {
      ref: t,
      position: [1.5, -0.75, 0],
      rotation: [0, -0.28, 0],
      children: (0, K.jsx)(kD, {}),
    })
  )
}
