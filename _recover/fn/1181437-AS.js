function AS(e, t, n) {
  let r = t.root.getState()
  if (e.parent || e.object === r.scene) {
    if (!t.object) {
      let e = xS(yS(t.type))
      ;((t.object = t.props.object ?? new e(...(t.props.args ?? []))), (t.object.__r3f = t))
    }
    if ((Ex(t.object, t.props), t.props.attach)) vx(e, t)
    else if (kx(t.object) && kx(e.object)) {
      let r = e.object.children.indexOf(n?.object)
      if (n && r !== -1) {
        let n = e.object.children.indexOf(t.object)
        if (n !== -1) {
          e.object.children.splice(n, 1)
          let i = n < r ? r - 1 : r
          e.object.children.splice(i, 0, t.object)
        } else
          ((t.object.parent = e.object),
            e.object.children.splice(r, 0, t.object),
            t.object.dispatchEvent({ type: `added` }),
            e.object.dispatchEvent({ type: `childadded`, child: t.object }))
      } else e.object.add(t.object)
    }
    for (let e of t.children) AS(t, e)
    Dx(t)
  }
}
