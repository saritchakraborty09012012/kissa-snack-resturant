function ey(e, t, n) {
  let r = e.createShader(t)
  return (e.shaderSource(r, n), e.compileShader(r), r)
}
var ty = 37297,
  ny = 0
