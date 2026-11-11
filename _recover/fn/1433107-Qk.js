function Qk({ blendFunction: e = 5, ...t }) {
  return (0, K.jsx)(Zk, { blendFunction: e, ...t })
}
var $k = Pk(FO),
  eA = typeof window < `u` ? new URLSearchParams(window.location.search) : null,
  tA = !!eA?.has(`lite`),
  nA = !!eA?.has(`skipIntro`),
  rA = tA ? `off` : eA?.get(`fx`) || `full`
