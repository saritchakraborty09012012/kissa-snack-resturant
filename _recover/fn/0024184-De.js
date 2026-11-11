function De(e, t) {
  switch (e.tag) {
    case 26:
    case 27:
    case 5:
      return we(e.type)
    case 16:
      return we(`Lazy`)
    case 13:
      return e.child !== t && t !== null ? we(`Suspense Fallback`) : we(`Suspense`)
    case 19:
      return we(`SuspenseList`)
    case 0:
    case 15:
      return Ee(e.type, !1)
    case 11:
      return Ee(e.type.render, !1)
    case 1:
      return Ee(e.type, !0)
    case 31:
      return we(`Activity`)
    case 30:
      return we(`ViewTransition`)
    default:
      return ``
  }
}
