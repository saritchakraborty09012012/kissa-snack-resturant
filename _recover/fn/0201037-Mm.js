function Mm(e, t) {
  wm.m(e, t)
  var n = Dm
  if (n && e) {
    var r = t && typeof t.as == `string` ? t.as : `script`,
      i = `link[rel="modulepreload"][as="` + Xt(r) + `"][href="` + Xt(e) + `"]`,
      a = i
    switch (r) {
      case `audioworklet`:
      case `paintworklet`:
      case `serviceworker`:
      case `sharedworker`:
      case `worker`:
      case `script`:
        a = Vm(e)
    }
    if (
      !xm.has(a) &&
      ((e = D({ rel: `modulepreload`, href: e }, t)), xm.set(a, e), n.querySelector(i) === null)
    ) {
      switch (r) {
        case `audioworklet`:
        case `paintworklet`:
        case `serviceworker`:
        case `sharedworker`:
        case `worker`:
        case `script`:
          if (n.querySelector(Hm(a))) return
      }
      ;((r = n.createElement(`link`)), ap(r, `link`, e), kt(r), n.head.appendChild(r))
    }
  }
}
