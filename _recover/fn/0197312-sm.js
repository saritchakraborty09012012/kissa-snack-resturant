function sm(e, t, n) {
  if (t === ``) return null
  for (; e.nodeType !== 3;)
    if (
      ((e.nodeType !== 1 || e.nodeName !== `INPUT` || e.type !== `hidden`) && !n) ||
      ((e = fm(e.nextSibling)), e === null)
    )
      return null
  return e
}
