function LS() {
  if (IS.length !== 0)
    try {
      RS()
    } finally {
      IS.length = 0
    }
}
