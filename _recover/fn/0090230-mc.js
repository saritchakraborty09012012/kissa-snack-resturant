function mc(e, t, n, r) {
  ;((e = t.state),
    typeof t.componentWillReceiveProps == `function` && t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == `function` &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && fc.enqueueReplaceState(t, t.state, null))
}
