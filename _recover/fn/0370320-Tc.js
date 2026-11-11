function Tc(e) {
  ;(Math.abs(e) > 65504 && q(`DataUtils.toHalfFloat(): Value out of range.`),
    (e = po(e, -65504, 65504)),
    (Cc.floatView[0] = e))
  let t = Cc.uint32View[0],
    n = (t >> 23) & 511
  return Cc.baseTable[n] + ((t & 8388607) >> Cc.shiftTable[n])
}
