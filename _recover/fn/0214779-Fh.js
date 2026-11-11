function Fh(e, t) {
  switch (e) {
    case `focusin`:
    case `focusout`:
      Oh = null
      break
    case `dragenter`:
    case `dragleave`:
      kh = null
      break
    case `mouseover`:
    case `mouseout`:
      Ah = null
      break
    case `pointerover`:
    case `pointerout`:
      jh.delete(t.pointerId)
      break
    case `gotpointercapture`:
    case `lostpointercapture`:
      Mh.delete(t.pointerId)
  }
}
