function dn(e) {
  return un.test(`` + e)
    ? `javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`
    : e
}
