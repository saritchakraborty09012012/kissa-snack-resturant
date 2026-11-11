function hC({ state: e = {}, children: t, container: n }) {
  let r = Kx(),
    { events: i, size: a, ...o } = e,
    [s] = v.useState(() => new ig()),
    [c] = v.useState(() => new J()),
    l = { parentStore: r, container: n, raycaster: s, pointer: c, events: i, size: a },
    u = Yb((e, t) => gC(e, t, l)),
    [d, f] = v.useState(() => mC(l, o))
  ;(d.parentStore !== r || d.container !== n) && f(mC(l, o))
  let { portalStore: p, parentStateRef: m } = d
  return (
    Jb(() => {
      let e = (e) => {
          ;((m.current = e), p.setState((t) => u.current(e, t)))
        },
        t = r.subscribe(e),
        n = r.getState()
      return (n !== m.current && e(n), t)
    }, [r, p, m]),
    (0, K.jsx)(K.Fragment, {
      children: WS.createPortal((0, K.jsx)(Wx.Provider, { value: p, children: t }), p, null),
    })
  )
}
