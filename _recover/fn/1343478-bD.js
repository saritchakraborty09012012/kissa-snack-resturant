function bD(e, t) {
  Jx(() => {
    let n = pD(e)
    for (let e = 0; e < t.length; e++) {
      let r = t[e],
        i = r.ref?.current
      if (!i) continue
      let a = r.at ?? 0,
        o = KE(a, a + (r.dur ?? 0.26), n),
        s = r.from || [0, 0, 0],
        c = r.to || [0, 0, 0]
      i.position.set(qE(s[0], c[0], o), qE(s[1], c[1], o), qE(s[2], c[2], o))
      let l = r.scale ?? 1
      i.scale.setScalar(r.grow === !1 ? l : qE(0.001, l, o))
      let u = r.fromRot || [0, 0, 0],
        d = r.toRot || [0, 0, 0]
      ;(i.rotation.set(qE(u[0], d[0], o), qE(u[1], d[1], o), qE(u[2], d[2], o)),
        (i.visible = r.alwaysVisible || o > 0.002),
        r.onStep && r.onStep(o))
    }
  })
}
