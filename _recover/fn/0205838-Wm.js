function Wm(e, t, n) {
  for (
    var r = n.querySelectorAll(
        `link[rel="stylesheet"][data-precedence],style[data-precedence]`,
      ),
      i = r.length ? r[r.length - 1] : null,
      a = i,
      o = 0;
    o < r.length;
    o++
  ) {
    var s = r[o]
    if (s.dataset.precedence === t) a = s
    else if (a !== i) break
  }
  a
    ? a.parentNode.insertBefore(e, a.nextSibling)
    : ((t = n.nodeType === 9 ? n.head : n), t.insertBefore(e, t.firstChild))
}
