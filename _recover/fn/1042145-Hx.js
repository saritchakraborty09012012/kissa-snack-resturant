function Hx(e, t) {
  if (e) {
    if (t) return Vx(e)
    ;(Ux(() => {
      var t
      return (t = e.renderLists) == null || t.dispose == null ? void 0 : t.dispose()
    }),
      Ux(() => (e.forceContextLoss == null ? void 0 : e.forceContextLoss())))
  }
}
