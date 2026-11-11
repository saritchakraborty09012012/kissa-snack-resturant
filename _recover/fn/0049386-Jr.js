function Jr(e, t) {
  var n = {}
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n[`Webkit` + e] = `webkit` + t),
    (n[`Moz` + e] = `moz` + t),
    n
  )
}
var Yr = {
    animationend: Jr(`Animation`, `AnimationEnd`),
    animationiteration: Jr(`Animation`, `AnimationIteration`),
    animationstart: Jr(`Animation`, `AnimationStart`),
    transitionrun: Jr(`Transition`, `TransitionRun`),
    transitionstart: Jr(`Transition`, `TransitionStart`),
    transitioncancel: Jr(`Transition`, `TransitionCancel`),
    transitionend: Jr(`Transition`, `TransitionEnd`),
  },
  Xr = {},
  Zr = {}
xn &&
  ((Zr = document.createElement(`div`).style),
  `AnimationEvent` in window ||
    (delete Yr.animationend.animation,
    delete Yr.animationiteration.animation,
    delete Yr.animationstart.animation),
  `TransitionEvent` in window || delete Yr.transitionend.transition)
