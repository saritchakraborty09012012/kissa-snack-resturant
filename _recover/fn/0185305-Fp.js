function Fp(e, t, n, r, i, a, o, s, c) {
  var l = t.nodeType === 9 ? t : t.ownerDocument
  try {
    var u = l.startViewTransition({
      update: function () {
        var t = l.defaultView,
          n = t.navigation && t.navigation.transition,
          o = l.fonts.status
        r()
        var s = []
        if (
          (o === `loaded` && (Np(l), l.fonts.status === `loading` && s.push(l.fonts.ready)),
          (o = s.length),
          e !== null)
        )
          for (var c = e.suspenseyImages, u = 0, d = 0; d < c.length; d++) {
            var f = c[d]
            if (!f.complete) {
              var p = f.getBoundingClientRect()
              if (
                0 < p.bottom &&
                0 < p.right &&
                p.top < t.innerHeight &&
                p.left < t.innerWidth
              ) {
                if (((u += $m(f)), u > nh)) {
                  s.length = o
                  break
                }
                ;((f = new Promise(Pp.bind(f))), s.push(f))
              }
            }
          }
        if (0 < s.length)
          return (
            (t = Promise.race([
              Promise.all(s),
              new Promise(function (e) {
                return setTimeout(e, 500)
              }),
            ]).then(i, i)),
            (n ? Promise.allSettled([n.finished, t]) : t).then(a, a)
          )
        if ((i(), n)) return n.finished.then(a, a)
        a()
      },
      types: n,
    })
    l.__reactViewTransition = u
    var d = []
    return (
      u.ready.then(
        function () {
          for (
            var e = l.documentElement.getAnimations({ subtree: !0 }), t = 0;
            t < e.length;
            t++
          ) {
            var n = e[t],
              r = n.effect,
              i = r.pseudoElement
            if (i != null && i.startsWith(`::view-transition`)) {
              ;(d.push(n), (n = r.getKeyframes()))
              for (var a = (i = void 0), s = !0, c = 0; c < n.length; c++) {
                var u = n[c],
                  f = u.width
                if (i === void 0) i = f
                else if (i !== f) {
                  s = !1
                  break
                }
                if (((f = u.height), a === void 0)) a = f
                else if (a !== f) {
                  s = !1
                  break
                }
                ;(delete u.width, delete u.height, u.transform === `none` && delete u.transform)
              }
              s &&
                i !== void 0 &&
                a !== void 0 &&
                (r.setKeyframes(n),
                (s = getComputedStyle(r.target, r.pseudoElement)),
                s.width !== i || s.height !== a) &&
                ((s = n[0]),
                (s.width = i),
                (s.height = a),
                (s = n[n.length - 1]),
                (s.width = i),
                (s.height = a),
                r.setKeyframes(n))
            }
          }
          o()
        },
        function (e) {
          l.__reactViewTransition === u && (l.__reactViewTransition = null)
          try {
            if (typeof e == `object` && e)
              switch (e.name) {
                case `InvalidStateError`:
                  ;(e.message ===
                    `View transition was skipped because document visibility state is hidden.` ||
                    e.message ===
                      `Skipping view transition because document visibility state has become hidden.` ||
                    e.message === `Skipping view transition because viewport size changed.` ||
                    e.message === `Transition was aborted because of invalid state`) &&
                    (e = null)
              }
            e !== null && c(e)
          } finally {
            ;(r(), i(), o())
          }
        },
      ),
      u.finished.finally(function () {
        for (var e = 0; e < d.length; e++) d[e].cancel()
        ;(l.__reactViewTransition === u && (l.__reactViewTransition = null), s())
      }),
      u
    )
  } catch {
    return (r(), i(), o(), null)
  }
}
