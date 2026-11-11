function gp(e, t) {
  return (
    e === `textarea` ||
    e === `noscript` ||
    typeof t.children == `string` ||
    typeof t.children == `number` ||
    typeof t.children == `bigint` ||
    (typeof t.dangerouslySetInnerHTML == `object` &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  )
}
var _p = null
