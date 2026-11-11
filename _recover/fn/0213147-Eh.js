function Eh(e) {
  switch (e) {
    case `beforetoggle`:
    case `cancel`:
    case `click`:
    case `close`:
    case `contextmenu`:
    case `copy`:
    case `cut`:
    case `auxclick`:
    case `dblclick`:
    case `dragend`:
    case `dragstart`:
    case `drop`:
    case `focusin`:
    case `focusout`:
    case `input`:
    case `invalid`:
    case `keydown`:
    case `keypress`:
    case `keyup`:
    case `mousedown`:
    case `mouseup`:
    case `paste`:
    case `pause`:
    case `play`:
    case `pointercancel`:
    case `pointerdown`:
    case `pointerup`:
    case `ratechange`:
    case `reset`:
    case `seeked`:
    case `submit`:
    case `toggle`:
    case `touchcancel`:
    case `touchend`:
    case `touchstart`:
    case `volumechange`:
    case `change`:
    case `selectionchange`:
    case `textInput`:
    case `compositionstart`:
    case `compositionend`:
    case `compositionupdate`:
    case `beforeblur`:
    case `afterblur`:
    case `beforeinput`:
    case `blur`:
    case `fullscreenchange`:
    case `fullscreenerror`:
    case `focus`:
    case `hashchange`:
    case `popstate`:
    case `select`:
    case `selectstart`:
      return 2
    case `drag`:
    case `dragenter`:
    case `dragexit`:
    case `dragleave`:
    case `dragover`:
    case `mousemove`:
    case `mouseout`:
    case `mouseover`:
    case `pointermove`:
    case `pointerout`:
    case `pointerover`:
    case `resize`:
    case `scroll`:
    case `touchmove`:
    case `wheel`:
    case `mouseenter`:
    case `mouseleave`:
    case `pointerenter`:
    case `pointerleave`:
      return 8
    case `message`:
      switch (Pe()) {
        case Fe:
          return 2
        case Ie:
          return 8
        case Le:
        case Re:
          return 32
        case ze:
          return 268435456
        default:
          return 32
      }
    default:
      return 32
  }
}
var Dh = !1,
  Oh = null,
  kh = null,
  Ah = null,
  jh = new Map(),
  Mh = new Map(),
  Nh = [],
  Ph =
    `mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(
      ` `,
    )
