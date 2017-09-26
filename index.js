let express = require('express')
var app = express()
let http = require('http').Server(app)

app.use('/', express.static(__dirname + '/static'))
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html')
})

http.listen(3000, function () {
  console.log('3000');
})
