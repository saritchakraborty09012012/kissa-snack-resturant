function dm(e, t) {
  var n = e.ownerDocument
  if (e.data === `$~`) e._reactRetry = t
  else if (e.data !== `$?` || n.readyState !== `loading`) t()
  else {
    var r = function () {
      ;(t(), n.removeEventListener(`DOMContentLoaded`, r))
    }
    ;(n.addEventListener(`DOMContentLoaded`, r), (e._reactRetry = r))
  }
}
