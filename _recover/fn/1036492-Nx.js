function Nx(e, t) {
  let { internal: n } = e.getState()
  ;((n.interaction = n.interaction.filter((e) => e !== t)),
    (n.initialHits = n.initialHits.filter((e) => e !== t)),
    n.hovered.forEach((e, r) => {
      ;(e.eventObject === t || e.object === t) && n.hovered.delete(r)
    }),
    n.capturedMap.forEach((e, r) => {
      jx(n.capturedMap, t, e, r)
    }))
}
