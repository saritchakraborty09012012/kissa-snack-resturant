function oc(e, t, n) {
  if (n & 4194048) {
    var r = t.lanes
    ;((r &= e.pendingLanes), (n |= r), (t.lanes = n), ct(e, n))
  }
}
var sc = {
    readContext: ya,
    use: rs,
    useCallback: Wo,
    useContext: Wo,
    useEffect: Wo,
    useImperativeHandle: Wo,
    useLayoutEffect: Wo,
    useInsertionEffect: Wo,
    useMemo: Wo,
    useReducer: Wo,
    useRef: Wo,
    useState: Wo,
    useDebugValue: Wo,
    useDeferredValue: Wo,
    useTransition: Wo,
    useSyncExternalStore: Wo,
    useId: Wo,
    useHostTransitionStatus: Wo,
    useFormState: Wo,
    useActionState: Wo,
    useOptimistic: Wo,
    useMemoCache: Wo,
    useCacheRefresh: Wo,
    useEffectEvent: Wo,
  },
  cc = {
    readContext: ya,
    use: rs,
    useCallback: function (e, t) {
      return (($o().memoizedState = [e, t === void 0 ? null : t]), e)
    },
    useContext: ya,
    useEffect: Ns,
    useImperativeHandle: function (e, t, n) {
      ;((n = n == null ? null : n.concat([e])), js(4194308, 4, zs.bind(null, t, e), n))
    },
    useLayoutEffect: function (e, t) {
      return js(4194308, 4, e, t)
    },
    useInsertionEffect: function (e, t) {
      js(4, 2, e, t)
    },
    useMemo: function (e, t) {
      var n = $o()
      t = t === void 0 ? null : t
      var r = e()
      if (zo) {
        We(!0)
        try {
          e()
        } finally {
          We(!1)
        }
      }
      return ((n.memoizedState = [r, t]), r)
    },
    useReducer: function (e, t, n) {
      var r = $o()
      if (n !== void 0) {
        var i = n(t)
        if (zo) {
          We(!0)
          try {
            n(t)
          } finally {
            We(!1)
          }
        }
      } else i = t
      return (
        (r.memoizedState = r.baseState = i),
        (e = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: i,
        }),
        (r.queue = e),
        (e = e.dispatch = ec.bind(null, J, e)),
        [r.memoizedState, e]
      )
    },
    useRef: function (e) {
      var t = $o()
      return ((e = { current: e }), (t.memoizedState = e))
    },
    useState: function (e) {
      e = hs(e)
      var t = e.queue,
        n = tc.bind(null, J, t)
      return ((t.dispatch = n), [e.memoizedState, n])
    },
    useDebugValue: Vs,
    useDeferredValue: function (e, t) {
      return X($o(), e, t)
    },
    useTransition: function () {
      var e = hs(!1)
      return ((e = Gs.bind(null, J, e.queue, !0, !1)), ($o().memoizedState = e), [!1, e])
    },
    useSyncExternalStore: function (e, t, n) {
      var r = J,
        a = $o()
      if (Qi) {
        if (n === void 0) throw Error(i(407))
        n = n()
      } else {
        if (((n = t()), Xu === null)) throw Error(i(349))
        Qu & 127 || us(r, t, n)
      }
      a.memoizedState = n
      var o = { value: n, getSnapshot: t }
      return (
        (a.queue = o),
        Ns(fs.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        ks(9, { destroy: void 0 }, ds.bind(null, r, o, n, t), null),
        n
      )
    },
    useId: function () {
      var e = $o(),
        t = Xu.identifierPrefix
      if (Qi) {
        var n = Wi,
          r = Ui
        ;((n = (r & ~(1 << (32 - Ge(r) - 1))).toString(32) + n),
          (t = `_` + t + `R_` + n),
          (n = Bo++),
          0 < n && (t += `H` + n.toString(32)),
          (t += `_`))
      } else ((n = Uo++), (t = `_` + t + `r_` + n.toString(32) + `_`))
      return (e.memoizedState = t)
    },
    useHostTransitionStatus: Xs,
    useFormState: ws,
    useActionState: ws,
    useOptimistic: function (e) {
      var t = $o()
      t.memoizedState = t.baseState = e
      var n = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null,
      }
      return ((t.queue = n), (t = rc.bind(null, J, !0, n)), (n.dispatch = t), [e, t])
    },
    useMemoCache: is,
    useCacheRefresh: function () {
      return ($o().memoizedState = $s.bind(null, J))
    },
    useEffectEvent: function (e) {
      var t = $o(),
        n = { impl: e }
      return (
        (t.memoizedState = n),
        function () {
          if (Yu & 2) throw Error(i(440))
          return n.impl.apply(void 0, arguments)
        }
      )
    },
  },
  lc = {
    readContext: ya,
    use: rs,
    useCallback: Hs,
    useContext: ya,
    useEffect: Ps,
    useImperativeHandle: Bs,
    useInsertionEffect: Ls,
    useLayoutEffect: Rs,
    useMemo: Us,
    useReducer: os,
    useRef: As,
    useState: function () {
      return os(as)
    },
    useDebugValue: Vs,
    useDeferredValue: function (e, t) {
      return Ws(es(), Io.memoizedState, e, t)
    },
    useTransition: function () {
      var e = os(as)[0],
        t = es().memoizedState
      return [typeof e == `boolean` ? e : ns(e), t]
    },
    useSyncExternalStore: ls,
    useId: Zs,
    useHostTransitionStatus: Xs,
    useFormState: Ts,
    useActionState: Ts,
    useOptimistic: function (e, t) {
      return gs(es(), Io, e, t)
    },
    useMemoCache: is,
    useCacheRefresh: Qs,
    useEffectEvent: Is,
  },
  uc = {
    readContext: ya,
    use: rs,
    useCallback: Hs,
    useContext: ya,
    useEffect: Ps,
    useImperativeHandle: Bs,
    useInsertionEffect: Ls,
    useLayoutEffect: Rs,
    useMemo: Us,
    useReducer: cs,
    useRef: As,
    useState: function () {
      return cs(as)
    },
    useDebugValue: Vs,
    useDeferredValue: function (e, t) {
      var n = es()
      return Io === null ? X(n, e, t) : Ws(n, Io.memoizedState, e, t)
    },
    useTransition: function () {
      var e = cs(as)[0],
        t = es().memoizedState
      return [typeof e == `boolean` ? e : ns(e), t]
    },
    useSyncExternalStore: ls,
    useId: Zs,
    useHostTransitionStatus: Xs,
    useFormState: Os,
    useActionState: Os,
    useOptimistic: function (e, t) {
      var n = es()
      return Io === null ? ((n.baseState = e), [e, n.queue.dispatch]) : gs(n, Io, e, t)
    },
    useMemoCache: is,
    useCacheRefresh: Qs,
    useEffectEvent: Is,
  }
