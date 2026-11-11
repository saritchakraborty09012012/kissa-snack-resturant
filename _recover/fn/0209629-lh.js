function lh(e, t) {
  if (!(t.state.loading & 4)) {
    var n = sh.get(e)
    if (n) var r = n.get(null)
    else {
      ;((n = new Map()), sh.set(e, n))
      for (
        var i = e.querySelectorAll(`link[data-precedence],style[data-precedence]`), a = 0;
        a < i.length;
        a++
      ) {
        var o = i[a]
        ;(o.nodeName === `LINK` || o.getAttribute(`media`) !== `not all`) &&
          (n.set(o.dataset.precedence, o), (r = o))
      }
      r && n.set(null, r)
    }
    ;((i = t.instance),
      (o = i.getAttribute(`data-precedence`)),
      (a = n.get(o) || r),
      a === r && n.set(null, i),
      n.set(o, i),
      this.count++,
      (r = ah.bind(this)),
      i.addEventListener(`load`, r),
      i.addEventListener(`error`, r),
      a
        ? a.parentNode.insertBefore(i, a.nextSibling)
        : ((e = e.nodeType === 9 ? e.head : e), e.insertBefore(i, e.firstChild)),
      (t.state.loading |= 4))
  }
}
var uh = {
  $$typeof: F,
  Provider: null,
  Consumer: null,
  _currentValue: me,
  _currentValue2: me,
  _threadCount: 0,
}
