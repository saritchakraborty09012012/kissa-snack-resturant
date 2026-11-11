function Hy() {
  let e = {}
  return {
    get: function (t) {
      if (e[t.id] !== void 0) return e[t.id]
      let n
      switch (t.type) {
        case `SunLight`:
        case `DirectionalLight`:
          n = { direction: new Y(), color: new X() }
          break
        case `SpotLight`:
          n = {
            position: new Y(),
            direction: new Y(),
            color: new X(),
            distance: 0,
            coneCos: 0,
            penumbraCos: 0,
            decay: 0,
          }
          break
        case `PointLight`:
          n = { position: new Y(), color: new X(), distance: 0, decay: 0 }
          break
        case `HemisphereLight`:
          n = { direction: new Y(), skyColor: new X(), groundColor: new X() }
          break
        case `RectAreaLight`:
          n = { color: new X(), position: new Y(), halfWidth: new Y(), halfHeight: new Y() }
      }
      return ((e[t.id] = n), n)
    },
  }
}
