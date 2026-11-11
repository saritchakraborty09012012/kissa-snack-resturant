function O(e) {
  switch (e) {
    case 2:
      e = 1
      break
    case 8:
      e = 4
      break
    case 32:
      e = 16
      break
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
      e = 128
      break
    case 268435456:
      e = 134217728
      break
    default:
      e = 0
  }
  return e
}
