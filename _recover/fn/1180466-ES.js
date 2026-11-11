function ES(e, t) {
  let n = yS(e),
    r = xS(n)
  if (e !== `primitive` && !r)
    throw Error(
      `R3F: ${n} is not part of the THREE namespace! Did you forget to extend? See: https://docs.pmnd.rs/react-three-fiber/api/objects#using-3rd-party-objects-declaratively`,
    )
  if (e === `primitive` && !t.object)
    throw Error(`R3F: Primitives without 'object' are invalid!`)
  if (t.args !== void 0 && !Array.isArray(t.args))
    throw Error(`R3F: The args prop must be an array!`)
}
