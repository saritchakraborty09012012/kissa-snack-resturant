function uA() {
  let { camera: e, size: t } = qx()
  return (
    Jx(({ clock: n }, r) => {
      let i = Math.min(r, 0.05),
        a = n.elapsedTime,
        o = t.width / t.height < 0.85,
        s = fD.pointer.x,
        c = fD.pointer.y,
        l = s * (o ? 0.15 : 0.35),
        u = 0.55 - c * 0.16 + Math.sin(a * 0.25) * 0.03,
        d = o ? 5.7 : 5.15
      ;((e.position.x = JE(e.position.x, l, 2.6, i)),
        (e.position.y = JE(e.position.y, u, 2.6, i)),
        (e.position.z = JE(e.position.z, d, 2.6, i)),
        e.lookAt(s * 0.12, o ? 0.45 : 0.55, 0))
    }),
    null
  )
}
