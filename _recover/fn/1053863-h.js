function h(e) {
  var t = e & 42
  if (t !== 0) return t
  switch (e & -e) {
    case 1:
      return 1
    case 2:
      return 2
    case 4:
      return 4
    case 8:
      return 8
    case 16:
      return 16
    case 32:
      return 32
    case 64:
      return 64
    case 128:
      return 128
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
      return e & -e
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 3932160
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
      return e & 62914560
    case 67108864:
      return 67108864
    case 134217728:
      return 134217728
    case 268435456:
      return 268435456
    case 536870912:
      return 536870912
    case 1073741824:
      return 0
    default:
      return e
  }
}
