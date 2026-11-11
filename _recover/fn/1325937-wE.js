function wE(e) {
  var t
  let n = vE(e) && e.length === 6,
    r = vE(e) && e.length === 3 && e.some((e) => e.endsWith(`json`)),
    i = vE(e) ? e[0] : e
  return {
    extension: n
      ? `cube`
      : r
        ? `webp`
        : i.startsWith(`data:application/exr`)
          ? `exr`
          : i.startsWith(`data:application/hdr`)
            ? `hdr`
            : i.startsWith(`data:image/jpeg`)
              ? `jpg`
              : (t = i.split(`.`).pop()) == null ||
                  (t = t.split(`?`)) == null ||
                  (t = t.shift()) == null
                ? void 0
                : t.toLowerCase(),
    isCubemap: n,
    isGainmap: r,
  }
}
