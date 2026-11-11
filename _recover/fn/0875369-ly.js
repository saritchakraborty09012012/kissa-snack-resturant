function ly(e, t) {
  let n = cy[t]
  return n === void 0
    ? (q(`WebGLProgram: Unsupported toneMapping:`, t),
      `vec3 ` + e + `( vec3 color ) { return LinearToneMapping( color ); }`)
    : `vec3 ` + e + `( vec3 color ) { return ` + n + `ToneMapping( color ); }`
}
var uy = new Y()
