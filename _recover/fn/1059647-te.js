function te(e, t) {
  switch (e.tag) {
    case 26:
    case 27:
    case 5:
      return F(e.type)
    case 16:
      return F(`Lazy`)
    case 13:
      return e.child !== t && t !== null ? F(`Suspense Fallback`) : F(`Suspense`)
    case 19:
      return F(`SuspenseList`)
    case 0:
    case 15:
      return ee(e.type, !1)
    case 11:
      return ee(e.type.render, !1)
    case 1:
      return ee(e.type, !0)
    case 31:
      return F(`Activity`)
    case 30:
      return F(`ViewTransition`)
    default:
      return ``
  }
}
