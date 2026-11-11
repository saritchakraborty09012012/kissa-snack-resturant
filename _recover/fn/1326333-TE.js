function TE(e) {
  return e === `cube`
    ? Sm
    : e === `hdr`
      ? CT
      : e === `exr`
        ? TT
        : e === `jpg` || e === `jpeg`
          ? hE
          : e === `webp`
            ? mE
            : null
}
var EE = (e) => e.current && e.current.isScene,
  DE = (e) => (EE(e) ? e.current : e)
