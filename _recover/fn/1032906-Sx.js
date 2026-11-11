function Sx(e) {
  let t = xx.get(e.constructor)
  try {
    t || ((t = new e.constructor()), xx.set(e.constructor, t))
  } catch {}
  return t
}
