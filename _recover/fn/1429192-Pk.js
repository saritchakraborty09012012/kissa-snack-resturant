function Pk(e) {
  return function ({ blendFunction: t, opacity: n, ref: r, ...i }) {
    let a = jk.get(e)
    if (!a) {
      let t = `@react-three/postprocessing/${e.name}-${Mk++}`
      ;(SS({ [t]: e }), jk.set(e, (a = t)))
    }
    let o = qx((e) => e.camera),
      s = (0, v.useRef)(null),
      c = Tk(s, r)
    return (
      Ak(s, { 'blendMode-blendFunction': t, 'blendMode-opacity-value': n }, Nk),
      (0, K.jsx)(a, { ref: c, camera: o, ...i })
    )
  }
}
var Fk = (0, v.createContext)(null),
  Ik = (e) => (e.getAttributes() & 2) == 2,
  Lk = (e) => /mainUv/.test(e.getFragmentShader() ?? ``)
