function Wb() {
  let e = Ub()
  return v.useMemo(
    () =>
      Array.from(e.keys()).reduce(
        (t, n) => (r) =>
          v.createElement(t, null, v.createElement(n.Provider, { ...r, value: e.get(n) })),
        (e) => v.createElement(zb, { ...e }),
      ),
    [e],
  )
}
