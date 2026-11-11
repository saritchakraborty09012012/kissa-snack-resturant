function AF({
  scale: e = [1, 1, 1],
  amp: t = 0.1,
  freq: n = 2.2,
  seed: r = 1,
  material: i,
  position: a = [0, 0, 0],
  rotation: o,
  detail: s = 40,
}) {
  let c = OD({ scale: e, amp: t, freq: n, seed: r, detail: s })
  return (0, K.jsx)(`mesh`, { geometry: c, material: i, position: a, rotation: o })
}
