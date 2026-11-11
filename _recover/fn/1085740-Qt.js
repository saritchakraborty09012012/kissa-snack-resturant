function Qt(e, t, n) {
  typeof n == `object` && n && typeof n.then == `function`
    ? n.then(
        function (n) {
          $t(e, t, n)
        },
        function (n) {
          return en(e, t, n)
        },
      )
    : $t(e, t, n)
}
