function om(e, t, n, r) {
  for (; e.nodeType === 1;) {
    var i = n
    if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
      if (!r && (e.nodeName !== `INPUT` || e.type !== `hidden`)) break
    } else if (!r) {
      if (t === `input` && e.type === `hidden`) {
        var a = i.name == null ? null : `` + i.name
        if (i.type === `hidden` && e.getAttribute(`name`) === a) return e
      } else return e
    } else if (!e[St])
      switch (t) {
        case `meta`:
          if (!e.hasAttribute(`itemprop`)) break
          return e
        case `link`:
          if (
            ((a = e.getAttribute(`rel`)),
            (a === `stylesheet` && e.hasAttribute(`data-precedence`)) ||
              a !== i.rel ||
              e.getAttribute(`href`) !== (i.href == null || i.href === `` ? null : i.href) ||
              e.getAttribute(`crossorigin`) !==
                (i.crossOrigin == null ? null : i.crossOrigin) ||
              e.getAttribute(`title`) !== (i.title == null ? null : i.title))
          )
            break
          return e
        case `style`:
          if (e.hasAttribute(`data-precedence`)) break
          return e
        case `script`:
          if (
            ((a = e.getAttribute(`src`)),
            (a !== (i.src == null ? null : i.src) ||
              e.getAttribute(`type`) !== (i.type == null ? null : i.type) ||
              e.getAttribute(`crossorigin`) !==
                (i.crossOrigin == null ? null : i.crossOrigin)) &&
              a &&
              e.hasAttribute(`async`) &&
              !e.hasAttribute(`itemprop`))
          )
            break
          return e
        default:
          return e
      }
    if (((e = fm(e.nextSibling)), e === null)) break
  }
  return null
}
