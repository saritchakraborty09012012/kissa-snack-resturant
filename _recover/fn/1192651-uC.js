function uC(e) {
  ;((cC = requestAnimationFrame(uC)), (aC = !0), (sC = 0), tC(`before`, e), (oC = !0))
  for (let n of GS.values()) {
    var t
    ;((lC = n.store.getState()),
      lC.internal.active &&
        (lC.frameloop === `always` || lC.internal.frames > 0) &&
        !((t = lC.gl.xr) != null && t.isPresenting) &&
        (sC += iC(e, lC)))
  }
  if (((oC = !1), tC(`after`, e), sC === 0))
    return (tC(`tail`, e), (aC = !1), cancelAnimationFrame(cC))
}
