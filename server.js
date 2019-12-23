const express = require('express')
const app = express()

app.use(express.static('public'))

app.get('/', function (req, res) {
  res.send('index.html')
})

var port = process.env.PORT || 8080;

app.listen(port, function () {
  console.log('Its alive!')
})