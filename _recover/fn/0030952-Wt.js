function Wt(e) {
  switch (typeof e) {
    case `bigint`:
    case `boolean`:
    case `number`:
    case `string`:
    case `undefined`:
      return e
    case `object`:
      return e
    default:
      return ``
  }
}
