function e(e) {
  e.canIntercept &&
    e.info === `react-transition` &&
    e.intercept({
      handler: function () {
        return new Promise(function (e) {
          return (i = e)
        })
      },
      focusReset: `manual`,
      scroll: `manual`,
    })
}
