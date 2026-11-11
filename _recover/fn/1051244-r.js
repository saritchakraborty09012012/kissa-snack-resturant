function r(e) {
  var t = `https://react.dev/errors/` + e
  if (1 < arguments.length) {
    t += `?args[]=` + encodeURIComponent(arguments[1])
    for (var n = 2; n < arguments.length; n++)
      t += `&args[]=` + encodeURIComponent(arguments[n])
  }
  return (
    `Minified React error #` +
    e +
    `; visit ` +
    t +
    ` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`
  )
}
