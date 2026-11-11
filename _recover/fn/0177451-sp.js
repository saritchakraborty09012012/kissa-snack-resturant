function sp(e, t, n, r) {
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
    case `input`:
      var a = null,
        o = null,
        s = null,
        c = null,
        l = null,
        u = null,
        d = null
      for (m in n) {
        var f = n[m]
        if (n.hasOwnProperty(m) && f != null)
          switch (m) {
            case `checked`:
              break
            case `value`:
              break
            case `defaultValue`:
              l = f
            default:
              r.hasOwnProperty(m) || rp(e, t, m, null, r, f)
          }
      }
      for (var p in r) {
        var m = r[p]
        if (((f = n[p]), r.hasOwnProperty(p) && (m != null || f != null)))
          switch (p) {
            case `type`:
              ;(m !== f && (zt = !0), (o = m))
              break
            case `name`:
              ;(m !== f && (zt = !0), (a = m))
              break
            case `checked`:
              ;(m !== f && (zt = !0), (u = m))
              break
            case `defaultChecked`:
              ;(m !== f && (zt = !0), (d = m))
              break
            case `value`:
              ;(m !== f && (zt = !0), (s = m))
              break
            case `defaultValue`:
              ;(m !== f && (zt = !0), (c = m))
              break
            case `children`:
            case `dangerouslySetInnerHTML`:
              if (m != null) throw Error(i(137, t))
              break
            default:
              m !== f && rp(e, t, p, m, r, f)
          }
      }
      Zt(e, s, c, l, u, d, o, a)
      return
    case `select`:
      for (o in ((m = s = c = p = null), n))
        if (((l = n[o]), n.hasOwnProperty(o) && l != null))
          switch (o) {
            case `value`:
              break
            case `multiple`:
              m = l
            default:
              r.hasOwnProperty(o) || rp(e, t, o, null, r, l)
          }
      for (a in r)
        if (((o = r[a]), (l = n[a]), r.hasOwnProperty(a) && (o != null || l != null)))
          switch (a) {
            case `value`:
              ;(o !== l && (zt = !0), (p = o))
              break
            case `defaultValue`:
              ;(o !== l && (zt = !0), (c = o))
              break
            case `multiple`:
              ;(o !== l && (zt = !0), (s = o))
            default:
              o !== l && rp(e, t, a, o, r, l)
          }
      ;((t = c),
        (n = s),
        (r = m),
        p == null
          ? !!r != !!n && (t == null ? en(e, !!n, n ? [] : ``, !1) : en(e, !!n, t, !0))
          : en(e, !!n, p, !1))
      return
    case `textarea`:
      for (c in ((m = p = null), n))
        if (((a = n[c]), n.hasOwnProperty(c) && a != null && !r.hasOwnProperty(c)))
          switch (c) {
            case `value`:
              break
            case `children`:
              break
            default:
              rp(e, t, c, null, r, a)
          }
      for (s in r)
        if (((a = r[s]), (o = n[s]), r.hasOwnProperty(s) && (a != null || o != null)))
          switch (s) {
            case `value`:
              ;(a !== o && (zt = !0), (p = a))
              break
            case `defaultValue`:
              ;(a !== o && (zt = !0), (m = a))
              break
            case `children`:
              break
            case `dangerouslySetInnerHTML`:
              if (a != null) throw Error(i(91))
              break
            default:
              a !== o && rp(e, t, s, a, r, o)
          }
      tn(e, p, m)
      return
    case `option`:
      for (var h in n)
        if (((p = n[h]), n.hasOwnProperty(h) && p != null && !r.hasOwnProperty(h)))
          switch (h) {
            case `selected`:
              e.selected = !1
              break
            default:
              rp(e, t, h, null, r, p)
          }
      for (l in r)
        if (
          ((p = r[l]), (m = n[l]), r.hasOwnProperty(l) && p !== m && (p != null || m != null))
        )
          switch (l) {
            case `selected`:
              ;(p !== m && (zt = !0),
                (e.selected = p && typeof p != `function` && typeof p != `symbol`))
              break
            default:
              rp(e, t, l, p, r, m)
          }
      return
    case `img`:
    case `link`:
    case `area`:
    case `base`:
    case `br`:
    case `col`:
    case `embed`:
    case `hr`:
    case `keygen`:
    case `meta`:
    case `param`:
    case `source`:
    case `track`:
    case `wbr`:
    case `menuitem`:
      for (var g in n)
        ((p = n[g]),
          n.hasOwnProperty(g) && p != null && !r.hasOwnProperty(g) && rp(e, t, g, null, r, p))
      for (u in r)
        if (
          ((p = r[u]), (m = n[u]), r.hasOwnProperty(u) && p !== m && (p != null || m != null))
        )
          switch (u) {
            case `children`:
            case `dangerouslySetInnerHTML`:
              if (p != null) throw Error(i(137, t))
              break
            default:
              rp(e, t, u, p, r, m)
          }
      return
    default:
      if (cn(t)) {
        for (var _ in n)
          ((p = n[_]),
            n.hasOwnProperty(_) &&
              p !== void 0 &&
              !r.hasOwnProperty(_) &&
              ip(e, t, _, void 0, r, p))
        for (d in r)
          ((p = r[d]),
            (m = n[d]),
            !r.hasOwnProperty(d) ||
              p === m ||
              (p === void 0 && m === void 0) ||
              ip(e, t, d, p, r, m))
        return
      }
  }
  for (var v in n)
    ((p = n[v]),
      n.hasOwnProperty(v) && p != null && !r.hasOwnProperty(v) && rp(e, t, v, null, r, p))
  for (f in r)
    ((p = r[f]),
      (m = n[f]),
      !r.hasOwnProperty(f) || p === m || (p == null && m == null) || rp(e, t, f, p, r, m))
}
