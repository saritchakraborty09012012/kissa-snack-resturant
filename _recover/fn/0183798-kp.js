function kp(e, t) {
  ;((e = e.style), (t = t.style))
  var n =
    t == null
      ? null
      : t.hasOwnProperty(`viewTransitionName`)
        ? t.viewTransitionName
        : t.hasOwnProperty(`view-transition-name`)
          ? t[`view-transition-name`]
          : null
  ;((e.viewTransitionName = n == null || typeof n == `boolean` ? `` : (`` + n).trim()),
    (n =
      t == null
        ? null
        : t.hasOwnProperty(`viewTransitionClass`)
          ? t.viewTransitionClass
          : t.hasOwnProperty(`view-transition-class`)
            ? t[`view-transition-class`]
            : null),
    (e.viewTransitionClass = n == null || typeof n == `boolean` ? `` : (`` + n).trim()),
    e.display === `inline-block` &&
      (t == null
        ? (e.display = e.margin = ``)
        : ((n = t.display),
          (e.display = n == null || typeof n == `boolean` ? `` : n),
          (n = t.margin),
          n == null
            ? ((n = t.hasOwnProperty(`marginTop`) ? t.marginTop : t[`margin-top`]),
              (e.marginTop = n == null || typeof n == `boolean` ? `` : n),
              (t = t.hasOwnProperty(`marginBottom`) ? t.marginBottom : t[`margin-bottom`]),
              (e.marginBottom = t == null || typeof t == `boolean` ? `` : t))
            : (e.margin = n))))
}
