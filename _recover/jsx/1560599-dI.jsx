function dI() {
  let [e, t] = new Intl.DateTimeFormat(`en-GB`, {
      hour: `2-digit`,
      minute: `2-digit`,
      hour12: !1,
      timeZone: `Asia/Kolkata`,
    })
      .format(new Date())
      .split(`:`)
      .map(Number),
    n = (((e * 60 + t + 1440) % 1440) - 1080 + 1440) % 1440
  return Math.min(1, n / 660)
}
