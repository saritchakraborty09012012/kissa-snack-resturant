function _p(e) {
  return (
    e &&
    (e.isColor ||
      e.isMatrix3 ||
      e.isMatrix4 ||
      e.isVector2 ||
      e.isVector3 ||
      e.isVector4 ||
      e.isTexture ||
      e.isQuaternion)
  )
}
