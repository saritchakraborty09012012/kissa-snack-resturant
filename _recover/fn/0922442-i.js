function i() {
  let t = !1,
    n = null,
    r = null,
    i = null,
    a = null,
    o = null,
    s = null,
    c = null,
    l = null
  return {
    setTest: function (n) {
      t || (n ? se(e.STENCIL_TEST) : ce(e.STENCIL_TEST))
    },
    setMask: function (r) {
      n !== r && !t && (e.stencilMask(r), (n = r))
    },
    setFunc: function (t, n, o) {
      ;(r !== t || i !== n || a !== o) && (e.stencilFunc(t, n, o), (r = t), (i = n), (a = o))
    },
    setOp: function (t, n, r) {
      ;(o !== t || s !== n || c !== r) && (e.stencilOp(t, n, r), (o = t), (s = n), (c = r))
    },
    setLocked: function (e) {
      t = e
    },
    setClear: function (t) {
      l !== t && (e.clearStencil(t), (l = t))
    },
    reset: function () {
      ;((t = !1),
        (n = null),
        (r = null),
        (i = null),
        (a = null),
        (o = null),
        (s = null),
        (c = null),
        (l = null))
    },
  }
}
let a = new n(),
  o = new r(),
  s = new i(),
  c = {},
  l = new WeakMap(),
  u = {},
  d = {},
  f = {},
  p = new WeakMap(),
  m = [],
  h = null,
  g = !1,
  _ = null,
  v = null,
  y = null,
  b = null,
  x = null,
  S = null,
  C = null,
  w = new X(0, 0, 0),
  T = 0,
  E = !1,
  D = null,
  O = null,
  k = null,
  A = null,
  j = null,
  M = e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),
  N = !1,
  P = 0,
  F = e.getParameter(e.VERSION)
F.indexOf(`WebGL`) === -1
  ? F.indexOf(`OpenGL ES`) !== -1 &&
    ((P = parseFloat(/^OpenGL ES (\d)/.exec(F)[1])), (N = P >= 2))
  : ((P = parseFloat(/^WebGL (\d)/.exec(F)[1])), (N = P >= 1))
let ee = null,
  te = {},
  I = e.getParameter(e.SCISSOR_BOX),
  ne = e.getParameter(e.VIEWPORT),
  re = new ns().fromArray(I),
  ie = new ns().fromArray(ne)
