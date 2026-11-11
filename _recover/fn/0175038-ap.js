function ap(e, t, n) {
  switch (t) {
    case `div`:
    case `span`:
    case `svg`:
    case `path`:
    case `a`:
    case `g`:
    case `p`:
    case `li`:
      break
    case `img`:
      ;(Uf(`error`, e), Uf(`load`, e))
      var r = !1,
        a = !1,
        o
      for (o in n)
        if (n.hasOwnProperty(o)) {
          var s = n[o]
          if (s != null)
            switch (o) {
              case `src`:
                r = !0
                break
              case `srcSet`:
                a = !0
                break
              case `children`:
              case `dangerouslySetInnerHTML`:
                throw Error(i(137, t))
              default:
                rp(e, t, o, s, n, null)
            }
        }
      ;(a && rp(e, t, `srcSet`, n.srcSet, n, null), r && rp(e, t, `src`, n.src, n, null))
      return
    case `input`:
      Uf(`invalid`, e)
      var c = (o = s = a = null),
        l = null,
        u = null
      for (r in n)
        if (n.hasOwnProperty(r)) {
          var d = n[r]
          if (d != null)
            switch (r) {
              case `name`:
                a = d
                break
              case `type`:
                s = d
                break
              case `checked`:
                l = d
                break
              case `defaultChecked`:
                u = d
                break
              case `value`:
                o = d
                break
              case `defaultValue`:
                c = d
                break
              case `children`:
              case `dangerouslySetInnerHTML`:
                if (d != null) throw Error(i(137, t))
                break
              default:
                rp(e, t, r, d, n, null)
            }
        }
      Qt(e, o, c, l, u, s, a, !1)
      return
    case `select`:
      for (a in (Uf(`invalid`, e), (r = s = o = null), n))
        if (n.hasOwnProperty(a) && ((c = n[a]), c != null))
          switch (a) {
            case `value`:
              o = c
              break
            case `defaultValue`:
              s = c
              break
            case `multiple`:
              r = c
            default:
              rp(e, t, a, c, n, null)
          }
      ;((t = o),
        (n = s),
        (e.multiple = !!r),
        t == null ? n != null && en(e, !!r, n, !0) : en(e, !!r, t, !1))
      return
    case `textarea`:
      for (s in (Uf(`invalid`, e), (o = a = r = null), n))
        if (n.hasOwnProperty(s) && ((c = n[s]), c != null))
          switch (s) {
            case `value`:
              r = c
              break
            case `defaultValue`:
              a = c
              break
            case `children`:
              o = c
              break
            case `dangerouslySetInnerHTML`:
              if (c != null) throw Error(i(91))
              break
            default:
              rp(e, t, s, c, n, null)
          }
      nn(e, r, a, o)
      return
    case `option`:
      for (l in n)
        if (n.hasOwnProperty(l) && ((r = n[l]), r != null))
          switch (l) {
            case `selected`:
              e.selected = r && typeof r != `function` && typeof r != `symbol`
              break
            default:
              rp(e, t, l, r, n, null)
          }
      return
    case `dialog`:
      ;(Uf(`beforetoggle`, e), Uf(`toggle`, e), Uf(`cancel`, e), Uf(`close`, e))
      break
    case `iframe`:
    case `object`:
      Uf(`load`, e)
      break
    case `video`:
    case `audio`:
      for (r = 0; r < Bf.length; r++) Uf(Bf[r], e)
      break
    case `image`:
      ;(Uf(`error`, e), Uf(`load`, e))
      break
    case `details`:
      Uf(`toggle`, e)
      break
    case `embed`:
    case `source`:
    case `link`:
      ;(Uf(`error`, e), Uf(`load`, e))
    case `area`:
    case `base`:
    case `br`:
    case `col`:
    case `hr`:
    case `keygen`:
    case `meta`:
    case `param`:
    case `track`:
    case `wbr`:
    case `menuitem`:
      for (u in n)
        if (n.hasOwnProperty(u) && ((r = n[u]), r != null))
          switch (u) {
            case `children`:
            case `dangerouslySetInnerHTML`:
              throw Error(i(137, t))
            default:
              rp(e, t, u, r, n, null)
          }
      return
    default:
      if (cn(t)) {
        for (d in n)
          n.hasOwnProperty(d) && ((r = n[d]), r !== void 0 && ip(e, t, d, r, n, void 0))
        return
      }
  }
  for (c in n) n.hasOwnProperty(c) && ((r = n[c]), r != null && rp(e, t, c, r, n, null))
}
var op = {}
