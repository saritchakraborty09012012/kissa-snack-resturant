function ND({ type: e = `cinnamon`, color: t, ...n }) {
  let r = MD[e],
    { scene: i } = FT(r),
    a = yD(),
    o = (0, v.useMemo)(
      () =>
        e === `cardamom`
          ? new Tp({ color: `#8d7c4d`, roughness: 0.72 })
          : e === `cinnamon` || e === `star` || e === `clove`
            ? a.cinnamon
            : a.ceramic,
      [e, a],
    ),
    s = (0, v.useMemo)(() => {
      let e = i.clone(!0)
      return (
        e.traverse((e) => {
          e.isMesh && (e.material = o)
        }),
        e
      )
    }, [i, o])
  return (0, K.jsx)(`primitive`, { object: s, ...n })
}
;(FT.preload(`/models/chai_glass.glb`),
  FT.preload(`/models/bowl.glb`),
  FT.preload(`/models/spoon.glb`),
  FT.preload(`/models/cinnamon.glb`),
  FT.preload(`/models/star_anise.glb`),
  FT.preload(`/models/clove.glb`),
  FT.preload(`/models/cardamom.glb`),
  FT.preload(`/models/kulhad.glb`),
  FT.preload(`/models/plate.glb`))
