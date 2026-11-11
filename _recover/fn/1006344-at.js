function at(e, t, n, r, i) {
  let a = W.get(e),
    o = a.currentProgram.id + `,` + r + `,` + i,
    s = a.programVariants.get(o)
  return (
    s === void 0
      ? ((s = it(e, t, n)), a.programVariants.set(o, s))
      : ((a.currentProgram = s),
        (a.uniformsList = null),
        (a.outputColorSpace = r),
        (a.toneMapping = i)),
    s
  )
}
