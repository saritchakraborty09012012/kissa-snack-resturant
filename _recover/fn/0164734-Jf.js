function Jf(e, t, n, r, i) {
  var a = r
  if (!(t & 1) && !(t & 2) && r !== null)
    a: for (;;) {
      if (r === null) return
      var s = r.tag
      if (s === 3 || s === 4) {
        var c = r.stateNode.containerInfo
        if (c === i) break
        if (s === 4)
          for (s = r.return; s !== null;) {
            var l = s.tag
            if ((l === 3 || l === 4) && s.stateNode.containerInfo === i) return
            s = s.return
          }
        for (; c !== null;) {
          if (((s = Tt(c)), s === null)) return
          if (((l = s.tag), l === 5 || l === 6 || l === 26 || l === 27)) {
            r = a = s
            continue a
          }
          c = c.parentNode
        }
      }
      r = r.return
    }
  yn(function () {
    var r = a,
      i = mn(n),
      s = []
    a: {
      var c = oi.get(e)
      if (c !== void 0) {
        var l = Nn,
          u = e
        switch (e) {
          case `keypress`:
            if (On(n) === 0) break a
          case `keydown`:
          case `keyup`:
            l = Zn
            break
          case `focusin`:
            ;((u = `focus`), (l = Hn))
            break
          case `focusout`:
            ;((u = `blur`), (l = Hn))
            break
          case `beforeblur`:
          case `afterblur`:
            l = Hn
            break
          case `click`:
            if (n.button === 2) break a
          case `auxclick`:
          case `dblclick`:
          case `mousedown`:
          case `mousemove`:
          case `mouseup`:
          case `mouseout`:
          case `mouseover`:
          case `contextmenu`:
            l = Bn
            break
          case `drag`:
          case `dragend`:
          case `dragenter`:
          case `dragexit`:
          case `dragleave`:
          case `dragover`:
          case `dragstart`:
          case `drop`:
            l = Vn
            break
          case `touchcancel`:
          case `touchend`:
          case `touchmove`:
          case `touchstart`:
            l = er
            break
          case $r:
          case ei:
          case ti:
            l = Un
            break
          case ai:
            l = tr
            break
          case `scroll`:
          case `scrollend`:
            l = Fn
            break
          case `wheel`:
            l = nr
            break
          case `copy`:
          case `cut`:
          case `paste`:
            l = Wn
            break
          case `gotpointercapture`:
          case `lostpointercapture`:
          case `pointercancel`:
          case `pointerdown`:
          case `pointermove`:
          case `pointerout`:
          case `pointerover`:
          case `pointerup`:
            l = Qn
            break
          case `submit`:
            l = $n
            break
          case `toggle`:
          case `beforetoggle`:
            l = rr
        }
        var d = !!(t & 4),
          f = !d && (e === `scroll` || e === `scrollend`),
          p = d ? (c === null ? null : c + `Capture`) : c
        d = []
        for (var m = r, h; m !== null;) {
          var g = m
          if (
            ((h = g.stateNode),
            (g = g.tag),
            (g !== 5 && g !== 26 && g !== 27) ||
              h === null ||
              p === null ||
              ((g = bn(m, p)), g != null && d.push(Yf(m, g, h))),
            f)
          )
            break
          m = m.return
        }
        0 < d.length && ((c = new l(c, u, null, n, i)), s.push({ event: c, listeners: d }))
      }
    }
    if (!(t & 7)) {
      a: {
        if (
          ((l = e === `mouseover` || e === `pointerover`),
          (c = e === `mouseout` || e === `pointerout`),
          l && n !== pn && (u = n.relatedTarget || n.fromElement) && (Tt(u) || u[_t]))
        )
          break a
        ;(c || l) &&
          ((u =
            i.window === i
              ? i
              : (l = i.ownerDocument)
                ? l.defaultView || l.parentWindow
                : window),
          c
            ? ((l = n.relatedTarget || n.toElement),
              (c = r),
              (l = l ? Tt(l) : null),
              l !== null &&
                ((f = o(l)), (d = l.tag), l !== f || (d !== 5 && d !== 27 && d !== 6)) &&
                (l = null))
            : ((c = null), (l = r)),
          c !== l &&
            ((d = Bn),
            (g = `onMouseLeave`),
            (p = `onMouseEnter`),
            (m = `mouse`),
            (e === `pointerout` || e === `pointerover`) &&
              ((d = Qn), (g = `onPointerLeave`), (p = `onPointerEnter`), (m = `pointer`)),
            (f = c == null ? u : Dt(c)),
            (h = l == null ? u : Dt(l)),
            (u = new d(g, m + `leave`, c, n, i)),
            (u.target = f),
            (u.relatedTarget = h),
            (g = null),
            Tt(i) === r &&
              ((d = new d(p, m + `enter`, l, n, i)),
              (d.target = h),
              (d.relatedTarget = f),
              (g = d)),
            (f = g),
            (d = c && l ? E(c, l, Zf) : null),
            c !== null && Qf(s, u, c, d, !1),
            l !== null && f !== null && Qf(s, f, l, d, !0)))
      }
      a: {
        if (
          ((c = r ? Dt(r) : window),
          (l = c.nodeName && c.nodeName.toLowerCase()),
          l === `select` || (l === `input` && c.type === `file`))
        )
          var _ = Sr
        else if (gr(c)) {
          if (Cr) _ = Mr
          else {
            _ = Ar
            var v = kr
          }
        } else
          ((l = c.nodeName),
            !l || l.toLowerCase() !== `input` || (c.type !== `checkbox` && c.type !== `radio`)
              ? r && cn(r.elementType) && (_ = Sr)
              : (_ = jr))
        if (_ && (_ = _(e, r))) {
          _r(s, _, n, i)
          break a
        }
        v && v(e, c, r)
      }
      switch (((v = r ? Dt(r) : window), e)) {
        case `focusin`:
          ;(gr(v) || v.contentEditable === `true`) && ((Ur = v), (Wr = r), (Gr = null))
          break
        case `focusout`:
          Gr = Wr = Ur = null
          break
        case `mousedown`:
          Kr = !0
          break
        case `contextmenu`:
        case `mouseup`:
        case `dragend`:
          ;((Kr = !1), qr(s, n, i))
          break
        case `selectionchange`:
          if (Hr) break
        case `keydown`:
        case `keyup`:
          qr(s, n, i)
      }
      var y
      if (ir)
        b: {
          switch (e) {
            case `compositionstart`:
              var b = `onCompositionStart`
              break b
            case `compositionend`:
              b = `onCompositionEnd`
              break b
            case `compositionupdate`:
              b = `onCompositionUpdate`
              break b
          }
          b = void 0
        }
      else
        fr
          ? ur(e, n) && (b = `onCompositionEnd`)
          : e === `keydown` && n.keyCode === 229 && (b = `onCompositionStart`)
      ;(b &&
        (sr &&
          n.locale !== `ko` &&
          (fr || b !== `onCompositionStart`
            ? b === `onCompositionEnd` && fr && (y = Dn())
            : ((wn = i), (Tn = `value` in wn ? wn.value : wn.textContent), (fr = !0))),
        (v = Xf(r, b)),
        0 < v.length &&
          ((b = new Gn(b, e, null, n, i)),
          s.push({ event: b, listeners: v }),
          y ? (b.data = y) : ((y = dr(n)), y !== null && (b.data = y)))),
        (y = or ? pr(e, n) : mr(e, n)) &&
          ((b = Xf(r, `onBeforeInput`)),
          0 < b.length &&
            ((v = new Gn(`onBeforeInput`, `beforeinput`, null, n, i)),
            s.push({ event: v, listeners: b }),
            (v.data = y))),
        Lf(s, e, r, n, i))
    }
    Hf(s, t)
  })
}
