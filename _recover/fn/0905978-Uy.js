function Uy() {
  let e = {}
  return {
    get: function (t) {
      if (e[t.id] !== void 0) return e[t.id]
      let n
      switch (t.type) {
        case `SunLight`:
        case `DirectionalLight`:
          n = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new J(),
          }
          break
        case `SpotLight`:
          n = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new J(),
          }
          break
        case `PointLight`:
          n = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new J(),
            shadowCameraNear: 1,
            shadowCameraFar: 1e3,
          }
      }
      return ((e[t.id] = n), n)
    },
  }
}
var Wy = 0
