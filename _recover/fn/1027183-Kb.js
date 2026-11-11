function Kb() {
  if (!v.Activity) throw Error(`its-fine: useActivityBridge requires React 19.2 or later!`)
  let e = Bb(),
    [t] = v.useState(() => {
      let t = [],
        n = !1
      Ib(e, !0, (e) => {
        if (e.elementType === v.Activity) {
          let n = e.child?.tag === 22 ? e.child.stateNode : null
          if (typeof n?._visibility != `number`)
            throw Error(`its-fine: unsupported React Activity internals!`)
          t.push(n)
        } else e.tag === 22 && e.return?.elementType !== v.Activity && (n = !0)
      })
      let r = `hidden`,
        i = new Set(),
        a,
        o = {
          mounted: !1,
          connected: !1,
          subscribe(e) {
            return (
              i.add(e),
              () => {
                i.delete(e)
              }
            )
          },
          sync(e) {
            o.mounted && !o.connected && n && t.length > 0
              ? a ||
                (a = Gb(() => {
                  ;((a = void 0), o.sync(!0))
                }))
              : (a?.(), (a = void 0))
            let s = r
            if (
              (o.mounted
                ? o.connected
                  ? (s = `visible`)
                  : e && (s = t.every((e) => !!(e._visibility & 1)) ? `visible` : `hidden`)
                : (s = `hidden`),
              r !== s)
            ) {
              r = s
              for (let e of i) e()
            }
          },
          Bridge({ children: e }) {
            return v.createElement(
              v.Activity,
              {
                mode: v.useSyncExternalStore(
                  o.subscribe,
                  () => r,
                  () => `hidden`,
                ),
              },
              e,
            )
          },
        }
      return o
    })
  return (
    v.useInsertionEffect(
      () => (
        (t.mounted = !0),
        queueMicrotask(() => t.sync(!1)),
        () => {
          ;((t.mounted = !1), queueMicrotask(() => t.sync(!1)))
        }
      ),
      [t],
    ),
    v.useLayoutEffect(
      () => (
        (t.connected = !0),
        t.sync(!1),
        () => {
          ;((t.connected = !1), t.sync(!0))
        }
      ),
      [t],
    ),
    t.Bridge
  )
}
var qb = l(p()),
  Jb = ((e, t) =>
    typeof window < `u` &&
    ((e = window.document)?.createElement ||
      (t = window.navigator)?.product === `ReactNative`))()
    ? v.useLayoutEffect
    : v.useEffect
