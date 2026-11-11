function Da(e) {
  ;(e.refCount--,
    e.refCount === 0 &&
      Ca(wa, function () {
        e.controller.abort()
      }))
}
