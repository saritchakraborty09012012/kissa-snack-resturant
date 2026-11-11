function Zf(e) {
  if (e === null) return null
  do e = e.return
  while (e && e.tag !== 5 && e.tag !== 27)
  return e || null
}
