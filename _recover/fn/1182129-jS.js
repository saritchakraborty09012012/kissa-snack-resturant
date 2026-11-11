function jS(e, t) {
  if (t) {
    if (t.parent === e) {
      let n = e.children.indexOf(t)
      n !== -1 && e.children.splice(n, 1)
    }
    ;((t.parent = e), e.children.push(t), AS(e, t))
  }
}
