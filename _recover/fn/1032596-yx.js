function yx(e, t) {
  if (ux.str(t.props.attach)) {
    let { root: n, key: r } = gx(e.object, t.props.attach),
      i = t.previousAttach
    i === void 0 ? delete n[r] : (n[r] = i)
  } else t.previousAttach == null || t.previousAttach(e.object, t.object)
  delete t.previousAttach
}
var bx = [...px, `args`, `dispose`, `attach`, `object`, `onUpdate`, `dispose`],
  xx = new Map()
