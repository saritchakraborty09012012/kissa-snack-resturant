function Ja(e, t, n) {
  switch (
    ((n = e[n]), n === void 0 ? e.push(t) : n !== t && (t.then(fn, fn), (t = n)), t.status)
  ) {
    case `fulfilled`:
      return t.value
    case `rejected`:
      throw ((e = t.reason), Qa(e), e === void 0 && !(`reason` in t) ? Error(i(600)) : e)
    default:
      if (typeof t.status == `string`) t.then(fn, fn)
      else {
        if (((e = Xu), e !== null && 100 < e.shellSuspendCounter)) throw Error(i(482))
        ;((e = t),
          (e.status = `pending`),
          e.then(
            function (e) {
              if (t.status === `pending`) {
                var n = t
                ;((n.status = `fulfilled`), (n.value = e))
              }
            },
            function (e) {
              if (t.status === `pending`) {
                var n = t
                ;((n.status = `rejected`), (n.reason = e))
              }
            },
          ))
      }
      switch (t.status) {
        case `fulfilled`:
          return t.value
        case `rejected`:
          throw ((e = t.reason), Qa(e), e)
      }
      throw ((Xa = t), Ua)
  }
}
