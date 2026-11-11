function CE(e) {
  if (!(e in gE)) throw Error(`Preset must be one of: ` + Object.keys(gE).join(`, `))
}
