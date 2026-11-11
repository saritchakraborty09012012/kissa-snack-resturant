function Mx(e, t, n) {
  let { internal: r } = e.getState()
  for (let e = 0; e < r.interaction.length; e++)
    r.interaction[e] === t && (r.interaction[e] = n)
  for (let e = 0; e < r.initialHits.length; e++)
    r.initialHits[e] === t && (r.initialHits[e] = n)
  ;(r.hovered.forEach((e, i) => {
    if (e.eventObject === t || e.object === t) {
      r.hovered.delete(i)
      let a = {
        ...e,
        eventObject: e.eventObject === t ? n : e.eventObject,
        object: e.object === t ? n : e.object,
      }
      r.hovered.set(Ax(a), a)
    }
  }),
    r.capturedMap.forEach((e) => {
      for (let [r, i] of Array.from(e)) {
        let { intersection: a } = i
        ;(r === t || a.object === t || a.eventObject === t) &&
          (r === t && e.delete(r),
          e.set(r === t ? n : r, {
            ...i,
            intersection: {
              ...a,
              object: a.object === t ? n : a.object,
              eventObject: a.eventObject === t ? n : a.eventObject,
            },
          }))
      }
    }))
}
