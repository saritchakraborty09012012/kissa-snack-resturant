function a(n) {
  if (n && n.isTexture) {
    let r = n.mapping
    if (r === 303 || r === 304) {
      if (t.has(n)) {
        let e = t.get(n).texture
        return s(e, n.mapping)
      }
      {
        let r = n.image
        if (r && r.height > 0) {
          let i = new y_(r.height)
          return (
            i.fromEquirectangularTexture(e, n),
            t.set(n, i),
            n.addEventListener(`dispose`, l),
            s(i.texture, n.mapping)
          )
        }
        return null
      }
    }
  }
  return n
}
