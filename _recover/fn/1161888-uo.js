function uo(e, t, n, r, i, a) {
  ;((i = co(i)),
    r.context === null ? (r.context = i) : (r.pendingContext = i),
    (r = it(t)),
    (r.payload = { element: n }),
    (a = a === void 0 ? null : a),
    a !== null && (r.callback = a),
    (n = at(e, r, t)),
    n !== null && (fa(n, e, t), ot(n, e, t)))
}
