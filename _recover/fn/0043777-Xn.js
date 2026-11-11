function Xn() {
  return Yn
}
var Zn = jn(
    D({}, Pn, {
      key: function (e) {
        if (e.key) {
          var t = Kn[e.key] || e.key
          if (t !== `Unidentified`) return t
        }
        return e.type === `keypress`
          ? ((e = On(e)), e === 13 ? `Enter` : String.fromCharCode(e))
          : e.type === `keydown` || e.type === `keyup`
            ? qn[e.keyCode] || `Unidentified`
            : ``
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Xn,
      charCode: function (e) {
        return e.type === `keypress` ? On(e) : 0
      },
      keyCode: function (e) {
        return e.type === `keydown` || e.type === `keyup` ? e.keyCode : 0
      },
      which: function (e) {
        return e.type === `keypress`
          ? On(e)
          : e.type === `keydown` || e.type === `keyup`
            ? e.keyCode
            : 0
      },
    }),
  ),
  Qn = jn(
    D({}, zn, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
  ),
  $n = jn(D({}, Mn, { submitter: 0 })),
  er = jn(
    D({}, Pn, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Xn,
    }),
  ),
  tr = jn(D({}, Mn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })),
  nr = jn(
    D({}, zn, {
      deltaX: function (e) {
        return `deltaX` in e ? e.deltaX : `wheelDeltaX` in e ? -e.wheelDeltaX : 0
      },
      deltaY: function (e) {
        return `deltaY` in e
          ? e.deltaY
          : `wheelDeltaY` in e
            ? -e.wheelDeltaY
            : `wheelDelta` in e
              ? -e.wheelDelta
              : 0
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
  ),
  rr = jn(D({}, Mn, { newState: 0, oldState: 0, source: 0 })),
  K = [9, 13, 27, 32],
  ir = xn && `CompositionEvent` in window,
  ar = null
xn && `documentMode` in document && (ar = document.documentMode)
var or = xn && `TextEvent` in window && !ar,
  sr = xn && (!ir || (ar && 8 < ar && 11 >= ar)),
  cr = ` `,
  lr = !1
