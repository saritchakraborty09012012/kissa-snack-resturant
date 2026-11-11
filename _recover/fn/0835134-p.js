function p(e, t, n, r) {
  let i = a.attributes,
    o = t.attributes,
    s = 0,
    c = n.getAttributes()
  for (let t in c)
    if (c[t].location >= 0) {
      let n = i[t],
        r = o[t]
      if (
        (r === void 0 &&
          (t === `instanceMatrix` && e.instanceMatrix && (r = e.instanceMatrix),
          t === `instanceColor` && e.instanceColor && (r = e.instanceColor)),
        n === void 0 || n.attribute !== r || (r && n.data !== r.data))
      )
        return !0
      s++
    }
  return a.attributesNum !== s || a.index !== r
}
