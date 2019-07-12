// const createError = require('http-errors')
const express = require('express')
const app = express()
const computeRouter = require('./routes/compute')
const pairRouter = require('./routes/pair')
const hwToken = 'KYPLZPAFKPRDKCNHTBLGTRSBVI'

app.use('/', express.static(__dirname))

app.all('*', (req, res, next) => {
  if (req.get('hw-token') !== hwToken) {
    console.log('Access denied: wrong hw-token %s', req.get('hw-token'))
    res.status('403').end()
    return
  }
  next()
})

app.use('/api/compute', computeRouter)
app.use('/api/pair', pairRouter)

app.use((req, res, next) => {
  // next(createError(404))
  res.status(404).end()
  // next()
})

/* app.use((err, req, res) => {
  // res.locals.message = err.message
  res.status(err.status || 500)
  res.render('error')
}) */

var server = app.listen(8000, () => {
  console.log('Listen at http://localhost:%s', server.address().port)
})
