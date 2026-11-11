function o(r) {
  let o = i.render.frame,
    s = r.geometry,
    l = t.get(r, s)
  if (
    (a.get(l) !== o && (t.update(l), a.set(l, o)),
    r.isInstancedMesh &&
      (r.hasEventListener(`dispose`, c) === !1 && r.addEventListener(`dispose`, c),
      a.get(r) !== o &&
        (n.update(r.instanceMatrix, e.ARRAY_BUFFER),
        r.instanceColor !== null && n.update(r.instanceColor, e.ARRAY_BUFFER),
        a.set(r, o))),
    r.isSkinnedMesh)
  ) {
    let e = r.skeleton
    a.get(e) !== o && (e.update(), a.set(e, o))
  }
  return l
}
