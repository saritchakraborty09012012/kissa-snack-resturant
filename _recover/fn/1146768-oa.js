function oa(e) {
  switch (e.$$typeof) {
    case zd:
      return `<` + (u(e.value) || `Unknown`) + `>`
    case Bd:
      return `:has(` + (oa(e) || ``) + `)`
    case Vd:
      return `[role="` + e.value + `"]`
    case Ud:
      return `"` + e.value + `"`
    case Hd:
      return `[data-testname="` + e.value + `"]`
    default:
      throw Error(r(365))
  }
}
