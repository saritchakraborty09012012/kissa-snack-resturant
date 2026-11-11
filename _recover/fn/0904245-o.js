function o(e) {
  let t = 0
  return (e.isInstancedMesh && (t += 2), e.isSkinnedMesh && (t += 1), t)
}
