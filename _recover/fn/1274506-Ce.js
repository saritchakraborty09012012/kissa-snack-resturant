function Ce(e, t, n, r, i) {
  if (r === `string` || r === `stringvector` || r === `iccProfile`) return de(t, n, i)
  if (r === `chlist`) return be(e, t, n, i)
  if (r === `chromaticities`) return V(e, n)
  if (r === `compression`) return H(e, n)
  if (r === `box2i`) return U(e, n)
  if (r === `lineOrder`) return W(e, n)
  if (r === `float`) return _e(e, n)
  if (r === `v2f`) return xe(e, n)
  if (r === `v3f`) return Se(e, n)
  if (r === `int`) return L(e, n)
  if (r === `rational`) return fe(e, n)
  if (r === `timecode`) return pe(e, n)
  if (r === `preview`) return ((n.value += i), `skipped`)
  n.value += i
}
