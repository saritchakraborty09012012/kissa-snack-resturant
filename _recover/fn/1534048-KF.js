function KF({ index: e }) {
  let t = WF[e],
    n = (0, v.useRef)(),
    r = (0, v.useRef)(!1),
    { size: i } = qx()
  return (
    Jx(({ clock: t }) => {
      let a = n.current
      if (!a) return
      let o = t.elapsedTime
      r.current = i.width / i.height < 0.95
      let s = r.current ? 0 : 0.95
      ;((a.position.x = e * dD + s),
        (a.position.y = -0.08 + Math.sin(o * 0.45 + e * 1.7) * 0.045),
        (a.rotation.y =
          Math.sin(o * 0.16 + e) * 0.06 +
          fD.spin * Math.PI * 2 +
          fD.pointer.x * (r.current ? 0.04 : 0.09)),
        (a.rotation.z = Math.sin(o * 0.3 + e) * 0.008),
        (a.rotation.x = -fD.pointer.y * 0.02),
        a.scale.setScalar(r.current ? 0.82 : 1),
        (a.visible = Math.abs(e - mD()) < 1.9),
        a.updateMatrixWorld())
    }),
    (0, K.jsx)(`group`, { ref: n, children: (0, K.jsx)(t, { index: e }) })
  )
}
