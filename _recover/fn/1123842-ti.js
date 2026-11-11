function ti(e) {
  return (
    e.tag === 5 ||
    e.tag === 3 ||
    (el ? e.tag === 26 : !1) ||
    (ml ? e.tag === 27 && yl(e.type) : !1) ||
    e.tag === 4
  )
}
