function rt(e) {
  let t = 0
  for (let n of e) n.texture !== null && t++
  return t
}
