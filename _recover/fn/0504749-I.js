function I() {
  let e = r.length / 3
  if (l) {
    let e = 0,
      t = k * e
    for (let e = 0; e < ee; e++) {
      let n = F[e]
      ae(n[2] + t, n[1] + t, n[0] + t)
    }
    ;((e = s + p * 2), (t = k * e))
    for (let e = 0; e < ee; e++) {
      let n = F[e]
      ae(n[0] + t, n[1] + t, n[2] + t)
    }
  } else {
    for (let e = 0; e < ee; e++) {
      let t = F[e]
      ae(t[2], t[1], t[0])
    }
    for (let e = 0; e < ee; e++) {
      let t = F[e]
      ae(t[0] + k * s, t[1] + k * s, t[2] + k * s)
    }
  }
  n.addGroup(e, r.length / 3 - e, 0)
}
