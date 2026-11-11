function CC(e) {
  let t = []
  if (!e || e === document.body) return t
  let { overflow: n, overflowX: r, overflowY: i } = window.getComputedStyle(e)
  return (
    [n, r, i].some((e) => e === `auto` || e === `scroll`) && t.push(e),
    [...t, ...CC(e.parentElement)]
  )
}
var wC = [`x`, `y`, `top`, `bottom`, `left`, `right`, `width`, `height`],
  TC = (e, t) => wC.every((n) => e[n] === t[n])
