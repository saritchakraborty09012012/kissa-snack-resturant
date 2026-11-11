function Zb() {
  let [e, t] = v.useState(null),
    n = v.useCallback(() => t(null), []),
    r = v.useCallback(
      (e) =>
        t(
          (t) =>
            t ??
            Promise.resolve(e).then(
              () => {},
              () => {},
            ),
        ),
      [],
    )
  return [
    e
      ? (0, K.jsx)(v.Suspense, {
          fallback: null,
          children: (0, K.jsx)(Xb, { promise: e, onSettled: n }),
        })
      : null,
    r,
  ]
}
var Qb = v.Activity ? Kb : () => v.Fragment
