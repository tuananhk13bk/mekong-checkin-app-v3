
import axios from 'axios'

const createRfidEvent = async(rfidCode, rfidReaderCode, readDateTime) => {
  try {
    // const res = await axios.post('http://localhost:11432/api/db/rfid-event/', {
    const res = await axios.post(`/api/db/rfid-event/`, {
      rfidCode,
      rfidReaderCode,
      readDateTime
    })
    return
  }
  catch (err) {
    console.error(`Error is: ${err}`)
  }
}

export default createRfidEvent