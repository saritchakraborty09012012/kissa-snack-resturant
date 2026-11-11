function Qm(e) {
  return !(e.type === `stylesheet` && !(e.state.loading & 3))
}
