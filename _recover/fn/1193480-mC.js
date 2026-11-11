function mC(e, t) {
  let { parentStore: n, container: r } = e,
    i = Ob((e, n) => ({
      ...t,
      set: e,
      get: n,
      setEvents: (t) => e((e) => ({ ...e, events: { ...e.events, ...t } })),
    })),
    a = { current: n.getState() }
  return (
    i.setState((t) => gC(a.current, t, e)),
    { parentStore: n, container: r, portalStore: i, parentStateRef: a }
  )
}
