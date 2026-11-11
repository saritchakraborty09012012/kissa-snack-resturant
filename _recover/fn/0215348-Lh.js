function Lh(e, t, n, r, i) {
  switch (t) {
    case `focusin`:
      return ((Oh = Ih(Oh, e, t, n, r, i)), !0)
    case `dragenter`:
      return ((kh = Ih(kh, e, t, n, r, i)), !0)
    case `mouseover`:
      return ((Ah = Ih(Ah, e, t, n, r, i)), !0)
    case `pointerover`:
      var a = i.pointerId
      return (jh.set(a, Ih(jh.get(a) || null, e, t, n, r, i)), !0)
    case `gotpointercapture`:
      return ((a = i.pointerId), Mh.set(a, Ih(Mh.get(a) || null, e, t, n, r, i)), !0)
  }
  return !1
}
