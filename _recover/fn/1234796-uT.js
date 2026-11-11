function uT(e) {
  return (
    e.DefaultMaterial === void 0 &&
      (e.DefaultMaterial = new Tp({
        color: 16777215,
        emissive: 0,
        metalness: 1,
        roughness: 1,
        transparent: !1,
        depthTest: !0,
        side: 0,
      })),
    e.DefaultMaterial
  )
}
