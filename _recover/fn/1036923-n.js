function n(e) {
  return e.filter((e) =>
    [`Move`, `Over`, `Enter`, `Out`, `Leave`].some((t) => e.__r3f?.handlers[`onPointer` + t]),
  )
}
