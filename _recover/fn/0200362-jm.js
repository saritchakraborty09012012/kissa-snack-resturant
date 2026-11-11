function jm(e, t, n) {
  wm.L(e, t, n)
  var r = Dm
  if (r && e && t) {
    var i = `link[rel="preload"][as="` + Xt(t) + `"]`
    t === `image` && n && n.imageSrcSet
      ? ((i += `[imagesrcset="` + Xt(n.imageSrcSet) + `"]`),
        typeof n.imageSizes == `string` && (i += `[imagesizes="` + Xt(n.imageSizes) + `"]`))
      : (i += `[href="` + Xt(e) + `"]`)
    var a = i
    switch (t) {
      case `style`:
        a = Lm(e)
        break
      case `script`:
        a = Vm(e)
    }
    if (!(
      xm.has(a) ||
      ((e = D(
        { rel: `preload`, href: t === `image` && n && n.imageSrcSet ? void 0 : e, as: t },
        n,
      )),
      xm.set(a, e),
      r.querySelector(i) !== null ||
        (t === `style` && r.querySelector(Rm(a))) ||
        (t === `script` && r.querySelector(Hm(a))))
    )) {
      var o = r.createElement(`link`)
      ;(ap(o, `link`, e),
        t === `style` &&
          ((o[Ct] = !0),
          (o.onload = o.onerror =
            function () {
              At(o)
            })),
        kt(o),
        r.head.appendChild(o))
    }
  }
}
