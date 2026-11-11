function re(e) {
  let t = []
  return (
    t.push(e.wrapS),
    t.push(e.wrapT),
    t.push(e.wrapR || 0),
    t.push(e.magFilter),
    t.push(e.minFilter),
    t.push(e.anisotropy),
    t.push(e.internalFormat),
    t.push(e.format),
    t.push(e.type),
    t.push(e.generateMipmaps),
    t.push(e.mipmapsAutoUpdate),
    t.push(e.premultiplyAlpha),
    t.push(e.flipY),
    t.push(e.unpackAlignment),
    t.push(e.colorSpace),
    t.join()
  )
}
