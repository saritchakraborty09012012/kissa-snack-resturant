function ih(e) {
  if (e.count === 0 && (e.imgCount === 0 || !e.waitingForImages)) {
    if (e.stylesheets) ch(e, e.stylesheets)
    else if (e.unsuspend) {
      var t = e.unsuspend
      ;((e.unsuspend = null), t())
    }
  }
}
