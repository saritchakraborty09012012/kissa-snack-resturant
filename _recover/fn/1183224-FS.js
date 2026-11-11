function FS(e, t) {
  for (let n of [e, e.alternate])
    if (n !== null) {
      if (typeof n.ref == `function`) {
        n.refCleanup == null || n.refCleanup()
        let e = n.ref(t)
        typeof e == `function` && (n.refCleanup = e)
      } else n.ref && (n.ref.current = t)
    }
}
var IS = []
