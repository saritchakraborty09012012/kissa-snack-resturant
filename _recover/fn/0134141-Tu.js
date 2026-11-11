function Tu(e, t, n) {
  var r = e.alternate,
    a = e.flags
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (a & 4 && ((r = e.updateQueue), (r = r === null ? null : r.events), r !== null))
        for (var o = 0; o < r.length; o++) {
          var s = r[o]
          s.ref.impl = s.nextImpl
        }
      ;(Cu(t, e, n), Eu(e), a & 4 && (gl(3, e, e.return), hl(3, e), gl(5, e, e.return)))
      break
    case 1:
      ;(Cu(t, e, n),
        Eu(e),
        a & 512 && ($l || r === null || bl(r, r.return)),
        a & 64 &&
          Ql &&
          ((e = e.updateQueue),
          e !== null &&
            ((t = e.callbacks),
            t !== null &&
              ((n = e.shared.hiddenCallbacks),
              (e.shared.hiddenCallbacks = n === null ? t : n.concat(t))))))
      break
    case 26:
      if (
        ((o = wu), Cu(t, e, n), Eu(e), a & 512 && ($l || r === null || bl(r, r.return)), a & 4)
      ) {
        if (((a = r === null ? null : r.memoizedState), (n = e.memoizedState), r === null)) {
          if (n === null) {
            if (e.stateNode === null) {
              if (Ql) e.stateNode = hp(e.type, e.memoizedProps, t.containerInfo, e)
              else {
                a: {
                  ;((t = e.type), (n = e.memoizedProps), (a = o.ownerDocument || o))
                  b: switch (t) {
                    case `title`:
                      ;((r = a.getElementsByTagName(`title`)[0]),
                        (!r ||
                          r[St] ||
                          r[ht] ||
                          r.namespaceURI === `http://www.w3.org/2000/svg` ||
                          r.hasAttribute(`itemprop`)) &&
                          ((r = a.createElement(t)),
                          a.head.insertBefore(r, a.querySelector(`head > title`))),
                        ap(r, t, n),
                        (r[ht] = e),
                        kt(r),
                        (t = r))
                      break a
                    case `link`:
                      if ((o = Jm(`link`, `href`, a).get(t + (n.href || ``)))) {
                        for (s = 0; s < o.length; s++)
                          if (
                            ((r = o[s]),
                            r.getAttribute(`href`) ===
                              (n.href == null || n.href === `` ? null : n.href) &&
                              r.getAttribute(`rel`) === (n.rel == null ? null : n.rel) &&
                              r.getAttribute(`title`) === (n.title == null ? null : n.title) &&
                              r.getAttribute(`crossorigin`) ===
                                (n.crossOrigin == null ? null : n.crossOrigin))
                          ) {
                            o.splice(s, 1)
                            break b
                          }
                      }
                      ;((r = a.createElement(t)), ap(r, t, n), a.head.appendChild(r))
                      break
                    case `meta`:
                      if ((o = Jm(`meta`, `content`, a).get(t + (n.content || ``)))) {
                        for (s = 0; s < o.length; s++)
                          if (
                            ((r = o[s]),
                            r.getAttribute(`content`) ===
                              (n.content == null ? null : `` + n.content) &&
                              r.getAttribute(`name`) === (n.name == null ? null : n.name) &&
                              r.getAttribute(`property`) ===
                                (n.property == null ? null : n.property) &&
                              r.getAttribute(`http-equiv`) ===
                                (n.httpEquiv == null ? null : n.httpEquiv) &&
                              r.getAttribute(`charset`) ===
                                (n.charSet == null ? null : n.charSet))
                          ) {
                            o.splice(s, 1)
                            break b
                          }
                      }
                      ;((r = a.createElement(t)), ap(r, t, n), a.head.appendChild(r))
                      break
                    default:
                      throw Error(i(468, t))
                  }
                  ;((r[ht] = e), kt(r), (t = r))
                }
                e.stateNode = t
              }
            } else Ql || Ym(o, e.type, e.stateNode)
          } else e.stateNode = Um(o, n, e.memoizedProps)
        } else
          a === n
            ? n === null && e.stateNode !== null && Dl(e, e.memoizedProps, r.memoizedProps)
            : (a === null
                ? ((t = r.stateNode), t === null || $l || t.parentNode.removeChild(t))
                : a.count--,
              n === null ? Ql || Ym(o, e.type, e.stateNode) : Um(o, n, e.memoizedProps))
      }
      break
    case 27:
      ;(Cu(t, e, n),
        Eu(e),
        a & 512 && ($l || r === null || bl(r, r.return)),
        r !== null && a & 4 && Dl(e, e.memoizedProps, r.memoizedProps))
      break
    case 5:
      if (
        ((o = eu),
        (eu = !1),
        Cu(t, e, n),
        (eu = o),
        Eu(e),
        a & 512 && ($l || r === null || bl(r, r.return)),
        e.flags & 32)
      ) {
        t = e.stateNode
        try {
          ;(rn(t, ``), (zt = !0))
        } catch (t) {
          mf(e, e.return, t)
        }
      }
      ;(a & 4 &&
        e.stateNode != null &&
        ((t = e.memoizedProps), Dl(e, t, r === null ? t : r.memoizedProps)),
        a & 1024 && (tu = !0))
      break
    case 6:
      if ((Cu(t, e, n), Eu(e), a & 4)) {
        if (e.stateNode === null) throw Error(i(162))
        ;((t = e.memoizedProps), (n = e.stateNode))
        try {
          ;((n.nodeValue = t), (zt = !0))
        } catch (t) {
          mf(e, e.return, t)
        }
      }
      break
    case 3:
      if (
        ((zt = !1),
        (qm = null),
        (o = wu),
        (wu = Cm(t.containerInfo)),
        Cu(t, e, n),
        (wu = o),
        Eu(e),
        a & 4 && r !== null && r.memoizedState.isDehydrated)
      )
        try {
          Gh(t.containerInfo)
        } catch (t) {
          mf(e, e.return, t)
        }
      ;(tu && ((tu = !1), Du(e)), (zt = !1))
      break
    case 4:
      ;((a = eu),
        (eu = Ql),
        (r = Bt()),
        (o = wu),
        (wu = Cm(e.stateNode.containerInfo)),
        Cu(t, e, n),
        Eu(e),
        (wu = o),
        zt && au && (ou = !0),
        (zt = r),
        (eu = a))
      break
    case 12:
      ;(Cu(t, e, n), Eu(e))
      break
    case 31:
      ;(Cu(t, e, n),
        Eu(e),
        a & 4 && ((t = e.updateQueue), t !== null && ((e.updateQueue = null), Su(e, t))))
      break
    case 13:
      ;(Cu(t, e, n),
        Eu(e),
        e.child.flags & 8192 &&
          (e.memoizedState !== null) != (r !== null && r.memoizedState !== null) &&
          (md = Ne()),
        a & 4 && ((t = e.updateQueue), t !== null && ((e.updateQueue = null), Su(e, t))))
      break
    case 22:
      ;((o = e.memoizedState !== null), (s = r !== null && r.memoizedState !== null))
      var c = Ql,
        l = $l,
        u = eu
      ;((Ql = c || o),
        (eu = u || o),
        ($l = l || s),
        Cu(t, e, n),
        ($l = l),
        (eu = u),
        (Ql = c),
        Eu(e),
        a & 8192 &&
          ((t = e.stateNode),
          (t._visibility = o ? t._visibility & -2 : t._visibility | 1),
          !o ||
            r === null ||
            s ||
            Ql ||
            $l ||
            ((t = s || $l),
            (n = Ql),
            (r = $l),
            (Ql = o || Ql),
            ($l = t),
            ju(e, 2),
            (Ql = n),
            ($l = r)),
          (!o && eu) || du(e, o)),
        a & 4 &&
          ((t = e.updateQueue),
          t !== null && ((n = t.retryQueue), n !== null && ((t.retryQueue = null), Su(e, n)))))
      break
    case 19:
      ;(Cu(t, e, n),
        Eu(e),
        a & 4 && ((t = e.updateQueue), t !== null && ((e.updateQueue = null), Su(e, t))))
      break
    case 30:
      ;(a & 512 && ($l || r === null || bl(r, r.return)),
        (a = Bt()),
        (o = au),
        (s = (n & 335544064) === n),
        (c = e.memoizedProps),
        (au = s && fi(c.default, c.update) !== `none`),
        Cu(t, e, n),
        Eu(e),
        s && r !== null && zt && (e.flags |= 4),
        (au = o),
        (zt = a))
      break
    case 21:
      break
    case 7:
      ;(a & 512 && ($l || r === null || bl(r, r.return)),
        r && r.stateNode !== null && (r.stateNode._fragmentFiber = e))
    default:
      ;(Cu(t, e, n), Eu(e))
  }
}
