function Zx(e, t) {
  return function (n, ...r) {
    let i
    return (
      Xx(n) ? ((i = Yx.get(n)), i || ((i = new n()), Yx.set(n, i))) : (i = n),
      e && e(i),
      Promise.all(
        r.map(
          (e) =>
            new Promise((n, r) =>
              i.load(
                e,
                (e) => {
                  ;(kx(e?.scene) && Object.assign(e, dx(e.scene)), n(e))
                },
                t,
                (t) => r(Error(`Could not load ${e}: ${t?.message}`)),
              ),
            ),
        ),
      )
    )
  }
}
