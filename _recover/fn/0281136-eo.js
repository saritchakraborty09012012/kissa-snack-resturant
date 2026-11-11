function eo(...e) {
  let t = `THREE.` + e.shift()
  Za ? Za(`log`, t, ...e) : console.log(t, ...e)
}
