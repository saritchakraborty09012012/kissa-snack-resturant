function qa(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView)
}
