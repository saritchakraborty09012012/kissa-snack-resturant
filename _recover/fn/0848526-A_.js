function A_(e, t, n) {
  return new Cp({
    name: e,
    uniforms: t,
    vertexShader: l_.cube_vert,
    fragmentShader: n,
    side: 1,
    blending: 0,
    depthTest: !1,
    depthWrite: !1,
  })
}
