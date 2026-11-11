function _n(e) {
  var t = Et(e)
  if (t && (e = t.stateNode)) {
    var n = e[gt] || null
    a: switch (((e = t.stateNode), t.type)) {
      case `input`:
        if (
          (Zt(
            e,
            n.value,
            n.defaultValue,
            n.defaultValue,
            n.checked,
            n.defaultChecked,
            n.type,
            n.name,
          ),
          (t = n.name),
          n.type === `radio` && t != null)
        ) {
          for (n = e; n.parentNode;) n = n.parentNode
          for (
            n = n.querySelectorAll(`input[name="` + Xt(`` + t) + `"][type="radio"]`), t = 0;
            t < n.length;
            t++
          ) {
            var r = n[t]
            if (r !== e && r.form === e.form) {
              var a = r[gt] || null
              if (!a) throw Error(i(90))
              Zt(
                r,
                a.value,
                a.defaultValue,
                a.defaultValue,
                a.checked,
                a.defaultChecked,
                a.type,
                a.name,
              )
            }
          }
          for (t = 0; t < n.length; t++) ((r = n[t]), r.form === e.form && Jt(r))
        }
        break a
      case `textarea`:
        tn(e, n.value, n.defaultValue)
        break a
      case `select`:
        ;((t = n.value), t != null && en(e, !!n.multiple, t, !1))
    }
  }
}
var vn = !1
