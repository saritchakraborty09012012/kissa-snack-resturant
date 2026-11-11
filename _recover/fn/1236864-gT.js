function gT(e) {
  let t = ``,
    n = Object.keys(e).sort()
  for (let r = 0, i = n.length; r < i; r++) t += n[r] + `:` + e[n[r]] + `;`
  return t
}
