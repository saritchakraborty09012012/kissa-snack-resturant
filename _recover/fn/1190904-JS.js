function JS({ store: e, children: t, onCreated: n, rootElement: r }) {
  return (
    Jb(() => {
      let t = e.getState()
      ;(t.set((e) => ({ internal: { ...e.internal, active: !0 } })),
        n && n(t),
        e.getState().events.connected || t.events.connect == null || t.events.connect(r))
    }, []),
    (0, K.jsx)(Wx.Provider, { value: e, children: t })
  )
}
