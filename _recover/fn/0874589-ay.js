function ay(e) {
  Wo._getMatrix(iy, Wo.workingColorSpace, e)
  let t = `mat3( ${iy.elements.map((e) => e.toFixed(4))} )`
  switch (Wo.getTransfer(e)) {
    case va:
      return [t, `LinearTransferOETF`]
    case ya:
      return [t, `sRGBTransferOETF`]
    default:
      return (q(`WebGLProgram: Unsupported color space: `, e), [t, `LinearTransferOETF`])
  }
}
