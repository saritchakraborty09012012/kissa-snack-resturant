function Fa(e, t) {
  if (ja === null) {
    var n = (ja = [])
    ;((Ma = 0),
      (Na = Ff()),
      (Pa = {
        status: `pending`,
        value: void 0,
        then: function (e) {
          n.push(e)
        },
      }))
  }
  return (Ma++, t.then(Ia, Ia), t)
}
