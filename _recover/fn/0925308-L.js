function L(t, n, r, i, a, o, s, c, l, u) {
  if (t === 0) g === !0 && (ce(e.BLEND), (g = !1))
  else if ((g === !1 && (se(e.BLEND), (g = !0)), t !== 5)) {
    if (t !== _ || u !== E) {
      if (((v !== 100 || x !== 100) && (e.blendEquation(e.FUNC_ADD), (v = 100), (x = 100)), u))
        switch (t) {
          case 1:
            e.blendFuncSeparate(e.ONE, e.ONE_MINUS_SRC_ALPHA, e.ONE, e.ONE_MINUS_SRC_ALPHA)
            break
          case 2:
            e.blendFunc(e.ONE, e.ONE)
            break
          case 3:
            e.blendFuncSeparate(e.ZERO, e.ONE_MINUS_SRC_COLOR, e.ZERO, e.ONE)
            break
          case 4:
            e.blendFuncSeparate(e.DST_COLOR, e.ONE_MINUS_SRC_ALPHA, e.ZERO, e.ONE)
            break
          default:
            no(`WebGLState: Invalid blending: `, t)
        }
      else
        switch (t) {
          case 1:
            e.blendFuncSeparate(
              e.SRC_ALPHA,
              e.ONE_MINUS_SRC_ALPHA,
              e.ONE,
              e.ONE_MINUS_SRC_ALPHA,
            )
            break
          case 2:
            e.blendFuncSeparate(e.SRC_ALPHA, e.ONE, e.ONE, e.ONE)
            break
          case 3:
            no(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`)
            break
          case 4:
            no(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`)
            break
          default:
            no(`WebGLState: Invalid blending: `, t)
        }
      ;((y = null),
        (b = null),
        (S = null),
        (C = null),
        w.set(0, 0, 0),
        (T = 0),
        (_ = t),
        (E = u))
    }
  } else
    ((a = a || n),
      (o = o || r),
      (s = s || i),
      (n !== v || a !== x) && (e.blendEquationSeparate(fe[n], fe[a]), (v = n), (x = a)),
      (r !== y || i !== b || o !== S || s !== C) &&
        (e.blendFuncSeparate(pe[r], pe[i], pe[o], pe[s]), (y = r), (b = i), (S = o), (C = s)),
      (c.equals(w) === !1 || l !== T) && (e.blendColor(c.r, c.g, c.b, l), w.copy(c), (T = l)),
      (_ = t),
      (E = !1))
}
