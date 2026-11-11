function tn(e, t, n) {
  t != null && ((t = `` + Wt(t)), t !== e.value && (e.value = t), n == null)
    ? e.defaultValue !== t && (e.defaultValue = t)
    : (e.defaultValue = n == null ? `` : `` + Wt(n))
}
