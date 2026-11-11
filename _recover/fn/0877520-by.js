function by(e, t) {
  let n = l_[t]
  if (n === void 0) throw Error(`THREE.WebGLProgram: Can not resolve #include <` + t + `>`)
  return yy(n)
}
var xy =
  /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g
