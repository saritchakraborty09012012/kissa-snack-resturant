function hT(e) {
  let t,
    n = e.extensions && e.extensions[Ew.KHR_DRACO_MESH_COMPRESSION]
  if (
    ((t = n
      ? `draco:` + n.bufferView + `:` + n.indices + `:` + gT(n.attributes)
      : e.indices + `:` + gT(e.attributes) + `:` + e.mode),
    e.targets !== void 0)
  )
    for (let n = 0, r = e.targets.length; n < r; n++) t += `:` + gT(e.targets[n])
  return t
}
