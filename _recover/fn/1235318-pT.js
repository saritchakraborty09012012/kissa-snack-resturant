function pT(e, t, n) {
  let r = !1,
    i = !1,
    a = !1
  for (let e = 0, n = t.length; e < n; e++) {
    let n = t[e]
    if (
      (n.POSITION !== void 0 && (r = !0),
      n.NORMAL !== void 0 && (i = !0),
      n.COLOR_0 !== void 0 && (a = !0),
      r && i && a)
    )
      break
  }
  if (!r && !i && !a) return Promise.resolve(e)
  let o = [],
    s = [],
    c = []
  for (let l = 0, u = t.length; l < u; l++) {
    let u = t[l]
    if (r) {
      let t =
        u.POSITION === void 0 ? e.attributes.position : n.getDependency(`accessor`, u.POSITION)
      o.push(t)
    }
    if (i) {
      let t = u.NORMAL === void 0 ? e.attributes.normal : n.getDependency(`accessor`, u.NORMAL)
      s.push(t)
    }
    if (a) {
      let t = u.COLOR_0 === void 0 ? e.attributes.color : n.getDependency(`accessor`, u.COLOR_0)
      c.push(t)
    }
  }
  return Promise.all([Promise.all(o), Promise.all(s), Promise.all(c)]).then(function (t) {
    let n = t[0],
      o = t[1],
      s = t[2]
    return (
      r && (e.morphAttributes.position = n),
      i && (e.morphAttributes.normal = o),
      a && (e.morphAttributes.color = s),
      (e.morphTargetsRelative = !0),
      e
    )
  })
}
