function Al(e, t, n, r) {
  var i = e.tag
  if (i === 5 || i === 6)
    ((i = e.stateNode),
      t
        ? (n.nodeType === 9
            ? n.body
            : n.nodeName === `HTML`
              ? n.ownerDocument.body
              : n
          ).insertBefore(i, t)
        : ((t = n.nodeType === 9 ? n.body : n.nodeName === `HTML` ? n.ownerDocument.body : n),
          t.appendChild(i),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = fn)),
      xl(e, r),
      (zt = !0))
  else if (
    i !== 4 &&
    (i === 27 && (xl(e, r), (r = null), Tp(e.type) && ((n = e.stateNode), (t = null))),
    (e = e.child),
    e !== null)
  )
    for (Al(e, t, n, r), e = e.sibling; e !== null;) (Al(e, t, n, r), (e = e.sibling))
}
