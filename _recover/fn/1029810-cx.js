function cx(e) {
  if (typeof window > `u` || typeof window.matchMedia != `function` || !window.devicePixelRatio)
    return () => {}
  let t,
    n = () => {
      try {
        var e
        ;((t = window.matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`)),
          typeof t?.addEventListener == `function`
            ? t.addEventListener(`change`, i)
            : (e = t) == null || e.addListener == null || e.addListener(i))
      } catch {
        t = void 0
      }
    },
    r = () => {
      var e
      ;(typeof t?.removeEventListener == `function`
        ? t.removeEventListener(`change`, i)
        : (e = t) == null || e.removeListener == null || e.removeListener(i),
        (t = void 0))
    },
    i = () => {
      ;(r(), n(), e())
    }
  return (n(), r)
}
