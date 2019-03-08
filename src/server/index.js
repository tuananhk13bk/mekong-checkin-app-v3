// Declare my server
const express = require('express')
const app = express()
const server = require('http').createServer(app)
// Declare middleware
const bodyParser = require('body-parser')
// import APIs
const {
  handleRfidOnRead,
  readValidOrder
} = require('./apis/db')
// use body-parser
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
)

// Use static file (build from React)
app.use(express.static('./dist'))

// server response
app.get('/api/db/get/valid-order/:rfidTagNum', readValidOrder)
// app.put('/api/db/put/:id', updateOrderStatus)
app.post('/api/db/post/:rfidTagNum', handleRfidOnRead)

// send data to React client when COM port has data
// port.on('data', data => io.emit('data', decoder.end(data)))

// server listen on port ...
server.listen(8000, (req, res) => console.log(`Server is listening on port 8000`))
