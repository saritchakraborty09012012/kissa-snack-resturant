function l(e, t, n, r) {
  var i = n.type
  return i === j
    ? ((e = d(e, t, n.props.children, r, n.key)), q(e, n), e)
    : t !== null &&
        (t.elementType === i ||
          (typeof i == `object` && i && i.$$typeof === re && Ya(i) === t.type))
      ? ((t = a(t, n.props)), q(t, n), (t.return = e), t)
      : ((t = ki(n.type, n.key, n.props, null, e.mode, r)), q(t, n), (t.return = e), t)
}
