function Ol(e) {
  return (
    e.tag === 5 || e.tag === 3 || e.tag === 26 || (e.tag === 27 && Tp(e.type)) || e.tag === 4
  )
}
