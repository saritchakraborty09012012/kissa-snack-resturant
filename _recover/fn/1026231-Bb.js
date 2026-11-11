function Bb() {
  let e = v.useContext(Rb)
  if (e === null) throw Error(`its-fine: useFiber must be called within a <FiberProvider />!`)
  let t = v.useId()
  return v.useMemo(() => {
    for (let n of [e, e?.alternate]) {
      if (!n) continue
      let e = Ib(n, !1, (e) => {
        let n = e.memoizedState
        for (; n;) {
          if (n.memoizedState === t) return !0
          n = n.next
        }
      })
      if (e) return e
    }
  }, [e, t])
}
var Vb = Symbol.for(`react.context`),
  Hb = (e) => typeof e == `object` && !!e && `$$typeof` in e && e.$$typeof === Vb
