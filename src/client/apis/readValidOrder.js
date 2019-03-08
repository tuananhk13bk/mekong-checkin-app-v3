
import axios from 'axios'

async function readValidOrder(rfidTagNum) {
  try {
    let result = {}
    if (rfidTagNum === '') return result
    const res = await axios.get(`http://localhost:8000/api/db/get/valid-order/${rfidTagNum}`)
    // const res = await axios.get(`/api/db/get/valid-order/${rfidTagNum}`)
    
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

export default readValidOrder