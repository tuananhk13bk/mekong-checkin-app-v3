
import axios from 'axios'

const readValidOrderByManual = async(orderStatusId1, orderStatusId2, rfidCode, arrivalDate) => {
  try {
    let result = {}
    if (rfidCode === '') return result
    // const res = await axios.get(`http://localhost:8000/api/db/valid-order/${rfidCode}`)
    const rfid = JSON.stringify({
      orderStatusId1,
      orderStatusId2,
      rfidCode,
      arrivalDate
    })
    console.log(rfid)
    const res = await axios.get(`/api/db/valid-order/${rfid}`)
    
    if (res.data.length === 0) {
      result = {}
    } else {
      result = res.data[0]
    }
    return result
  }
  catch (err) {
    console.error(`Error is: ${err}`)
  }
}

export default readValidOrderByManual