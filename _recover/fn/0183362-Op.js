function Op(e, t, n) {
  if (
    ((t = CSS.escape(t) === t ? t : `r-` + btoa(t).replace(/=/g, ``)),
    (e.style.viewTransitionName = t),
    n != null && (e.style.viewTransitionClass = n),
    (n = getComputedStyle(e)),
    n.display === `inline`)
  ) {
    if (((t = e.getClientRects()), t.length === 1)) var r = 1
    else
      for (var i = (r = 0); i < t.length; i++) {
        var a = t[i]
        0 < a.width && 0 < a.height && r++
      }
    r === 1 &&
      ((e = e.style),
      (e.display = t.length === 1 ? `inline-block` : `block`),
      (e.marginTop = `-` + n.paddingTop),
      (e.marginBottom = `-` + n.paddingBottom))
  }
}
