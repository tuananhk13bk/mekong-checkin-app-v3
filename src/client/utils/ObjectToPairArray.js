const ObjectToPairArray = (inputArr) => {
  const result = inputArr.reduce((accum, elm) => {
    const accumCurrent = [elm.workOrderCode, elm.rfidTagNum]
    accum.push(accumCurrent)
    return accum
  }, [])
  return result
}

export default ObjectToPairArray
// module.exports = ObjectToPairArray