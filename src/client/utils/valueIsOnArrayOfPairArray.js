const _ = require('lodash')

const valueIsOnArrayOfPairArray = (arr, value) => {
  const flattern = _.flattern(arr)
  return flattern.includes(value)
}

export default valueIsOnArrayOfPairArray