function fi(e, t) {
  return (
    (e = di(e)),
    (t = di(t)),
    t == null ? (e === `auto` ? null : e) : t === `auto` ? null : t
  )
}
var pi =
    typeof reportError == `function`
      ? reportError
      : function (e) {
          if (typeof window == `object` && typeof window.ErrorEvent == `function`) {
            var t = new window.ErrorEvent(`error`, {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof e == `object` && e && typeof e.message == `string`
                  ? String(e.message)
                  : String(e),
              error: e,
            })
            if (!window.dispatchEvent(t)) return
          } else if (typeof process == `object` && typeof process.emit == `function`) {
            process.emit(`uncaughtException`, e)
            return
          }
          console.error(e)
        },
  mi = [],
  hi = 0,
  gi = 0
