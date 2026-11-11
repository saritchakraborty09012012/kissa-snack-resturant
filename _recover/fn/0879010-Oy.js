function Oy(e) {
  return e.envMap === !1
    ? `ENVMAP_MODE_REFLECTION`
    : Dy[e.envMapMode] || `ENVMAP_MODE_REFLECTION`
}
var ky = { 0: `ENVMAP_BLENDING_MULTIPLY`, 1: `ENVMAP_BLENDING_MIX`, 2: `ENVMAP_BLENDING_ADD` }
