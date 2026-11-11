function fA({ children: e, className: t = `h-full w-full`, rootMargin: n = `420px 0px` }) {
  let r = (0, v.useRef)(null),
    [i, a] = (0, v.useState)(!1),
    [o, s] = (0, v.useState)(!1),
    [c, l] = (0, v.useState)(null)
  return (
    (0, v.useEffect)(() => {
      let e = r.current
      if (!e) return
      let t =
        typeof ResizeObserver > `u`
          ? null
          : new ResizeObserver(([e]) => {
              let { width: t, height: n } = e.contentRect
              if (t > 0 && n > 0) {
                let e = Math.round(t),
                  r = Math.round(n)
                l((t) => (t && t.w === e && t.h === r ? t : { w: e, h: r }))
              }
            })
      if ((t?.observe(e), typeof IntersectionObserver > `u`))
        return (a(!0), s(!0), () => t?.disconnect())
      let i = new IntersectionObserver(
        ([e]) => {
          e.isIntersecting ? (a(!0), s(!0)) : s(!1)
        },
        { rootMargin: n },
      )
      return (
        i.observe(e),
        () => {
          ;(i.disconnect(), t?.disconnect())
        }
      )
    }, [n]),
    (0, K.jsx)(`div`, {
      ref: r,
      className: t,
      children:
        i && c
          ? (0, K.jsx)(`div`, { style: { width: c.w, height: c.h }, children: e(o) })
          : null,
    })
  )
}
var pA = null
