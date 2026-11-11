function s(n, r, i, a, s, c) {
  let l = e[t]
  return (
    l === void 0
      ? ((l = {
          id: n.id,
          object: n,
          geometry: r,
          material: i,
          materialVariant: o(n),
          groupOrder: a,
          renderOrder: n.renderOrder,
          z: s,
          group: c,
        }),
        (e[t] = l))
      : ((l.id = n.id),
        (l.object = n),
        (l.geometry = r),
        (l.material = i),
        (l.materialVariant = o(n)),
        (l.groupOrder = a),
        (l.renderOrder = n.renderOrder),
        (l.z = s),
        (l.group = c)),
    t++,
    l
  )
}
