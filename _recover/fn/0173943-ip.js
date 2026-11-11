function ip(e, t, n, r, a, o) {
  switch (n) {
    case `style`:
      sn(e, r, o)
      return
    case `dangerouslySetInnerHTML`:
      if (r != null) {
        if (typeof r != `object` || !(`__html` in r)) throw Error(i(61))
        if (((n = r.__html), n != null)) {
          if (a.children != null) throw Error(i(60))
          o?.__html !== n && (e.innerHTML = n)
        }
      }
      break
    case `children`:
      if (typeof r == `string`) rn(e, r)
      else if (typeof r == `number` || typeof r == `bigint`) rn(e, `` + r)
      else return
      break
    case `onScroll`:
      r != null && Uf(`scroll`, e)
      return
    case `onScrollEnd`:
      r != null && Uf(`scrollend`, e)
      return
    case `onClick`:
      r != null && (e.onclick = fn)
      return
    case `suppressContentEditableWarning`:
    case `suppressHydrationWarning`:
    case `innerHTML`:
    case `ref`:
      return
    case `innerText`:
    case `textContent`:
      return
    default:
      if (!Mt.hasOwnProperty(n))
        a: {
          if (
            n[0] === `o` &&
            n[1] === `n` &&
            ((a = n.endsWith(`Capture`)),
            (o = n.slice(2, a ? n.length - 7 : void 0)),
            (t = e[gt] || null),
            (t = t == null ? null : t[n]),
            typeof t == `function` && e.removeEventListener(o, t, a),
            typeof r == `function`)
          ) {
            ;(typeof t != `function` &&
              t !== null &&
              (n in e ? (e[n] = null) : e.hasAttribute(n) && e.removeAttribute(n)),
              e.addEventListener(o, r, a))
            break a
          }
          ;((zt = !0), n in e ? (e[n] = r) : !0 === r ? e.setAttribute(n, ``) : Vt(e, n, r))
        }
      return
  }
  zt = !0
}
