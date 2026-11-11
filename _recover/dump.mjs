import fs from 'node:fs'
import prettier from '../_tools/node_modules/prettier/index.mjs'

const s = fs.readFileSync('dist/assets/index-Dd6oAESF.js', 'utf8')
const [a, b] = process.argv.slice(2).map(Number)
const code = s.slice(a, b)
let out
try {
  out = await prettier.format(code, { parser: 'babel', printWidth: 96, semi: false, singleQuote: true })
} catch (e) {
  try {
    out = await prettier.format('(function(){' + code + '\n;})', {
      parser: 'babel',
      printWidth: 96,
      semi: false,
      singleQuote: true,
    })
  } catch (e2) {
    out = '// parse failed: ' + e.message + '\n' + code
  }
}
fs.writeFileSync('_recover/dump.js', out)
console.log(out.split('\n').length, 'lines')
