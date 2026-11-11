function sy(e, t) {
  let n = ay(t)
  return [
    `vec4 ${e}( vec4 value ) {`,
    `	return ${n[1]}( vec4( ${n[0]} * value.rgb, value.a ) );`,
    `}`,
  ].join(`
`)
}
var cy = {
  1: `Linear`,
  2: `Reinhard`,
  3: `Cineon`,
  4: `ACESFilmic`,
  6: `AgX`,
  7: `Neutral`,
  5: `Custom`,
}
