function XS(e, t) {
  let n = GS.get(e),
    r = Symbol(`unmount`)
  if (!n || !KS(n, { type: `unmount`, token: r })) return
  let i = () => {
    var a
    if (n.ready.status === `pending`) {
      n.ready.then(i, i)
      return
    }
    if (!KS(n, { type: `dispose`, token: r })) return
    GS.delete(e)
    let o = n.store.getState()
    ;((o.internal.active = !1),
      YS(() => (n.unwatchDpr == null ? void 0 : n.unwatchDpr())),
      YS(() => (o.events.disconnect == null ? void 0 : o.events.disconnect())),
      (a = o.gl) != null && a.xr && YS(() => o.xr.disconnect()),
      o.scene && YS(() => fx(o.scene)))
    let s = YS(() => Hx(o.gl, n.ownsRenderer))
    Fx(s) ? s.then(() => t?.(e)) : t?.(e)
  }
  WS.updateContainer(null, n.fiber, null, () => {
    n.state.status === `closing` &&
      n.state.token === r &&
      WS.updateContainer(null, n.fiber, null, i)
  })
}
var ZS = new Set(),
  QS = new Set(),
  $S = new Set()
