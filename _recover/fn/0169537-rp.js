function rp(e, t, n, r, a, o) {
  switch (n) {
    case `children`:
      if (typeof r == `string`) t === `body` || (t === `textarea` && r === ``) || rn(e, r)
      else if (typeof r == `number` || typeof r == `bigint`) t !== `body` && rn(e, `` + r)
      else return
      break
    case `className`:
      Ht(e, `class`, r)
      break
    case `tabIndex`:
      Ht(e, `tabindex`, r)
      break
    case `dir`:
    case `role`:
    case `viewBox`:
    case `width`:
    case `height`:
      Ht(e, n, r)
      break
    case `style`:
      sn(e, r, o)
      return
    case `data`:
      if (t !== `object`) {
        Ht(e, `data`, r)
        break
      }
    case `src`:
    case `href`:
      if (
        (r === `` && (t !== `a` || n !== `href`)) ||
        r == null ||
        typeof r == `function` ||
        typeof r == `symbol` ||
        typeof r == `boolean`
      ) {
        e.removeAttribute(n)
        break
      }
      ;((r = dn(r)), e.setAttribute(n, r))
      break
    case `action`:
    case `formAction`:
      if (typeof r == `function`) {
        e.setAttribute(
          n,
          `javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`,
        )
        break
      }
      if (
        (typeof o == `function` &&
          (n === `formAction`
            ? (t !== `input` && rp(e, t, `name`, a.name, a, null),
              rp(e, t, `formEncType`, a.formEncType, a, null),
              rp(e, t, `formMethod`, a.formMethod, a, null),
              rp(e, t, `formTarget`, a.formTarget, a, null))
            : (rp(e, t, `encType`, a.encType, a, null),
              rp(e, t, `method`, a.method, a, null),
              rp(e, t, `target`, a.target, a, null))),
        r == null || typeof r == `symbol` || typeof r == `boolean`)
      ) {
        e.removeAttribute(n)
        break
      }
      ;((r = dn(r)), e.setAttribute(n, r))
      break
    case `onClick`:
      r != null && (e.onclick = fn)
      return
    case `onScroll`:
      r != null && Uf(`scroll`, e)
      return
    case `onScrollEnd`:
      r != null && Uf(`scrollend`, e)
      return
    case `dangerouslySetInnerHTML`:
      if (r != null) {
        if (typeof r != `object` || !(`__html` in r)) throw Error(i(61))
        if (((n = r.__html), n != null)) {
          if (a.children != null) throw Error(i(60))
          o?.__html !== n && (e.innerHTML = n)
        }
      }
      break
    case `multiple`:
      e.multiple = r && typeof r != `function` && typeof r != `symbol`
      break
    case `muted`:
      e.muted = r && typeof r != `function` && typeof r != `symbol`
      break
    case `suppressContentEditableWarning`:
    case `suppressHydrationWarning`:
    case `defaultValue`:
    case `defaultChecked`:
    case `innerHTML`:
    case `ref`:
      break
    case `autoFocus`:
      break
    case `xlinkHref`:
      if (
        r == null ||
        typeof r == `function` ||
        typeof r == `boolean` ||
        typeof r == `symbol`
      ) {
        e.removeAttribute(`xlink:href`)
        break
      }
      ;((n = dn(r)), e.setAttributeNS(`http://www.w3.org/1999/xlink`, `xlink:href`, n))
      break
    case `contentEditable`:
    case `spellCheck`:
    case `draggable`:
    case `value`:
    case `autoReverse`:
    case `externalResourcesRequired`:
    case `focusable`:
    case `preserveAlpha`:
      r != null && typeof r != `function` && typeof r != `symbol`
        ? e.setAttribute(n, r)
        : e.removeAttribute(n)
      break
    case `inert`:
    case `allowFullScreen`:
    case `async`:
    case `autoPlay`:
    case `controls`:
    case `credentialless`:
    case `default`:
    case `defer`:
    case `disabled`:
    case `disablePictureInPicture`:
    case `disableRemotePlayback`:
    case `formNoValidate`:
    case `hidden`:
    case `loop`:
    case `noModule`:
    case `noValidate`:
    case `open`:
    case `playsInline`:
    case `readOnly`:
    case `required`:
    case `reversed`:
    case `scoped`:
    case `seamless`:
    case `itemScope`:
      r && typeof r != `function` && typeof r != `symbol`
        ? e.setAttribute(n, ``)
        : e.removeAttribute(n)
      break
    case `capture`:
    case `download`:
      !0 === r
        ? e.setAttribute(n, ``)
        : !1 !== r && r != null && typeof r != `function` && typeof r != `symbol`
          ? e.setAttribute(n, r)
          : e.removeAttribute(n)
      break
    case `cols`:
    case `rows`:
    case `size`:
    case `span`:
      r != null && typeof r != `function` && typeof r != `symbol` && !isNaN(r) && 1 <= r
        ? e.setAttribute(n, r)
        : e.removeAttribute(n)
      break
    case `rowSpan`:
    case `start`:
      r == null || typeof r == `function` || typeof r == `symbol` || isNaN(r)
        ? e.removeAttribute(n)
        : e.setAttribute(n, r)
      break
    case `popover`:
      ;(Uf(`beforetoggle`, e), Uf(`toggle`, e), Vt(e, `popover`, r))
      break
    case `xlinkActuate`:
      Ut(e, `http://www.w3.org/1999/xlink`, `xlink:actuate`, r)
      break
    case `xlinkArcrole`:
      Ut(e, `http://www.w3.org/1999/xlink`, `xlink:arcrole`, r)
      break
    case `xlinkRole`:
      Ut(e, `http://www.w3.org/1999/xlink`, `xlink:role`, r)
      break
    case `xlinkShow`:
      Ut(e, `http://www.w3.org/1999/xlink`, `xlink:show`, r)
      break
    case `xlinkTitle`:
      Ut(e, `http://www.w3.org/1999/xlink`, `xlink:title`, r)
      break
    case `xlinkType`:
      Ut(e, `http://www.w3.org/1999/xlink`, `xlink:type`, r)
      break
    case `xmlBase`:
      Ut(e, `http://www.w3.org/XML/1998/namespace`, `xml:base`, r)
      break
    case `xmlLang`:
      Ut(e, `http://www.w3.org/XML/1998/namespace`, `xml:lang`, r)
      break
    case `xmlSpace`:
      Ut(e, `http://www.w3.org/XML/1998/namespace`, `xml:space`, r)
      break
    case `is`:
      Vt(e, `is`, r)
      break
    case `innerText`:
    case `textContent`:
      return
    default:
      if (!(2 < n.length) || (n[0] !== `o` && n[0] !== `O`) || (n[1] !== `n` && n[1] !== `N`))
        ((n = ln.get(n) || n), Vt(e, n, r))
      else return
  }
  zt = !0
}
