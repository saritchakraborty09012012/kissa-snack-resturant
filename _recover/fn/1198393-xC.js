function xC(e) {
  ;(0, v.useEffect)(() => {
    let t = e
    return (
      window.addEventListener(`resize`, t),
      () => void window.removeEventListener(`resize`, t)
    )
  }, [e])
}
