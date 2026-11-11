function SC(e, t) {
  ;(0, v.useEffect)(() => {
    if (t) {
      let t = e
      return (
        window.addEventListener(`scroll`, t, { capture: !0, passive: !0 }),
        () => void window.removeEventListener(`scroll`, t, !0)
      )
    }
  }, [e, t])
}
