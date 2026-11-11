function a(e) {
  return (
    (e = n.manager.resolveURL(e)),
    n.manager.itemStart(e),
    i.load(
      e,
      function () {
        n.manager.itemEnd(e)
      },
      void 0,
      function () {
        ;(n.manager.itemError(e), n.manager.itemEnd(e))
      },
    )
  )
}
