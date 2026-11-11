function v(e) {
  let t = f[e.type],
    n
  if (t) {
    let e = u_[t]
    n = bp.clone(e.uniforms)
  } else n = e.uniforms
  return n
}
