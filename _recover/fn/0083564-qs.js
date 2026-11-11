function qs(e, t, n, r) {
  if (e.tag !== 5) throw Error(i(476))
  var a = Js(e).queue
  Gs(
    e,
    a,
    t,
    me,
    n === null
      ? Ks
      : function () {
          return (Ys(e), n(r))
        },
  )
}
