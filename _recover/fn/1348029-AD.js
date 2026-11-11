function AD({ dark: e = !1, ...t }) {
  let { scene: n } = FT(`/models/bowl.glb`),
    r = yD(),
    i = (0, v.useMemo)(() => {
      let t = n.clone(!0)
      return (
        t.traverse((t) => {
          t.isMesh &&
            ((t.material = e ? r.ceramicDark : (t.name, r.ceramic)), (t.renderOrder = 0))
        }),
        t
      )
    }, [n, r, e])
  return (0, K.jsx)(`primitive`, { object: i, ...t })
}
