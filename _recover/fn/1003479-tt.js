function tt(e, t, n) {
  let r = t.isScene === !0 ? t.overrideMaterial : null
  for (let i = 0, a = e.length; i < a; i++) {
    let a = e[i],
      { object: o, geometry: s, group: c } = a,
      l = a.material
    ;(l.allowOverride === !0 && r !== null && (l = r),
      o.layers.test(n.layers) && nt(o, t, n, s, l, c))
  }
}
