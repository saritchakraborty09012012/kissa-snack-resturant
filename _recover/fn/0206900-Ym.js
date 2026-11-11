function Ym(e, t, n) {
  ;((e = e.ownerDocument || e),
    e.head.insertBefore(n, t === `title` ? e.querySelector(`head > title`) : null))
}
