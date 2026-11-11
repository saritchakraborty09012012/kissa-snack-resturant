function r_(e, t, n, r) {
  let i = i_(r)
  switch (n) {
    case si:
      return e * t
    case fi:
      return ((e * t) / i.components) * i.byteLength
    case pi:
      return ((e * t) / i.components) * i.byteLength
    case mi:
      return ((e * t * 2) / i.components) * i.byteLength
    case hi:
      return ((e * t * 2) / i.components) * i.byteLength
    case ci:
      return ((e * t * 3) / i.components) * i.byteLength
    case li:
      return ((e * t * 4) / i.components) * i.byteLength
    case _i:
      return ((e * t * 4) / i.components) * i.byteLength
    case vi:
    case yi:
      return Math.floor((e + 3) / 4) * Math.floor((t + 3) / 4) * 8
    case bi:
    case xi:
      return Math.floor((e + 3) / 4) * Math.floor((t + 3) / 4) * 16
    case Ci:
    case Ti:
      return (Math.max(e, 16) * Math.max(t, 8)) / 4
    case Si:
    case wi:
      return (Math.max(e, 8) * Math.max(t, 8)) / 2
    case Ei:
    case Di:
    case ki:
    case Ai:
      return Math.floor((e + 3) / 4) * Math.floor((t + 3) / 4) * 8
    case Oi:
    case ji:
    case Mi:
      return Math.floor((e + 3) / 4) * Math.floor((t + 3) / 4) * 16
    case Ni:
      return Math.floor((e + 3) / 4) * Math.floor((t + 3) / 4) * 16
    case Pi:
      return Math.floor((e + 4) / 5) * Math.floor((t + 3) / 4) * 16
    case Fi:
      return Math.floor((e + 4) / 5) * Math.floor((t + 4) / 5) * 16
    case Ii:
      return Math.floor((e + 5) / 6) * Math.floor((t + 4) / 5) * 16
    case Li:
      return Math.floor((e + 5) / 6) * Math.floor((t + 5) / 6) * 16
    case Ri:
      return Math.floor((e + 7) / 8) * Math.floor((t + 4) / 5) * 16
    case zi:
      return Math.floor((e + 7) / 8) * Math.floor((t + 5) / 6) * 16
    case Bi:
      return Math.floor((e + 7) / 8) * Math.floor((t + 7) / 8) * 16
    case Vi:
      return Math.floor((e + 9) / 10) * Math.floor((t + 4) / 5) * 16
    case Hi:
      return Math.floor((e + 9) / 10) * Math.floor((t + 5) / 6) * 16
    case Ui:
      return Math.floor((e + 9) / 10) * Math.floor((t + 7) / 8) * 16
    case Wi:
      return Math.floor((e + 9) / 10) * Math.floor((t + 9) / 10) * 16
    case Gi:
      return Math.floor((e + 11) / 12) * Math.floor((t + 9) / 10) * 16
    case Ki:
      return Math.floor((e + 11) / 12) * Math.floor((t + 11) / 12) * 16
    case qi:
    case Ji:
    case Yi:
      return Math.ceil(e / 4) * Math.ceil(t / 4) * 16
    case Xi:
    case Zi:
      return Math.ceil(e / 4) * Math.ceil(t / 4) * 8
    case Qi:
    case $i:
      return Math.ceil(e / 4) * Math.ceil(t / 4) * 16
  }
  throw Error(`Unable to determine texture byte length for ${n} format.`)
}
