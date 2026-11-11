function xa(e, t) {
  var n = t._currentValue
  if (((t = { context: t, memoizedValue: n, next: null }), da === null)) {
    if (e === null) throw Error(i(308))
    ;((da = t), (e.dependencies = { lanes: 0, firstContext: t }), (e.flags |= 524288))
  } else da = da.next = t
  return n
}
var Sa =
    typeof AbortController < `u`
      ? AbortController
      : function () {
          var e = [],
            t = (this.signal = {
              aborted: !1,
              addEventListener: function (t, n) {
                e.push(n)
              },
            })
          this.abort = function () {
            ;((t.aborted = !0),
              e.forEach(function (e) {
                return e()
              }))
          }
        },
  Ca = t.unstable_scheduleCallback,
  wa = t.unstable_NormalPriority,
  Ta = {
    $$typeof: F,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0,
  }
