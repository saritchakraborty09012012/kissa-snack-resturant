function Tk(e, t) {
  return (0, v.useCallback)(
    (n) => {
      if (((e.current = n), typeof t != `function`)) {
        t && (t.current = n)
        return
      }
      let r = t(n)
      if (typeof r == `function`)
        return () => {
          ;((e.current = null), r())
        }
    },
    [e, t],
  )
}
