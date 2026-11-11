function sr(e, t, n, r, i) {
  if ((V(t), t.stateNode === null)) {
    var a = Sl,
      o = n.contextType
    ;(typeof o == `object` && o && (a = H(o)),
      (a = new n(r, a)),
      (t.memoizedState = a.state !== null && a.state !== void 0 ? a.state : null),
      (a.updater = hd),
      (t.stateNode = a),
      (a._reactInternals = t),
      (a = t.stateNode),
      (a.props = r),
      (a.state = t.memoizedState),
      (a.refs = {}),
      nt(t),
      (o = n.contextType),
      (a.context = typeof o == `object` && o ? H(o) : Sl),
      (a.state = t.memoizedState),
      (o = n.getDerivedStateFromProps),
      typeof o == `function` && (zn(t, n, o, r), (a.state = t.memoizedState)),
      typeof n.getDerivedStateFromProps == `function` ||
        typeof a.getSnapshotBeforeUpdate == `function` ||
        (typeof a.UNSAFE_componentWillMount != `function` &&
          typeof a.componentWillMount != `function`) ||
        ((o = a.state),
        typeof a.componentWillMount == `function` && a.componentWillMount(),
        typeof a.UNSAFE_componentWillMount == `function` && a.UNSAFE_componentWillMount(),
        o !== a.state && hd.enqueueReplaceState(a, a.state, null),
        lt(t, r, a, i),
        ct(),
        (a.state = t.memoizedState)),
      typeof a.componentDidMount == `function` && (t.flags |= 4194308),
      (r = !0))
  } else if (e === null) {
    a = t.stateNode
    var s = t.memoizedProps,
      c = Hn(n, s)
    a.props = c
    var l = a.context,
      u = n.contextType
    ;((o = Sl), typeof u == `object` && u && (o = H(u)))
    var d = n.getDerivedStateFromProps
    ;((u = typeof d == `function` || typeof a.getSnapshotBeforeUpdate == `function`),
      (s = t.pendingProps !== s),
      u ||
        (typeof a.UNSAFE_componentWillReceiveProps != `function` &&
          typeof a.componentWillReceiveProps != `function`) ||
        ((s || l !== o) && Vn(t, a, r, o)),
      (qu = !1))
    var f = t.memoizedState
    ;((a.state = f),
      lt(t, r, a, i),
      ct(),
      (l = t.memoizedState),
      s || f !== l || qu
        ? (typeof d == `function` && (zn(t, n, d, r), (l = t.memoizedState)),
          (c = qu || Bn(t, n, c, r, f, l, o))
            ? (u ||
                (typeof a.UNSAFE_componentWillMount != `function` &&
                  typeof a.componentWillMount != `function`) ||
                (typeof a.componentWillMount == `function` && a.componentWillMount(),
                typeof a.UNSAFE_componentWillMount == `function` &&
                  a.UNSAFE_componentWillMount()),
              typeof a.componentDidMount == `function` && (t.flags |= 4194308))
            : (typeof a.componentDidMount == `function` && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = l)),
          (a.props = r),
          (a.state = l),
          (a.context = o),
          (r = c))
        : (typeof a.componentDidMount == `function` && (t.flags |= 4194308), (r = !1)))
  } else {
    ;((a = t.stateNode),
      rt(e, t),
      (o = t.memoizedProps),
      (u = Hn(n, o)),
      (a.props = u),
      (d = t.pendingProps),
      (f = a.context),
      (l = n.contextType),
      (c = Sl),
      typeof l == `object` && l && (c = H(l)),
      (s = n.getDerivedStateFromProps),
      (l = typeof s == `function` || typeof a.getSnapshotBeforeUpdate == `function`) ||
        (typeof a.UNSAFE_componentWillReceiveProps != `function` &&
          typeof a.componentWillReceiveProps != `function`) ||
        ((o !== d || f !== c) && Vn(t, a, r, c)),
      (qu = !1),
      (f = t.memoizedState),
      (a.state = f),
      lt(t, r, a, i),
      ct())
    var p = t.memoizedState
    o !== d || f !== p || qu || (e !== null && e.dependencies !== null && be(e.dependencies))
      ? (typeof s == `function` && (zn(t, n, s, r), (p = t.memoizedState)),
        (u =
          qu ||
          Bn(t, n, u, r, f, p, c) ||
          (e !== null && e.dependencies !== null && be(e.dependencies)))
          ? (l ||
              (typeof a.UNSAFE_componentWillUpdate != `function` &&
                typeof a.componentWillUpdate != `function`) ||
              (typeof a.componentWillUpdate == `function` && a.componentWillUpdate(r, p, c),
              typeof a.UNSAFE_componentWillUpdate == `function` &&
                a.UNSAFE_componentWillUpdate(r, p, c)),
            typeof a.componentDidUpdate == `function` && (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate == `function` && (t.flags |= 1024))
          : (typeof a.componentDidUpdate != `function` ||
              (o === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate != `function` ||
              (o === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = p)),
        (a.props = r),
        (a.state = p),
        (a.context = c),
        (r = u))
      : (typeof a.componentDidUpdate != `function` ||
          (o === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 4),
        typeof a.getSnapshotBeforeUpdate != `function` ||
          (o === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1))
  }
  return (
    (a = r),
    ir(e, t),
    (r = !!(t.flags & 128)),
    a || r
      ? ((a = t.stateNode),
        (n = r && typeof n.getDerivedStateFromError != `function` ? null : a.render()),
        (t.flags |= 1),
        e !== null && r
          ? ((t.child = Hu(t, e.child, null, i)), (t.child = Hu(t, null, n, i)))
          : Yn(e, t, n, i),
        (t.memoizedState = a.state),
        (e = t.child))
      : (e = Sr(e, t, i)),
    e
  )
}
