function Lp(e) {
  return {
    name: e,
    group: new Ip(`group`, e),
    imagePair: new Ip(`image-pair`, e),
    old: new Ip(`old`, e),
    new: new Ip(`new`, e),
  }
}
