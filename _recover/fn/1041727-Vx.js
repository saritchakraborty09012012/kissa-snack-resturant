function Vx(e) {
  if ((e.hasInitialized == null ? void 0 : e.hasInitialized()) === !1) return
  let t = Ux(() => {
    var t
    return e.dispose
      ? e.dispose()
      : (t = e.renderLists) == null || t.dispose == null
        ? void 0
        : t.dispose()
  })
  if (Fx(t))
    return Promise.resolve(t)
      .catch((e) => console.warn(`[R3F] Error disposing renderer`, e))
      .then(() => Ux(() => (e.forceContextLoss == null ? void 0 : e.forceContextLoss())))
  Ux(() => (e.forceContextLoss == null ? void 0 : e.forceContextLoss()))
}
