
import axios from 'axios'

async function updateOrderStatus(workOrderCode, statusId) {
  try {
    const res = await axios.put(`/api/db/order/${workOrderCode}`, { statusId })
    return
  }
  catch (err) {
    console.error(`Error is: ${err}`)
  }
}

export default updateOrderStatus