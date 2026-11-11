function R(t, n) {
  t.side === 2 ? ce(e.CULL_FACE) : se(e.CULL_FACE)
  let r = t.side === 1
  ;(n && (r = !r),
    me(r),
    t.blending === 1 && t.transparent === !1
      ? L(0)
      : L(
          t.blending,
          t.blendEquation,
          t.blendSrc,
          t.blendDst,
          t.blendEquationAlpha,
          t.blendSrcAlpha,
          t.blendDstAlpha,
          t.blendColor,
          t.blendAlpha,
          t.premultipliedAlpha,
        ),
    o.setFunc(t.depthFunc),
    o.setTest(t.depthTest),
    o.setMask(t.depthWrite),
    a.setMask(t.colorWrite))
  let i = t.stencilWrite
  ;(s.setTest(i),
    i &&
      (s.setMask(t.stencilWriteMask),
      s.setFunc(t.stencilFunc, t.stencilRef, t.stencilFuncMask),
      s.setOp(t.stencilFail, t.stencilZFail, t.stencilZPass)),
    _e(t.polygonOffset, t.polygonOffsetFactor, t.polygonOffsetUnits),
    t.alphaToCoverage === !0 ? se(e.SAMPLE_ALPHA_TO_COVERAGE) : ce(e.SAMPLE_ALPHA_TO_COVERAGE))
}
