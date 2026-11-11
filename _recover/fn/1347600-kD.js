function kD({ variant: e = `tea`, ...t }) {
  let { scene: n } = FT(`/models/chai_glass.glb`),
    r = yD(),
    i = (0, v.useMemo)(() => {
      let t = n.clone(!0)
      return (
        t.traverse((t) => {
          t.isMesh &&
            ((t.material =
              t.name === `Tea`
                ? e === `chocolate`
                  ? r.creamChoc
                  : e === `pale`
                    ? r.milk
                    : r.tea
                : t.name === `Foam`
                  ? e === `tea`
                    ? r.foam
                    : r.cream
                  : r.glass),
            (t.castShadow = !1),
            (t.receiveShadow = !1),
            (t.renderOrder = t.name === `Tea` || t.name === `Foam` ? 2 : 1))
        }),
        t
      )
    }, [n, r, e])
  return (0, K.jsx)(`primitive`, { object: i, ...t })
}
