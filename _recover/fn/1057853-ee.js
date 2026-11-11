function ee(e, t) {
  if (!e || Jl) return ``
  Jl = !0
  var n = Error.prepareStackTrace
  Error.prepareStackTrace = void 0
  try {
    var r = {
      DetermineComponentFrameRoot: function () {
        try {
          if (t) {
            var n = function () {
              throw Error()
            }
            if (
              (Object.defineProperty(n.prototype, 'props', {
                set: function () {
                  throw Error()
                },
              }),
              typeof Reflect == `object` && Reflect.construct)
            ) {
              try {
                Reflect.construct(n, [])
              } catch (e) {
                var r = e
              }
              Reflect.construct(e, [], n)
            } else {
              try {
                n.call()
              } catch (e) {
                r = e
              }
              n = !1
              try {
                var i = Object.getOwnPropertyDescriptor(e.prototype, `props`)
                ;(Object.defineProperty(e.prototype, 'props', {
                  configurable: !0,
                  set: function () {
                    throw Error()
                  },
                }),
                  (n = !0),
                  new e())
              } finally {
                n &&
                  (i === void 0
                    ? delete e.prototype.props
                    : Object.defineProperty(e.prototype, 'props', i))
              }
            }
          } else {
            try {
              throw Error()
            } catch (e) {
              r = e
            }
            ;(n = e()) && typeof n.catch == `function` && n.catch(function () {})
          }
        } catch (e) {
          if (e && r && typeof e.stack == `string`) return [e.stack, r.stack]
        }
        return [null, null]
      },
    }
    r.DetermineComponentFrameRoot.displayName = `DetermineComponentFrameRoot`
    var i = Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot, `name`)
    i &&
      i.configurable &&
      Object.defineProperty(r.DetermineComponentFrameRoot, 'name', {
        value: `DetermineComponentFrameRoot`,
      })
    var a = r.DetermineComponentFrameRoot(),
      o = a[0],
      s = a[1]
    if (o && s) {
      var c = o.split(`
`),
        l = s.split(`
`)
      for (i = r = 0; r < c.length && !c[r].includes(`DetermineComponentFrameRoot`);) r++
      for (; i < l.length && !l[i].includes(`DetermineComponentFrameRoot`);) i++
      if (r === c.length || i === l.length)
        for (r = c.length - 1, i = l.length - 1; 1 <= r && 0 <= i && c[r] !== l[i];) i--
      for (; 1 <= r && 0 <= i; r--, i--)
        if (c[r] !== l[i]) {
          if (r !== 1 || i !== 1)
            do
              if ((r--, i--, 0 > i || c[r] !== l[i])) {
                var u =
                  `
` + c[r].replace(` at new `, ` at `)
                return (
                  e.displayName &&
                    u.includes(`<anonymous>`) &&
                    (u = u.replace(`<anonymous>`, e.displayName)),
                  u
                )
              }
            while (1 <= r && 0 <= i)
          break
        }
    }
  } finally {
    ;((Jl = !1), (Error.prepareStackTrace = n))
  }
  return (n = e ? e.displayName || e.name : ``) ? F(n) : ``
}
