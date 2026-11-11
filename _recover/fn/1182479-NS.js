function NS(e) {
  if (typeof e.dispose == `function`) {
    let t = () => {
      try {
        e.dispose()
      } catch {}
    }
    typeof IS_REACT_ACT_ENVIRONMENT < `u`
      ? t()
      : (0, qb.unstable_scheduleCallback)(qb.unstable_IdlePriority, t)
  }
}
