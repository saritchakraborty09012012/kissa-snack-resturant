function Fm(e, t) {
  wm.M(e, t)
  var n = Dm
  if (n && e) {
    var r = Ot(n).hoistableScripts,
      i = Vm(e),
      a = r.get(i)
    a ||
      ((a = n.querySelector(Hm(i))),
      a ||
        ((e = D({ src: e, async: !0, type: `module` }, t)),
        (t = xm.get(i)) && Km(e, t),
        (a = n.createElement(`script`)),
        kt(a),
        ap(a, `link`, e),
        n.head.appendChild(a)),
      (a = { type: `script`, instance: a, count: 1, state: null }),
      r.set(i, a))
  }
}
