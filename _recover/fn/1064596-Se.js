function Se(e) {
  ;(e.refCount--,
    e.refCount === 0 &&
      yu(bu, function () {
        e.controller.abort()
      }))
}
