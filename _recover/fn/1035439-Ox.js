function Ox(e, t) {
  e.manual ||
    (rx(e)
      ? ((e.left = t.width / -2),
        (e.right = t.width / 2),
        (e.top = t.height / 2),
        (e.bottom = t.height / -2))
      : (e.aspect = t.width / t.height),
    e.updateProjectionMatrix())
}
var kx = (e) => e?.isObject3D
