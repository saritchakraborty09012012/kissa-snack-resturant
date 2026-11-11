function SS(e) {
  if (typeof e == `function`) {
    let t = `${vS++}`
    return ((_S[t] = e), t)
  }
  Object.assign(_S, e)
}
