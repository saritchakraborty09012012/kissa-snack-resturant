function um(e) {
  return e.data === `$!` || (e.data === `$?` && e.ownerDocument.readyState !== `loading`)
}
