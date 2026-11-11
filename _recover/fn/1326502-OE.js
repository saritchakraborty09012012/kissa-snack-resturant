function OE(e, t, n, r, i = {}) {
  var a, o
  i = {
    backgroundBlurriness: 0,
    backgroundIntensity: 1,
    backgroundRotation: [0, 0, 0],
    environmentIntensity: 1,
    environmentRotation: [0, 0, 0],
    ...i,
  }
  let s = DE(t || n),
    c = s.background,
    l = s.environment,
    u = {
      backgroundBlurriness: s.backgroundBlurriness,
      backgroundIntensity: s.backgroundIntensity,
      backgroundRotation: ((a = s.backgroundRotation) == null || a.clone == null
        ? void 0
        : a.clone()) ?? [0, 0, 0],
      environmentIntensity: s.environmentIntensity,
      environmentRotation: ((o = s.environmentRotation) == null || o.clone == null
        ? void 0
        : o.clone()) ?? [0, 0, 0],
    }
  return (
    e !== `only` && (s.environment = r),
    e && (s.background = r),
    Ex(s, i),
    () => {
      ;(e !== `only` && (s.environment = l), e && (s.background = c), Ex(s, u))
    }
  )
}
