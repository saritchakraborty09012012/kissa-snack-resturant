function h(t) {
  let n = []
  if (
    (t.shaderID
      ? n.push(t.shaderID)
      : (n.push(t.customVertexShaderID), n.push(t.customFragmentShaderID)),
    t.defines !== void 0)
  )
    for (let e in t.defines) (n.push(e), n.push(t.defines[e]))
  return (
    t.isRawShaderMaterial === !1 && (g(n, t), _(n, t), n.push(e.outputColorSpace)),
    n.push(t.customProgramCacheKey),
    n.join()
  )
}
