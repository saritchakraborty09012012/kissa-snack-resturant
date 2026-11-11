// Decompile the built jsx-runtime calls back into readable JSX source.
// Usage: node scripts/recover.mjs
import fs from 'node:fs'
import path from 'node:path'
import { parse } from '../_tools/node_modules/@babel/parser/lib/index.js'
import generate from '../_tools/node_modules/@babel/generator/lib/index.js'
import * as t from '../_tools/node_modules/@babel/types/lib/index.js'
import prettier from '../_tools/node_modules/prettier/index.mjs'

const RENAMES = {
  v: 'React',
  pr: 'Star',
  cr: 'ArrowUpRight',
  lr: 'ArrowDown',
  ur: 'Close',
  dr: 'MenuIcon',
  fr: 'Pin',
  ir: 'CupLogo',
  ar: 'Wordmark',
  or: 'Brand',
  sr: 'Preloader',
  xr: 'Header',
  bA: 'Hero',
  $F: 'DishStage',
  oI: 'MadeToOrder',
  uI: 'SpiceSection',
  pI: 'HoursSection',
  mI: 'StatsSection',
  gI: 'MenuSection',
  _I: 'QuoteSection',
  yI: 'VisitSection',
  xI: 'Footer',
  TI: 'MenuOverlay',
  OI: 'BookingModal',
  SI: 'Cursor',
  tI: 'Reveal',
  nI: 'SplitLines',
  rI: 'Counter',
  iI: 'Marquee',
  eI: 'useInView',
  gA: 'scrollToEl',
}

function jsxKind(node) {
  if (!node || node.type !== 'CallExpression') return null
  let target = node.callee
  if (target.type === 'SequenceExpression' && target.expressions.length === 2) {
    target = target.expressions[1]
  }
  if (target.type === 'MemberExpression' && !target.computed && target.property.type === 'Identifier') {
    const name = target.property.name
    if (name === 'jsx' || name === 'jsxs') return name
  }
  return null
}

function literalValue(node) {
  if (!node) return null
  if (node.type === 'StringLiteral') return node.value
  if (node.type === 'TemplateLiteral' && node.expressions.length === 0) return node.quasis[0].value.cooked
  return null
}

function textNode(value) {
  if (value == null || value === '') return null
  if (/^[^\s{}<>]/.test(value) && !/\s$/.test(value) && !/[{}<>]/.test(value)) {
    return t.jsxText(value)
  }
  return t.jsxExpressionContainer(t.stringLiteral(value))
}

function childNodes(node) {
  if (!node) return []
  if (node.type === 'ArrayExpression') {
    return node.elements.flatMap((el) => (el ? childNodes(el) : []))
  }
  const kind = jsxKind(node)
  if (kind) return [toJsx(node)]
  const lit = literalValue(node)
  if (lit != null) {
    const n = textNode(lit)
    return n ? [n] : []
  }
  return [t.jsxExpressionContainer(rename(node))]
}

function jsxName(node) {
  const lit = literalValue(node)
  if (lit != null) return t.jsxIdentifier(lit)
  if (node.type === 'Identifier') return t.jsxIdentifier(RENAMES[node.name] || node.name)
  if (node.type === 'MemberExpression') {
    const obj = jsxName(node.object)
    return t.jsxMemberExpression(obj, t.jsxIdentifier(node.property.name || node.property.value))
  }
  return t.jsxIdentifier('Fragment')
}

function attrValue(node) {
  if (!node) return null
  if (node.type === 'BooleanLiteral') return node.value ? null : t.jsxExpressionContainer(node)
  const lit = literalValue(node)
  if (lit != null) return t.stringLiteral(lit)
  return t.jsxExpressionContainer(rename(node))
}

function toJsx(node) {
  const [tagArg, propsArg, keyArg] = node.arguments
  const attributes = []
  let children = []
  if (keyArg) attributes.push(t.jsxAttribute(t.jsxIdentifier('key'), attrValue(keyArg)))
  const props = propsArg && propsArg.type === 'ObjectExpression' ? propsArg.properties : []
  for (const p of props) {
    if (p.type === 'SpreadElement') {
      attributes.push(t.jsxSpreadAttribute(rename(p.argument)))
      continue
    }
    if (p.type !== 'ObjectProperty' && p.type !== 'ObjectMethod') continue
    const key = p.key.name || p.key.value
    if (key === 'children') {
      children = childNodes(p.value)
      continue
    }
    attributes.push(t.jsxAttribute(t.jsxIdentifier(key), attrValue(p.value)))
  }
  return t.jsxElement(
    t.jsxOpeningElement(jsxName(tagArg), attributes, children.length === 0),
    children.length ? t.jsxClosingElement(jsxName(tagArg)) : null,
    children,
    children.length === 0,
  )
}

// rename identifiers everywhere except member properties / object keys
function rename(node) {
  if (!node || typeof node !== 'object') return node
  if (Array.isArray(node)) return node.map(rename)

  const kind = jsxKind(node)
  if (kind) return toJsx(node)

  if (node.type === 'Identifier' && RENAMES[node.name]) {
    return t.identifier(RENAMES[node.name])
  }

  const out = { ...node }
  for (const key of Object.keys(node)) {
    if (key === 'loc' || key === 'start' || key === 'end') continue
    const value = node[key]
    if (Array.isArray(value)) out[key] = value.map((child) => rename(child))
    else if (value && typeof value === 'object' && value.type) {
      if (node.type === 'MemberExpression' && key === 'property') continue
      if ((node.type === 'ObjectProperty' || node.type === 'ObjectMethod') && key === 'key' && !node.computed)
        continue
      if (node.type === 'JSXAttribute' && key === 'name') continue
      out[key] = rename(value)
    }
  }
  return out
}

const targets = process.argv.slice(2)
const files = targets.length
  ? targets
  : fs
      .readdirSync('_recover/fn')
      .filter((f) => fs.statSync(path.join('_recover/fn', f)).size > 2000)
      .map((f) => path.join('_recover/fn', f))

fs.mkdirSync('_recover/jsx', { recursive: true })

for (const file of files) {
  const base = path.basename(file, '.js')
  const code = fs.readFileSync(file, 'utf8')
  let ast
  try {
    ast = parse(code, { sourceType: 'module', plugins: ['jsx'] })
  } catch (e) {
    console.log(base, 'parse error', e.message.slice(0, 90))
    continue
  }
  const next = rename(ast)
  let out
  try {
    out = generate(next, { jsescOption: { minimal: true }, comments: true }).code
    out = await prettier.format(out, { parser: 'babel', printWidth: 100, semi: false, singleQuote: true })
  } catch (e) {
    console.log(base, 'gen error', e.message.slice(0, 90))
    continue
  }
  fs.writeFileSync(path.join('_recover/jsx', base + '.jsx'), out)
  console.log(base, '->', out.split('\n').length, 'lines')
}
