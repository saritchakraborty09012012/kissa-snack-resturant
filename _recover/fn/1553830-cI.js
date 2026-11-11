function cI() {
  let { camera: e, size: t } = qx()
  return (
    Jx(({ clock: n }, r) => {
      let i = Math.min(r, 0.05),
        a = n.elapsedTime,
        o = t.width / t.height < 0.95,
        s = fD.pointer.x,
        c = fD.pointer.y
      ;((e.position.x = JE(e.position.x, s * 0.4, 2.4, i)),
        (e.position.y = JE(e.position.y, 0.35 - c * 0.2 + Math.sin(a * 0.3) * 0.03, 2.4, i)),
        e.lookAt(s * 0.1, 0.1, 0),
        (e.position.z = JE(e.position.z, o ? 6.6 : 5.4, 2.4, i)))
    }),
    null
  )
}
