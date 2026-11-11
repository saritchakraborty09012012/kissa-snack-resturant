function Pc(e, t) {
  return (
    (t = qc({ mode: t.mode, children: t.children }, e.mode)),
    (t.ref = e.ref),
    (e.child = t),
    (t.return = e),
    t
  )
}
