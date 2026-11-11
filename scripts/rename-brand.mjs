import fs from 'node:fs'

const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'))
pkg.name = 'kissa-snack-restaurant'
pkg.description = 'KISSA - a cinematic, scroll-driven snack restaurant and night chai experience.'
fs.writeFileSync('package.json', JSON.stringify(pkg, null, 2) + '\n')

const server = fs
  .readFileSync('server/index.js', 'utf8')
  .replace("service: 'mr-chaiwala'", "service: 'kissa'")
  .replace('MR. CHAIWALA api listening', 'KISSA api listening')
fs.writeFileSync('server/index.js', server)

console.log(pkg.name, '|', pkg.description)
