function hA(e, t = {}) {
  pA ? pA.scrollTo(e, { duration: 1.6, ...t }) : window.scrollTo({ top: e, behavior: `smooth` })
}
