function Uo() {
  let e = {
      enabled: !0,
      workingColorSpace: _a,
      spaces: {},
      convert: function (e, t, n) {
        return (
          this.enabled === !1 ||
            t === n ||
            !t ||
            !n ||
            (this.spaces[t].transfer === `srgb` &&
              ((e.r = Go(e.r)), (e.g = Go(e.g)), (e.b = Go(e.b))),
            this.spaces[t].primaries !== this.spaces[n].primaries &&
              (e.applyMatrix3(this.spaces[t].toXYZ), e.applyMatrix3(this.spaces[n].fromXYZ)),
            this.spaces[n].transfer === `srgb` &&
              ((e.r = Ko(e.r)), (e.g = Ko(e.g)), (e.b = Ko(e.b)))),
          e
        )
      },
      workingToColorSpace: function (e, t) {
        return this.convert(e, this.workingColorSpace, t)
      },
      colorSpaceToWorking: function (e, t) {
        return this.convert(e, t, this.workingColorSpace)
      },
      getPrimaries: function (e) {
        return this.spaces[e].primaries
      },
      getTransfer: function (e) {
        return e === `` ? va : this.spaces[e].transfer
      },
      getToneMappingMode: function (e) {
        return this.spaces[e].outputColorSpaceConfig.toneMappingMode || `standard`
      },
      getLuminanceCoefficients: function (e, t = this.workingColorSpace) {
        return e.fromArray(this.spaces[t].luminanceCoefficients)
      },
      define: function (e) {
        Object.assign(this.spaces, e)
      },
      _getMatrix: function (e, t, n) {
        return e.copy(this.spaces[n].fromXYZ).multiply(this.spaces[t].toXYZ)
      },
      _getDrawingBufferColorSpace: function (e) {
        return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace
      },
      _getUnpackColorSpace: function (e = this.workingColorSpace) {
        return this.spaces[e].workingColorSpaceConfig.unpackColorSpace
      },
    },
    t = [0.64, 0.33, 0.3, 0.6, 0.15, 0.06],
    n = [0.2126, 0.7152, 0.0722],
    r = [0.3127, 0.329]
  return (
    e.define({
      [_a]: {
        primaries: t,
        whitePoint: r,
        transfer: va,
        toXYZ: Vo,
        fromXYZ: Ho,
        luminanceCoefficients: n,
        workingColorSpaceConfig: { unpackColorSpace: ga },
        outputColorSpaceConfig: { drawingBufferColorSpace: ga },
      },
      [ga]: {
        primaries: t,
        whitePoint: r,
        transfer: ya,
        toXYZ: Vo,
        fromXYZ: Ho,
        luminanceCoefficients: n,
        outputColorSpaceConfig: { drawingBufferColorSpace: ga },
      },
    }),
    e
  )
}
var Wo = Uo()
