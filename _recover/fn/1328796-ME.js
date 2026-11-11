function ME(e) {
  let t = bE(e),
    n = e.map || t
  ;(v.useMemo(() => SS({ GroundProjectedEnvImpl: vw }), []),
    v.useEffect(
      () => () => {
        t.dispose()
      },
      [t],
    ))
  let r = v.useMemo(() => [n], [n]),
    i = e.ground?.height,
    a = e.ground?.radius,
    o = e.ground?.scale ?? 1e3
  return v.createElement(
    v.Fragment,
    null,
    v.createElement(kE, OC({}, e, { map: n })),
    v.createElement(`groundProjectedEnvImpl`, { args: r, scale: o, height: i, radius: a }),
  )
}
