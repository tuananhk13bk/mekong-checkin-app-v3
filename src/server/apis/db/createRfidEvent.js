const dbConnect = require('./dbConnect')

const QUERY_STRING = 
`
INSERT INTO rfid_events (rfid_code, rfid_reader_code, read_date_time)
VALUES ($1, $2, $3)
`

const createRfidEvent = async(req, res) => {
  const { rfidCode, rfidReaderCode, readDateTime } = req.body
  const client = await dbConnect()
  try {
    await client.query(QUERY_STRING, [rfidCode, rfidReaderCode, readDateTime])
    res.status(200).send(`RFID event created with rfid code: ${rfidCode}`) 
  }
  catch(err) {
    throw err
  }
  finally {
    client.release()
    console.log('Db released')
  }
}

module.exports = createRfidEvent