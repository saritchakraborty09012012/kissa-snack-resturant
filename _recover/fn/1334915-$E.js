function $E(e, { repeat: t = [1, 1], srgb: n = !0, aniso: r = 8 } = {}) {
  let i = new vd(e)
  return (
    (i.wrapS = i.wrapT = Fr),
    i.repeat.set(t[0], t[1]),
    (i.anisotropy = r),
    (i.colorSpace = n ? ga : ``),
    (i.needsUpdate = !0),
    i
  )
}
