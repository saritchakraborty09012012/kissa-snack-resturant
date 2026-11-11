function ie(e) {
  return new DataView(e.array.buffer, e.offset.value, e.size)
}
