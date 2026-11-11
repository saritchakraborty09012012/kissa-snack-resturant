function Bx(e, t) {
  let n = { canvas: e, powerPreference: `high-performance`, antialias: !0, alpha: !0 }
  return typeof t == `function` ? t(n) : zx(t) ? t : new _b({ ...n, ...t })
}
