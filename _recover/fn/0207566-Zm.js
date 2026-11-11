function Zm(e, t) {
  return (
    e === `img` && t.src != null && t.src !== `` && t.onLoad == null && t.loading !== `lazy`
  )
}
