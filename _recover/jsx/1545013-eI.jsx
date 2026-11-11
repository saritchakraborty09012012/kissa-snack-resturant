function useInView(e = {}) {
  let { threshold: t = 0.15, once: n = !0, rootMargin: r = `0px 0px -6% 0px` } = e,
    i = (0, React.useRef)(null),
    [a, o] = (0, React.useState)(!1)
  return (
    (0, React.useEffect)(() => {
      let e = i.current
      if (!e) return
      if (typeof IntersectionObserver > `u`) {
        o(!0)
        return
      }
      let a = new IntersectionObserver(
        (e) => {
          e.forEach((e) => {
            e.isIntersecting ? (o(!0), n && a.unobserve(e.target)) : n || o(!1)
          })
        },
        {
          threshold: t,
          rootMargin: r,
        },
      )
      return (a.observe(e), () => a.disconnect())
    }, [t, n, r]),
    {
      ref: i,
      inView: a,
    }
  )
}
