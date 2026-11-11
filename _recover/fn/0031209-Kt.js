function Kt(e, t, n) {
  var r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t)
  if (
    !e.hasOwnProperty(t) &&
    r !== void 0 &&
    typeof r.get == `function` &&
    typeof r.set == `function`
  ) {
    var i = r.get,
      a = r.set
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this)
        },
        set: function (e) {
          ;((n = `` + e), a.call(this, e))
        },
      }),
      Object.defineProperty(e, t, { enumerable: r.enumerable }),
      {
        getValue: function () {
          return n
        },
        setValue: function (e) {
          n = `` + e
        },
        stopTracking: function () {
          ;((e._valueTracker = null), delete e[t])
        },
      }
    )
  }
}
