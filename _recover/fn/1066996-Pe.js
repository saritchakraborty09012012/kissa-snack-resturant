function Pe(e, t) {
  if (ku === null) {
    var n = (ku = [])
    ;((Au = 0),
      (ju = Ne()),
      (Mu = {
        status: `pending`,
        value: void 0,
        then: function (e) {
          n.push(e)
        },
      }))
  }
  return (Au++, t.then(Fe, Fe), t)
}
