function no(e, t) {
  throw t.$$typeof === O
    ? Error(i(525))
    : ((e = Object.prototype.toString.call(t)),
      Error(
        i(
          31,
          e === `[object Object]` ? `object with keys {` + Object.keys(t).join(`, `) + `}` : e,
        ),
      ))
}
