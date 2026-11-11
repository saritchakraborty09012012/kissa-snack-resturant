function Lf(e, t, n, r, i) {
  if (t === `submit` && n && n.stateNode === i) {
    var a = If((i[gt] || null).action),
      o = r.submitter
    o &&
      ((t = (t = o[gt] || null) ? If(t.formAction) : o.getAttribute(`formAction`)),
      t !== null && ((a = t), (o = null)))
    var s = new Nn(`action`, `action`, null, r, i)
    e.push({
      event: s,
      listeners: [
        {
          instance: null,
          listener: function () {
            if (r.defaultPrevented) {
              if (Ef !== 0) {
                var e = new FormData(i, o)
                qs(n, { pending: !0, data: e, method: i.method, action: a }, null, e)
              }
            } else
              typeof a == `function` &&
                (s.preventDefault(),
                (e = new FormData(i, o)),
                qs(n, { pending: !0, data: e, method: i.method, action: a }, a, e))
          },
          currentTarget: i,
        },
      ],
    })
  }
}
for (var Rf = 0; Rf < si.length; Rf++) {
  var zf = si[Rf]
  ci(zf.toLowerCase(), `on` + (zf[0].toUpperCase() + zf.slice(1)))
}
;(ci($r, `onAnimationEnd`),
  ci(ei, `onAnimationIteration`),
  ci(ti, `onAnimationStart`),
  ci(`dblclick`, `onDoubleClick`),
  ci(`focusin`, `onFocus`),
  ci(`focusout`, `onBlur`),
  ci(ni, `onTransitionRun`),
  ci(ri, `onTransitionStart`),
  ci(ii, `onTransitionCancel`),
  ci(ai, `onTransitionEnd`),
  Pt(`onMouseEnter`, [`mouseout`, `mouseover`]),
  Pt(`onMouseLeave`, [`mouseout`, `mouseover`]),
  Pt(`onPointerEnter`, [`pointerout`, `pointerover`]),
  Pt(`onPointerLeave`, [`pointerout`, `pointerover`]),
  Nt(
    `onChange`,
    `change click focusin focusout input keydown keyup selectionchange`.split(` `),
  ),
  Nt(
    `onSelect`,
    `focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(
      ` `,
    ),
  ),
  Nt(`onBeforeInput`, [`compositionend`, `keypress`, `textInput`, `paste`]),
  Nt(`onCompositionEnd`, `compositionend focusout keydown keypress keyup mousedown`.split(` `)),
  Nt(
    `onCompositionStart`,
    `compositionstart focusout keydown keypress keyup mousedown`.split(` `),
  ),
  Nt(
    `onCompositionUpdate`,
    `compositionupdate focusout keydown keypress keyup mousedown`.split(` `),
  ))
var Bf =
    `abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(
      ` `,
    ),
  Vf = new Set(
    `beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(Bf),
  )
