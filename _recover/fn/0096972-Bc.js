function Bc(e, t, n, r, i) {
  if ((va(t), t.stateNode === null)) {
    var a = Ci,
      o = n.contextType
    ;(typeof o == `object` && o && (a = ya(o)),
      (a = new n(r, a)),
      (t.memoizedState = a.state !== null && a.state !== void 0 ? a.state : null),
      (a.updater = fc),
      (t.stateNode = a),
      (a._reactInternals = t),
      (a = t.stateNode),
      (a.props = r),
      (a.state = t.memoizedState),
      (a.refs = {}),
      so(t),
      (o = n.contextType),
      (a.context = typeof o == `object` && o ? ya(o) : Ci),
      (a.state = t.memoizedState),
      (o = n.getDerivedStateFromProps),
      typeof o == `function` && (dc(t, n, o, r), (a.state = t.memoizedState)),
      typeof n.getDerivedStateFromProps == `function` ||
        typeof a.getSnapshotBeforeUpdate == `function` ||
        (typeof a.UNSAFE_componentWillMount != `function` &&
          typeof a.componentWillMount != `function`) ||
        ((o = a.state),
        typeof a.componentWillMount == `function` && a.componentWillMount(),
        typeof a.UNSAFE_componentWillMount == `function` && a.UNSAFE_componentWillMount(),
        o !== a.state && fc.enqueueReplaceState(a, a.state, null),
        go(t, r, a, i),
        ho(),
        (a.state = t.memoizedState)),
      typeof a.componentDidMount == `function` && (t.flags |= 4194308),
      (r = !0))
  } else if (e === null) {
    a = t.stateNode
    var s = t.memoizedProps,
      c = hc(n, s)
    a.props = c
    var l = a.context,
      u = n.contextType
    ;((o = Ci), typeof u == `object` && u && (o = ya(u)))
    var d = n.getDerivedStateFromProps
    ;((u = typeof d == `function` || typeof a.getSnapshotBeforeUpdate == `function`),
      (s = t.pendingProps !== s),
      u ||
        (typeof a.UNSAFE_componentWillReceiveProps != `function` &&
          typeof a.componentWillReceiveProps != `function`) ||
        ((s || l !== o) && mc(t, a, r, o)),
      (oo = !1))
    var f = t.memoizedState
    ;((a.state = f),
      go(t, r, a, i),
      ho(),
      (l = t.memoizedState),
      s || f !== l || oo
        ? (typeof d == `function` && (dc(t, n, d, r), (l = t.memoizedState)),
          (c = oo || pc(t, n, c, r, f, l, o))
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
      co(e, t),
      (o = t.memoizedProps),
      (u = hc(n, o)),
      (a.props = u),
      (d = t.pendingProps),
      (f = a.context),
      (l = n.contextType),
      (c = Ci),
      typeof l == `object` && l && (c = ya(l)),
      (s = n.getDerivedStateFromProps),
      (l = typeof s == `function` || typeof a.getSnapshotBeforeUpdate == `function`) ||
        (typeof a.UNSAFE_componentWillReceiveProps != `function` &&
          typeof a.componentWillReceiveProps != `function`) ||
        ((o !== d || f !== c) && mc(t, a, r, c)),
      (oo = !1),
      (f = t.memoizedState),
      (a.state = f),
      go(t, r, a, i),
      ho())
    var p = t.memoizedState
    o !== d || f !== p || oo || (e !== null && e.dependencies !== null && _a(e.dependencies))
      ? (typeof s == `function` && (dc(t, n, s, r), (p = t.memoizedState)),
        (u =
          oo ||
          pc(t, n, u, r, f, p, c) ||
          (e !== null && e.dependencies !== null && _a(e.dependencies)))
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
    Lc(e, t),
    (r = !!(t.flags & 128)),
    a || r
      ? ((a = t.stateNode),
        (n = r && typeof n.getDerivedStateFromError != `function` ? null : a.render()),
        (t.flags |= 1),
        e !== null && r
          ? ((t.child = io(t, e.child, null, i)), (t.child = io(t, null, n, i)))
          : Dc(e, t, n, i),
        (t.memoizedState = a.state),
        (e = t.child))
      : (e = nl(e, t, i)),
    e
  )
}
