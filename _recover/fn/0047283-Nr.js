function Nr(e, t) {
  return (e === t && (e !== 0 || 1 / e == 1 / t)) || (e !== e && t !== t)
}
var Pr = typeof Object.is == `function` ? Object.is : Nr
