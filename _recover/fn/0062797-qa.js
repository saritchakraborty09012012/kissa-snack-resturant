function qa(e) {
  return ((e = e.status), e === `fulfilled` || e === `rejected`)
}
