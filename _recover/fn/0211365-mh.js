function mh(e, t, n, r, i, a) {
  ;((i = ph(i)),
    r.context === null ? (r.context = i) : (r.pendingContext = i),
    (r = lo(t)),
    (r.payload = { element: n }),
    (a = a === void 0 ? null : a),
    a !== null && (r.callback = a),
    (n = uo(e, r, t)),
    n !== null && (Pd(n, e, t), fo(n, e, t)))
}
