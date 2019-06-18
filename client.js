const express = require('express')
const server = express()

const cors = require('cors')
server.use(cors())

const path = require('path')
server.use(express.static('dist/index'))

server.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, './dist/index', 'index.html'))
})

server.listen(8080, function () {
  const host = this.address().address
  const port = this.address().port

  console.log('run at http://%s:%s', host, port)
})
