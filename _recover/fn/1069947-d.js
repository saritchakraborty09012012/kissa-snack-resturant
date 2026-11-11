function d(e, t, n, r) {
  var i = n.type
  return i === xo
    ? ((e = p(e, t, n.props.children, r, n.key)), qe(e, n), e)
    : t !== null &&
        (t.elementType === i ||
          (typeof i == `object` && i && i.$$typeof === Ao && Ue(i) === t.type))
      ? ((t = o(t, n.props)), qe(t, n), (t.return = e), t)
      : ((t = q(n.type, n.key, n.props, null, e.mode, r)), qe(t, n), (t.return = e), t)
}
