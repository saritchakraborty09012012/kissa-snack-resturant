function ur(e, t) {
  switch (e) {
    case `keyup`:
      return K.indexOf(t.keyCode) !== -1
    case `keydown`:
      return t.keyCode !== 229
    case `keypress`:
    case `mousedown`:
    case `focusout`:
      return !0
    default:
      return !1
  }
}
