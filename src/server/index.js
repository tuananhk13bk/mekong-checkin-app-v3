// Declare my server
const express = require('express')
const app = express()
const server = require('http').createServer(app)
// Declare middleware
const bodyParser = require('body-parser')
// import APIs
const {
  readValidOrderByManual,
  createRfidEvent,
  updateOrderStatus
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

// :rfid is object include { orderStatusid, rfidCode, arrivalDate }
app.get('/api/db/valid-order/:rfid', readValidOrderByManual)

app.post('/api/db/rfid-event', createRfidEvent)

app.put('/api/db/order/:workOrderCode', updateOrderStatus)
// app.put('/api/db/put/:id', updateOrderStatus)
// app.post('/api/db/post/:rfidTagNum', handleRfidOnRead)

// send data to React client when COM port has data
// port.on('data', data => io.emit('data', decoder.end(data)))

// server listen on port ...
server.listen(8000, (req, res) => console.log(`Server is listening on port 8000`))
