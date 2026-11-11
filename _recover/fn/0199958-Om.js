function Om(e, t, n) {
  var r = Dm
  if (r && typeof t == `string` && t) {
    var i = Xt(t)
    ;((i = `link[rel="` + e + `"][href="` + i + `"]`),
      typeof n == `string` && (i += `[crossorigin="` + n + `"]`),
      Sm.has(i) ||
        (Sm.add(i),
        (e = { rel: e, crossOrigin: n, href: t }),
        r.querySelector(i) === null &&
          ((t = r.createElement(`link`)), ap(t, `link`, e), kt(t), r.head.appendChild(t))))
  }
}
