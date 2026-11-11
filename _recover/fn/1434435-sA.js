function sA({ type: e, position: t, scale: n = 1, speed: r = 0.3, rotation: i = [0, 0, 0] }) {
  let a = (0, v.useRef)()
  return (
    Jx(({ clock: e }) => {
      if (!a.current) return
      let n = e.elapsedTime
      ;((a.current.position.y = t[1] + Math.sin(n * r + t[0]) * 0.09),
        (a.current.rotation.y = i[1] + n * r * 0.3),
        (a.current.rotation.x = i[0] + Math.sin(n * r * 0.7) * 0.12))
    }),
    (0, K.jsx)(`group`, {
      ref: a,
      position: t,
      scale: n,
      rotation: i,
      children: (0, K.jsx)(ND, { type: e }),
    })
  )
}
