function pp(e) {
  switch (e) {
    case `http://www.w3.org/2000/svg`:
      return 1
    case `http://www.w3.org/1998/Math/MathML`:
      return 2
    default:
      return 0
  }
}
