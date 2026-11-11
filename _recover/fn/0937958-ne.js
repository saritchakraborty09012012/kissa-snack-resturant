function ne() {
  let e = F
  return (
    e >= i.maxTextures &&
      q(
        `WebGLTextures: Trying to use ` +
          (e + 1) +
          ` texture units while this GPU supports only ` +
          i.maxTextures,
      ),
    (F += 1),
    e
  )
}
