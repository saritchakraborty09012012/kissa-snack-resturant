function m(e, t, n, r) {
  let i = {},
    o = t.attributes,
    s = 0,
    c = n.getAttributes()
  for (let t in c)
    if (c[t].location >= 0) {
      let n = o[t]
      n === void 0 &&
        (t === `instanceMatrix` && e.instanceMatrix && (n = e.instanceMatrix),
        t === `instanceColor` && e.instanceColor && (n = e.instanceColor))
      let r = {}
      ;((r.attribute = n), n && n.data && (r.data = n.data), (i[t] = r), s++)
    }
  ;((a.attributes = i), (a.attributesNum = s), (a.index = r))
}
