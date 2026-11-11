function cl(e, t) {
  if (t.type !== `stylesheet` || t.state.loading & 4) e.flags &= -16777217
  else if (((e.flags |= 16777216), !Qm(t))) {
    if (Ud()) e.flags |= 8192
    else throw ((Xa = Ka), Wa)
  }
}
