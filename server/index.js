import express from 'express'
import cors from 'cors'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '..')
const dataDir = path.join(root, 'data')
const distDir = path.join(root, 'dist')
const PORT = process.env.PORT || 8787

fs.mkdirSync(dataDir, { recursive: true })

const app = express()
app.use(cors())
app.use(express.json({ limit: '64kb' }))

const clean = (value, max = 240) =>
  String(value ?? '')
    .replace(/[\u0000-\u001f\u007f]/g, ' ')
    .trim()
    .slice(0, max)

function append(file, record) {
  const target = path.join(dataDir, file)
  let list = []
  try {
    list = JSON.parse(fs.readFileSync(target, 'utf8'))
    if (!Array.isArray(list)) list = []
  } catch {
    list = []
  }
  list.push(record)
  fs.writeFileSync(target, JSON.stringify(list, null, 2))
  return list.length
}

function reference() {
  return `MCW-${new Date().getFullYear()}-${String(Math.floor(Math.random() * 9000) + 1000)}`
}

app.get('/api/health', (_req, res) => {
  res.json({ ok: true, service: 'kissa', time: new Date().toISOString() })
})

app.post('/api/reserve', (req, res) => {
  const body = req.body || {}
  const name = clean(body.name, 80)
  const phone = clean(body.phone, 30)
  const date = clean(body.date, 20)
  const time = clean(body.time, 10)
  const guests = Number.parseInt(body.guests, 10)
  const notes = clean(body.notes, 400)

  if (!name || phone.replace(/\D/g, '').length < 8 || !date || !time) {
    return res.status(400).json({ error: 'Please share a name, phone number, date and time.' })
  }
  if (!Number.isFinite(guests) || guests < 1 || guests > 12) {
    return res.status(400).json({ error: 'Tables seat between one and twelve guests.' })
  }

  const code = reference()
  append('reservations.json', {
    code,
    name,
    phone,
    date,
    time,
    guests,
    notes,
    createdAt: new Date().toISOString(),
  })

  return res.status(201).json({
    ok: true,
    code,
    message: 'Table pencilled in. The kettle is on.',
  })
})

app.post('/api/subscribe', (req, res) => {
  const email = clean(req.body?.email, 160).toLowerCase()
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'That email does not look right.' })
  }
  append('subscribers.json', { email, createdAt: new Date().toISOString() })
  return res.status(201).json({ ok: true, message: 'You are on the list.' })
})

if (fs.existsSync(distDir)) {
  app.use(express.static(distDir))
  app.use((req, res, next) => {
    if (req.path.startsWith('/api')) return next()
    if (req.method !== 'GET') return next()
    return res.sendFile(path.join(distDir, 'index.html'))
  })
}

app.use((req, res) => {
  res.status(404).json({ error: 'Not found', path: req.path })
})

app.use((err, _req, res, _next) => {
  console.error(err)
  res.status(500).json({ error: 'The kitchen dropped something.' })
})

app.listen(PORT, () => {
  console.log(`KISSA api listening on http://localhost:${PORT}`)
})
