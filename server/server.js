const express = require('express')
const db = require('./database.js')
const app = express()
const HTTP_PORT = 5000

const cors = require('cors')

app.use(cors())

app.use(express.json())
app.use(
  express.urlencoded({
    extended: true
  })
)

app.get('/', (req, res, next) => {
  res.json({ message: 'Ok' })
})

app.listen(HTTP_PORT, () => {
  console.log(`Server running on port ${HTTP_PORT}`)
})

app.get('/gifs', (req, res, next) => {
  const sql = 'select * from gifs'
  const params = []
  db.all(sql, params, (err, rows) => {
    if (err) {
      res.status(400).json({ error: err.message })
      return
    }
    res.json({
      message: 'success',
      data: rows
    })
  })
})

app.get('/gifs/:id', (req, res, next) => {
  const sql = 'select * from gifs where id = ?'
  const params = [req.params.id]
  db.get(sql, params, (err, row) => {
    if (err) {
      res.status(400).json({ error: err.message })
      return
    }
    res.json({
      message: 'success',
      data: row
    })
  })
})

app.post('/gifs', (req, res, next) => {
  console.log(req.body)
  const data = {
    id: req.body.id
  }
  console.log(data)
  const sql = 'INSERT INTO gifs (id) VALUES (?)'
  const params = [data.id]
  db.run(sql, params, function (err, result) {
    if (err) {
      res.status(400).json({ error: err.message })
      return
    }
    res.json({
      message: 'success',
      data: data,
      id: this.lastID
    })
  })
})

app.delete('/gifs/:id', (req, res, next) => {
  db.run('DELETE FROM gifs WHERE id = ?', req.params.id, function (err, result) {
    if (err) {
      res.status(400).json({ error: res.message })
      return
    }
    res.json({ message: 'deleted', changes: this.changes })
  })
})
