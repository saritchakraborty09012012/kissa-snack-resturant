function Qr(e) {
  if (Xr[e]) return Xr[e]
  if (!Yr[e]) return e
  var t = Yr[e],
    n
  for (n in t) if (t.hasOwnProperty(n) && n in Zr) return (Xr[e] = t[n])
  return e
}
var $r = Qr(`animationend`),
  ei = Qr(`animationiteration`),
  ti = Qr(`animationstart`),
  ni = Qr(`transitionrun`),
  ri = Qr(`transitionstart`),
  ii = Qr(`transitioncancel`),
  ai = Qr(`transitionend`),
  oi = new Map(),
  si =
    `abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(
      ` `,
    )
si.push(`scrollEnd`)
