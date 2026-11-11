function YS(e) {
  try {
    return e()
  } catch (e) {
    console.warn(`[R3F] Error while unmounting root; teardown may be incomplete:`, e)
  }
}
