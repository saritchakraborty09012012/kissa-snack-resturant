function dy() {
  return (
    Wo.getLuminanceCoefficients(uy),
    [
      `float luminance( const in vec3 rgb ) {`,
      `	const vec3 weights = vec3( ${uy.x.toFixed(4)}, ${uy.y.toFixed(4)}, ${uy.z.toFixed(4)} );`,
      `	return dot( weights, rgb );`,
      `}`,
    ].join(`
`)
  )
}
