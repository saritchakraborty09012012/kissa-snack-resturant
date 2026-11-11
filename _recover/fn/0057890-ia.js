function ia(e) {
  for (Xi = e.return; Xi;)
    switch (Xi.tag) {
      case 5:
      case 31:
      case 13:
        ea = !1
        return
      case 27:
      case 3:
        ea = !0
        return
      default:
        Xi = Xi.return
    }
}
