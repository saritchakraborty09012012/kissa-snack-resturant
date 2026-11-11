function sx(e) {
  let t = typeof window < `u` ? (window.devicePixelRatio ?? 2) : 1
  return Array.isArray(e) ? Math.min(Math.max(e[0], t), e[1]) : e
}
