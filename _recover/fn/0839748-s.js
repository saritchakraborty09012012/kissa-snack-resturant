function s(n) {
  let i =
    n === 1016 && (t.has(`EXT_color_buffer_half_float`) || t.has(`EXT_color_buffer_float`))
  return !(
    n !== 1009 &&
    n !== 1015 &&
    !i &&
    r.convert(n) !== e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)
  )
}
