function qF() {
  let { camera: e, size: t } = qx(),
    n = (0, v.useRef)(new Y(0, 0.2, 0)),
    r = (0, v.useRef)(new Y())
  return (
    Jx(({ clock: i }, a) => {
      let o = Math.min(a, 0.1),
        s = t.width / t.height < 0.95,
        c = mD(),
        l = i.elapsedTime,
        u = fD.pointer.x,
        d = fD.pointer.y
      fD.spin = JE(fD.spin, fD.spinTarget, 7, o)
      let f = c * dD + (s ? 0 : 0.55) + u * (s ? 0.12 : 0.4),
        p = (s ? 0.55 : 0.5) - d * (s ? 0.08 : 0.18) + Math.sin(l * 0.22) * 0.035,
        m = s ? 8.9 : 7.7 + Math.cos(l * 0.19) * 0.12
      ;(a > 0.2
        ? (e.position.set(f, p, m), (fD.spin = fD.spinTarget))
        : ((e.position.x = JE(e.position.x, f, 3.4, o)),
          (e.position.y = JE(e.position.y, p, 3.4, o)),
          (e.position.z = JE(e.position.z, m, 3.4, o))),
        r.current.set(e.position.x + u * 0.18, s ? 0.18 : 0.22, 0),
        a > 0.2 ? n.current.copy(r.current) : n.current.lerp(r.current, 1 - Math.exp(-4.2 * o)),
        e.lookAt(n.current))
    }),
    null
  )
}
