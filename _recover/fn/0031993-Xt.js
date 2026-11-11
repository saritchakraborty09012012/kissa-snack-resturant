function Xt(e) {
  return e.replace(Yt, function (e) {
    return `\\` + e.charCodeAt(0).toString(16) + ` `
  })
}
