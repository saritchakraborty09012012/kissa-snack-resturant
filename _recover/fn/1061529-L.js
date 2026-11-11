function L(e) {
  for (lu = e.return; lu;)
    switch (lu.tag) {
      case 5:
      case 31:
      case 13:
        pu = !1
        return
      case 27:
      case 3:
        pu = !0
        return
      default:
        lu = lu.return
    }
}
