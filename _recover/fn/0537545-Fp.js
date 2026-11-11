function Fp(e, t) {
  return !e || e.constructor === t
    ? e
    : typeof t.BYTES_PER_ELEMENT == `number`
      ? new t(e)
      : Array.prototype.slice.call(e)
}
