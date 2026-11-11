function ue(e) {
  return typeof e != `object` || !e
    ? null
    : ((e = (le && e[le]) || e[`@@iterator`]), typeof e == `function` ? e : null)
}
var de = Symbol.for(`react.client.reference`)
