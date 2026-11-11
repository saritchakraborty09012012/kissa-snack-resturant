function kr(e, t, n) {
  e === `focusin`
    ? (Dr(), (vr = t), (yr = n), vr.attachEvent(`onpropertychange`, Or))
    : e === `focusout` && Dr()
}
