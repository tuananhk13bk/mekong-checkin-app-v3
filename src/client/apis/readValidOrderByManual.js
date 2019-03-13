
import axios from 'axios'

const readValidOrderByManual = async(orderStatusId1, orderStatusId2, rfidCode, arrivalDate) => {
  try {
    let result = {}
    if (rfidCode === '') return result
    const rfid = {
      orderStatusId1,
      orderStatusId2,
      rfidCode,
      arrivalDate
    }
    // const res = await axios.post(`http://localhost:11432/api/db/valid-order/`, rfid)
    const res = await axios.post(`/api/db/valid-order/`, rfid)
    
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