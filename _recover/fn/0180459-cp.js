function cp(e) {
  switch (e) {
    case `css`:
    case `script`:
    case `font`:
    case `img`:
    case `image`:
    case `input`:
    case `link`:
      return !0
    default:
      return !1
  }
}
