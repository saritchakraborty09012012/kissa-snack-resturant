function rh(e, t) {
  return (
    e.stylesheets && e.count === 0 && ch(e, e.stylesheets),
    0 < e.count || 0 < e.imgCount
      ? function (n) {
          var r = setTimeout(function () {
            if ((e.stylesheets && ch(e, e.stylesheets), e.unsuspend)) {
              var t = e.unsuspend
              ;((e.unsuspend = null), t())
            }
          }, 6e4 + t)
          0 < e.imgBytes && nh === 0 && (nh = 62500 * lp())
          var i = setTimeout(
            function () {
              if (
                ((e.waitingForImages = !1),
                e.count === 0 && (e.stylesheets && ch(e, e.stylesheets), e.unsuspend))
              ) {
                var t = e.unsuspend
                ;((e.unsuspend = null), t())
              }
            },
            (e.imgBytes > nh ? 50 : 800) + t,
          )
          return (
            (e.unsuspend = n),
            function () {
              ;((e.unsuspend = null), clearTimeout(r), clearTimeout(i))
            }
          )
        }
      : null
  )
}
