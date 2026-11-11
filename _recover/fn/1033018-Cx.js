function Cx(e, t) {
  let n = {}
  for (let r in t)
    if (!bx.includes(r) && !ux.equ(t[r], e.props[r])) {
      n[r] = t[r]
      for (let e in t) e.startsWith(`${r}-`) && (n[e] = t[e])
    }
  for (let r in e.props) {
    if (bx.includes(r) || t.hasOwnProperty(r)) continue
    let { root: i, key: a } = gx(e.object, r)
    if (i.constructor && i.constructor.length === 0) {
      let e = Sx(i)
      ux.und(e) || (n[r] = e[a])
    } else n[r] = 0
  }
  return n
}
var wx = [`map`, `emissiveMap`, `sheenColorMap`, `specularColorMap`, `envMap`],
  Tx = /^on(Pointer|Click|DoubleClick|ContextMenu|Wheel)/
