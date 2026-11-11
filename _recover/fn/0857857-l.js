function l(e, t) {
  return (
    i[t.id] === void 0 &&
      (t.addEventListener(`dispose`, s),
      (i[t.id] = new WeakRef(t)),
      o.register(t, t.id, t),
      n.memory.geometries++),
    t
  )
}
