function cm(e) {
  switch (e.toLowerCase()) {
    case `scalar`:
    case `double`:
    case `float`:
    case `number`:
    case `integer`:
      return nm
    case `vector`:
    case `vector2`:
    case `vector3`:
    case `vector4`:
      return om
    case `color`:
      return tm
    case `quaternion`:
      return im
    case `bool`:
    case `boolean`:
      return em
    case `string`:
      return am
  }
  throw Error(`THREE.KeyframeTrack: Unsupported typeName: ` + e)
}
