function i(e, t, n, r, i) {
  t.isNodeMaterial
    ? (t.uniformsNeedUpdate = !1)
    : t.isMeshBasicMaterial
      ? a(e, t)
      : t.isMeshLambertMaterial
        ? (a(e, t), t.envMap && (e.envMapIntensity.value = t.envMapIntensity))
        : t.isMeshToonMaterial
          ? (a(e, t), d(e, t))
          : t.isMeshPhongMaterial
            ? (a(e, t), u(e, t), t.envMap && (e.envMapIntensity.value = t.envMapIntensity))
            : t.isMeshStandardMaterial
              ? (a(e, t), f(e, t), t.isMeshPhysicalMaterial && p(e, t, i))
              : t.isMeshMatcapMaterial
                ? (a(e, t), m(e, t))
                : t.isMeshDepthMaterial
                  ? a(e, t)
                  : t.isMeshDistanceMaterial
                    ? (a(e, t), h(e, t))
                    : t.isMeshNormalMaterial
                      ? a(e, t)
                      : t.isLineBasicMaterial
                        ? (o(e, t), t.isLineDashedMaterial && s(e, t))
                        : t.isPointsMaterial
                          ? c(e, t, n, r)
                          : t.isSpriteMaterial
                            ? l(e, t)
                            : t.isShadowMaterial
                              ? (e.color.value.copy(t.color), (e.opacity.value = t.opacity))
                              : t.isShaderMaterial && (t.uniformsNeedUpdate = !1)
}
