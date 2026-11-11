function ot(e) {
  if (e.uniformsList === null) {
    let t = e.currentProgram.getUniforms()
    e.uniformsList = $v.seqWithValue(t.seq, e.uniforms)
  }
  return e.uniformsList
}
