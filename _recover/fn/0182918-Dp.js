function Dp(e, t) {
  var n = e
  e = 0
  do {
    var r = n.nextSibling
    if (
      (n.nodeType === 1
        ? t
          ? ((n._stashedDisplay = n.style.display), (n.style.display = `none`))
          : ((n.style.display = n._stashedDisplay || ``),
            n.getAttribute(`style`) === `` && n.removeAttribute(`style`))
        : n.nodeType === 3 &&
          (t
            ? ((n._stashedText = n.nodeValue), (n.nodeValue = ``))
            : (n.nodeValue = n._stashedText || ``)),
      r && r.nodeType === 8)
    ) {
      if (((n = r.data), n === `/$`)) {
        if (e === 0) break
        e--
      } else (n !== `$` && n !== `$?` && n !== `$~` && n !== `$!`) || e++
    }
    n = r
  } while (n)
}
