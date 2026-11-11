function sI({
  type: e,
  position: t,
  scale: n,
  speed: r,
  rotation: i = [0, 0, 0],
  phase: a = 0,
}) {
  let o = (0, v.useRef)()
  return (
    Jx(({ clock: e }) => {
      if (!o.current) return
      let n = e.elapsedTime
      ;((o.current.position.y = t[1] + Math.sin(n * r + a) * 0.11),
        (o.current.rotation.y = i[1] + n * r * 0.35),
        (o.current.rotation.x = i[0] + Math.sin(n * r * 0.8 + a) * 0.14),
        (o.current.rotation.z = i[2] + Math.cos(n * r * 0.6 + a) * 0.08))
    }),
    (0, K.jsx)(`group`, {
      ref: o,
      position: t,
      scale: n,
      rotation: i,
      children: (0, K.jsx)(ND, { type: e }),
    })
  )
}
