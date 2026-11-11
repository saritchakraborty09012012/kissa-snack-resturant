function r(t, r, i) {
  switch ((n.calls++, r)) {
    case e.TRIANGLES:
      n.triangles += (t / 3) * i
      break
    case e.LINES:
      n.lines += (t / 2) * i
      break
    case e.LINE_STRIP:
      n.lines += i * (t - 1)
      break
    case e.LINE_LOOP:
      n.lines += i * t
      break
    case e.POINTS:
      n.points += i * t
      break
    default:
      no(`WebGLInfo: Unknown draw mode:`, r)
  }
}
