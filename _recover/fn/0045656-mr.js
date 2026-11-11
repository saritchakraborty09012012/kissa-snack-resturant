function mr(e, t) {
  if (fr)
    return e === `compositionend` || (!ir && ur(e, t))
      ? ((e = Dn()), (En = Tn = wn = null), (fr = !1), e)
      : null
  switch (e) {
    case `paste`:
      return null
    case `keypress`:
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char
        if (t.which) return String.fromCharCode(t.which)
      }
      return null
    case `compositionend`:
      return sr && t.locale !== `ko` ? null : t.data
    default:
      return null
  }
}
var hr = {
  color: !0,
  date: !0,
  datetime: !0,
  'datetime-local': !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
}
