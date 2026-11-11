function Ex(e, t) {
  var n
  let r = e.__r3f,
    i = r && nx(r).getState(),
    a = r?.eventCount
  for (let n in t) {
    let a = t[n]
    if (bx.includes(n)) continue
    if (r && Tx.test(n)) {
      ;(typeof a == `function` ? (r.handlers[n] = a) : delete r.handlers[n],
        (r.eventCount = Object.keys(r.handlers).length))
      continue
    }
    if (a === void 0) continue
    if (n === `visible` && r != null && r.isHidden && r.previousVisible !== void 0) {
      r.previousVisible = a
      continue
    }
    let { root: s, key: c, target: l } = gx(e, n)
    if (l === void 0 && (typeof s != `object` || !s))
      throw Error(`R3F: Cannot set "${n}". Ensure it is an object before setting "${c}".`)
    if (l instanceof bs && a instanceof bs) l.mask = a.mask
    else if (l instanceof X && ax(a)) l.set(a)
    else if (
      typeof l == `object` &&
      l &&
      typeof l.set == `function` &&
      typeof l.copy == `function` &&
      a != null &&
      a.constructor &&
      l.constructor === a.constructor
    )
      l.copy(a)
    else if (typeof l == `object` && l && typeof l.set == `function` && Array.isArray(a))
      typeof l.fromArray == `function` ? l.fromArray(a) : l.set(...a)
    else if (typeof l == `object` && l && typeof l.set == `function` && typeof a == `number`)
      typeof l.setScalar == `function` ? l.setScalar(a) : l.set(a)
    else if (s instanceof Cp && c === `uniforms` && ux.obj(a)) {
      ux.obj(s.uniforms) || (s.uniforms = {})
      let e = s.uniforms,
        t = a
      for (let n in t) {
        let r = t[n],
          i = e[n]
        i ? Object.assign(i, r) : (e[n] = { ...r })
      }
    } else {
      var o
      ;((s[c] = a),
        i &&
          !i.linear &&
          wx.includes(c) &&
          (o = s[c]) != null &&
          o.isTexture &&
          s[c].format === 1023 &&
          s[c].type === 1009 &&
          (s[c].colorSpace = ga))
    }
  }
  if (
    r != null &&
    r.parent &&
    i != null &&
    i.internal &&
    (n = r.object) != null &&
    n.isObject3D &&
    a !== r.eventCount
  ) {
    let e = r.object,
      t = i.internal.interaction.indexOf(e)
    ;(t > -1 && i.internal.interaction.splice(t, 1),
      r.eventCount && e.raycast !== null && i.internal.interaction.push(e))
  }
  return (
    r &&
      r.props.attach === void 0 &&
      (r.object.isBufferGeometry
        ? (r.props.attach = `geometry`)
        : r.object.isMaterial && (r.props.attach = `material`)),
    r && Dx(r),
    e
  )
}
