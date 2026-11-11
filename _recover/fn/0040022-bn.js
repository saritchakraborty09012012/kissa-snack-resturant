function bn(e, t) {
  var n = e.stateNode
  if (n === null) return null
  var r = n[gt] || null
  if (r === null) return null
  n = r[t]
  a: switch (t) {
    case `onClick`:
    case `onClickCapture`:
    case `onDoubleClick`:
    case `onDoubleClickCapture`:
    case `onMouseDown`:
    case `onMouseDownCapture`:
    case `onMouseMove`:
    case `onMouseMoveCapture`:
    case `onMouseUp`:
    case `onMouseUpCapture`:
    case `onMouseEnter`:
      ;((r = !r.disabled) ||
        ((e = e.type),
        (r = e !== `button` && e !== `input` && e !== `select` && e !== `textarea`)),
        (e = !r))
      break a
    default:
      e = !1
  }
  if (e) return null
  if (n && typeof n != `function`) throw Error(i(231, t, typeof n))
  return n
}
var xn =
    typeof window < `u` &&
    window.document !== void 0 &&
    window.document.createElement !== void 0,
  Sn = !1
if (xn)
  try {
    var Cn = {}
    ;(Object.defineProperty(Cn, 'passive', {
      get: function () {
        Sn = !0
      },
    }),
      window.addEventListener(`test`, Cn, Cn),
      window.removeEventListener(`test`, Cn, Cn))
  } catch {
    Sn = !1
  }
var wn = null,
  Tn = null,
  En = null
