function KS(e, t) {
  let n = e.state
  switch (t.type) {
    case `use`:
      return n.status !== `disposed` && ((e.state = { status: `open` }), !0)
    case `unmount`:
      return n.status !== `disposed` && ((e.state = { status: `closing`, token: t.token }), !0)
    case `dispose`:
      return n.status !== `closing` || n.token !== t.token
        ? !1
        : ((e.state = { status: `disposed` }), !0)
  }
}
