function sn(e, t, n) {
  if (t != null && typeof t != `object`) throw Error(i(62))
  if (((e = e.style), n != null)) {
    for (var r in n)
      !n.hasOwnProperty(r) ||
        (t != null && t.hasOwnProperty(r)) ||
        (r.indexOf(`--`) === 0
          ? e.setProperty(r, ``)
          : r === `float`
            ? (e.cssFloat = ``)
            : (e[r] = ``),
        (zt = !0))
    for (var a in t) ((r = t[a]), t.hasOwnProperty(a) && n[a] !== r && (on(e, a, r), (zt = !0)))
  } else for (var o in t) t.hasOwnProperty(o) && on(e, o, t[o])
}
