function ys(e, t, n) {
  typeof n == `object` && n && typeof n.then == `function`
    ? n.then(
        function (n) {
          bs(e, t, n)
        },
        function (n) {
          return xs(e, t, n)
        },
      )
    : bs(e, t, n)
}
