function vx(e, t) {
  if (ux.str(t.props.attach)) {
    if (_x.test(t.props.attach)) {
      let n = t.props.attach.replace(_x, ``),
        { root: r, key: i } = gx(e.object, n)
      Array.isArray(r[i]) || (r[i] = [])
    }
    let { root: n, key: r } = gx(e.object, t.props.attach)
    ;((t.previousAttach = n[r]), (n[r] = t.object))
  } else ux.fun(t.props.attach) && (t.previousAttach = t.props.attach(e.object, t.object))
}
