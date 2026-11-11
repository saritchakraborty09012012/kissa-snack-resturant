function Ir(e) {
  if (((e = e || (typeof document < `u` ? document : void 0)), e === void 0)) return null
  try {
    return e.activeElement || e.body
  } catch {
    return e.body
  }
}
