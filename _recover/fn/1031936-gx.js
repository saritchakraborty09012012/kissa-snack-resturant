function gx(e, t) {
  if (!t.includes(`-`) || t in e) return { root: e, key: t, target: e[t] }
  let n = e,
    r = t.split(`-`)
  for (let i of r) {
    if (typeof n != `object` || !n) {
      if (n !== void 0) {
        let e = r.slice(r.indexOf(i)).join(`-`)
        return { root: n, key: e, target: void 0 }
      }
      return { root: e, key: t, target: void 0 }
    }
    ;((t = i), (e = n), (n = n[t]))
  }
  return { root: e, key: t, target: n }
}
var _x = /-\d+$/
