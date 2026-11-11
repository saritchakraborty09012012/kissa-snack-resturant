function Cy(e, t, n, r) {
  let i = ``
  for (let e = parseInt(t); e < parseInt(n); e++)
    i += r.replace(/\[\s*i\s*\]/g, `[ ` + e + ` ]`).replace(/UNROLLED_LOOP_INDEX/g, e)
  return i
}
