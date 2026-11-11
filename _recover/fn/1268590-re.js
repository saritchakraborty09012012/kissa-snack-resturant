function re(e) {
  return e <= 1 ? Math.sign(e) * Math.abs(e) ** 2.2 : Math.sign(e) * s ** (Math.abs(e) - 1)
}
