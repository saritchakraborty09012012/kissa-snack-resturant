function jD(e) {
  let { scene: t } = FT(`/models/spoon.glb`),
    n = yD(),
    r = (0, v.useMemo)(() => {
      let e = t.clone(!0)
      return (
        e.traverse((e) => {
          e.isMesh && (e.material = n.steel)
        }),
        e
      )
    }, [t, n])
  return (0, K.jsx)(`primitive`, { object: r, ...e })
}
var MD = {
  cinnamon: `/models/cinnamon.glb`,
  star: `/models/star_anise.glb`,
  clove: `/models/clove.glb`,
  cardamom: `/models/cardamom.glb`,
  kulhad: `/models/kulhad.glb`,
  plate: `/models/plate.glb`,
}
