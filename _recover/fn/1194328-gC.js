function gC(e, t, n) {
  let { parentStore: r, container: i, raycaster: a, pointer: o, events: s, size: c } = n,
    l
  if (t.camera && c) {
    let n = t.camera
    ;((l = e.viewport.getCurrentViewport(n, new Y(), c)), n !== e.camera && Ox(n, c))
  }
  return {
    ...e,
    ...t,
    scene: i,
    raycaster: a,
    pointer: o,
    mouse: o,
    previousRoot: r,
    events: { ...e.events, ...t.events, ...s },
    size: { ...e.size, ...c },
    viewport: { ...e.viewport, ...l },
  }
}
var _C = {
  onClick: [`click`, !1],
  onContextMenu: [`contextmenu`, !1],
  onDoubleClick: [`dblclick`, !1],
  onWheel: [`wheel`, !0],
  onPointerDown: [`pointerdown`, !0],
  onPointerUp: [`pointerup`, !0],
  onPointerLeave: [`pointerleave`, !0],
  onPointerMove: [`pointermove`, !0],
  onPointerCancel: [`pointercancel`, !0],
  onLostPointerCapture: [`lostpointercapture`, !0],
}
