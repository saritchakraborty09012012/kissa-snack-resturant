function QE(e = 512) {
  let t = document.createElement(`canvas`)
  return ((t.width = e), (t.height = e), { c: t, ctx: t.getContext(`2d`) })
}
