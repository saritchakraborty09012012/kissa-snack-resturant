function se(t, i) {
  let a = r.get(t)
  t.version > 0 && a.__version !== t.version
    ? me(a, t, i)
    : n.bindTexture(e.TEXTURE_CUBE_MAP, a.__webglTexture, e.TEXTURE0 + i)
}
let ce = { [Fr]: e.REPEAT, [Ir]: e.CLAMP_TO_EDGE, [Lr]: e.MIRRORED_REPEAT },
  le = {
    [Rr]: e.NEAREST,
    [zr]: e.NEAREST_MIPMAP_NEAREST,
    [Vr]: e.NEAREST_MIPMAP_LINEAR,
    [Ur]: e.LINEAR,
    [Wr]: e.LINEAR_MIPMAP_NEAREST,
    [Kr]: e.LINEAR_MIPMAP_LINEAR,
  },
  ue = {
    512: e.NEVER,
    519: e.ALWAYS,
    513: e.LESS,
    515: e.LEQUAL,
    514: e.EQUAL,
    518: e.GEQUAL,
    516: e.GREATER,
    517: e.NOTEQUAL,
  }
