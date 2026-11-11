function lx(e) {
  return e.__r3f?.root.getState()
}
var ux = {
  obj: (e) => e === Object(e) && !ux.arr(e) && typeof e != `function`,
  fun: (e) => typeof e == `function`,
  str: (e) => typeof e == `string`,
  num: (e) => typeof e == `number`,
  boo: (e) => typeof e == `boolean`,
  und: (e) => e === void 0,
  nul: (e) => e === null,
  arr: (e) => Array.isArray(e),
  equ(e, t, { arrays: n = `shallow`, objects: r = `reference`, strict: i = !0 } = {}) {
    if (typeof e != typeof t || !!e != !!t) return !1
    if (ux.str(e) || ux.num(e) || ux.boo(e)) return e === t
    let a = ux.obj(e)
    if (a && r === `reference`) return e === t
    let o = ux.arr(e)
    if (o && n === `reference`) return e === t
    if ((o || a) && e === t) return !0
    let s
    for (s in e) if (!(s in t)) return !1
    if (a && n === `shallow` && r === `shallow`) {
      for (s in i ? t : e)
        if (!ux.equ(e[s], t[s], { strict: i, objects: `reference` })) return !1
    } else for (s in i ? t : e) if (e[s] !== t[s]) return !1
    if (ux.und(s)) {
      if (
        (o && e.length === 0 && t.length === 0) ||
        (a && Object.keys(e).length === 0 && Object.keys(t).length === 0)
      )
        return !0
      if (e !== t) return !1
    }
    return !0
  },
}
