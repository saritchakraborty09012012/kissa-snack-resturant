function GI() {
  ;(0, v.useEffect)(() => {
    if (window.matchMedia(`(prefers-reduced-motion: reduce)`).matches) return
    let e = new WI({
      duration: 1.15,
      easing: (e) => Math.min(1, 1.001 - 2 ** (-10 * e)),
      smoothWheel: !0,
      wheelMultiplier: 0.95,
      touchMultiplier: 1.4,
      infinite: !1,
    })
    ;(mA(e), e.on(`scroll`, qn.update))
    let t = (t) => e.raf(t * 1e3)
    ;(OF.ticker.add(t), OF.ticker.lagSmoothing(0), qn.refresh())
    let n = () => qn.refresh()
    return (
      window.addEventListener(`load`, n),
      () => {
        ;(window.removeEventListener(`load`, n), OF.ticker.remove(t), e.destroy(), mA(null))
      }
    )
  }, [])
}
