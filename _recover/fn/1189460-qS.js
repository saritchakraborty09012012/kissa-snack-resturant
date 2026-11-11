function qS(e) {
  let t = GS.get(e),
    n = t?.fiber,
    r = t?.store
  t && console.warn(`R3F.createRoot should only be called once!`)
  let i = typeof reportError == `function` ? reportError : console.error,
    a = r || Gx(dC, fC),
    o = n || WS.createContainer(a, $x, null, !1, null, ``, i, i, i, null),
    s = t || {
      fiber: o,
      store: a,
      state: { status: `open` },
      ready: Ix(void 0),
      configuration: {},
      ownsRenderer: !1,
    }
  t || GS.set(e, s)
  let c = !1
  return {
    get ready() {
      return s.ready
    },
    configure(t = {}) {
      if (!KS(s, { type: `use` }))
        return Lx(Error(`R3F: Cannot configure a root after disposal has started.`))
      let n = s.ready,
        { promise: r, resolve: i, reject: o } = Rx()
      s.ready = r
      let c = (n) => {
          let r = a.getState()
          ;(r.gl || ((s.ownsRenderer = !zx(t.gl)), r.set({ gl: n })),
            oS(s, e, t),
            !s.unwatchDpr &&
              (t.dpr === void 0 || Array.isArray(t.dpr)) &&
              (s.unwatchDpr = sS(s)),
            i(this))
        },
        l = () => {
          try {
            let n = a.getState().gl ?? Bx(e, t.gl)
            Fx(n) ? Promise.resolve(n).then(c).catch(o) : c(n)
          } catch (e) {
            o(e)
          }
        }
      return (n.status === `pending` ? n.then(l, o) : l(), r)
    },
    render(t) {
      if (!KS(s, { type: `use` })) return a
      if (
        (!a.getState().gl && s.ready.status === `fulfilled` && this.configure(),
        s.ready.status === `rejected`)
      )
        throw s.ready.reason
      let n = () => {
        if (s.state.status !== `open` || s.ready.status === `rejected`) return
        if (s.ready.status === `pending`) {
          s.ready.then(n, i)
          return
        }
        let r = s.configuration.previous?.onCreated,
          l = (0, K.jsx)(JS, { store: a, children: t, onCreated: r, rootElement: e })
        c
          ? WS.updateContainer(l, o, null, ox)
          : ((c = !0), WS.updateContainerSync(l, o, null, ox), WS.flushSyncWork())
      }
      return (n(), a)
    },
    unmount() {
      GS.get(e) === s && XS(e)
    },
  }
}
