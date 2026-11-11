function Je(e, t) {
  throw t.$$typeof === vo
    ? Error(r(525))
    : ((e = Object.prototype.toString.call(t)),
      Error(
        r(
          31,
          e === `[object Object]` ? `object with keys {` + Object.keys(t).join(`, `) + `}` : e,
        ),
      ))
}
