const express = require('express')
const app = express()
const HTTP_PORT = 5000

app.listen(HTTP_PORT, () => {
  console.log('Server running on port %PORT%'.replace('%PORT%', HTTP_PORT))
})

app.get('/', (req, res, next) => {
  res.json({ message: 'Ok' })
})

// Insert here other API endpoints

// Default response for any other request
app.use(function (req, res) {
  res.status(404)
})
