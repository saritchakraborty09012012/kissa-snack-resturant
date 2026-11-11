function Hp(e) {
  return e == null
    ? `c=0`
    : typeof e == `boolean`
      ? `c=` + (e ? `1` : `0`)
      : `c=` + (e.capture ? `1` : `0`)
}
