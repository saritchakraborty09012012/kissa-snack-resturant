function vC(e) {
  let { handlePointer: t } = Px(e)
  return {
    priority: 1,
    enabled: !0,
    compute(e, t, n) {
      ;(t.pointer.set((e.offsetX / t.size.width) * 2 - 1, -(e.offsetY / t.size.height) * 2 + 1),
        t.raycaster.setFromCamera(t.pointer, t.camera))
    },
    connected: void 0,
    handlers: Object.keys(_C).reduce((e, n) => ({ ...e, [n]: t(n) }), {}),
    update: () => {
      var t
      let { events: n, internal: r } = e.getState()
      ;(t = r.lastEvent) != null &&
        t.current &&
        n.handlers &&
        n.handlers.onPointerMove(r.lastEvent.current)
    },
    connect: (t) => {
      let { set: n, events: r } = e.getState()
      if (
        (r.disconnect == null || r.disconnect(),
        n((e) => ({ events: { ...e.events, connected: t } })),
        r.handlers)
      )
        for (let e in r.handlers) {
          let n = r.handlers[e],
            [i, a] = _C[e]
          t.addEventListener(i, n, { passive: a })
        }
    },
    disconnect: () => {
      let { set: t, events: n } = e.getState()
      if (n.connected) {
        if (n.handlers)
          for (let e in n.handlers) {
            let t = n.handlers[e],
              [r] = _C[e]
            n.connected.removeEventListener(r, t)
          }
        t((e) => ({ events: { ...e.events, connected: void 0 } }))
      }
    },
  }
}
