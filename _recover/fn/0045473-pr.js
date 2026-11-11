function pr(e, t) {
  switch (e) {
    case `compositionend`:
      return dr(t)
    case `keypress`:
      return t.which === 32 ? ((lr = !0), cr) : null
    case `textInput`:
      return ((e = t.data), e === cr && lr ? null : e)
    default:
      return null
  }
}
