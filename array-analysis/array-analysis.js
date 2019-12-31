const arrayAnalysis = (array) => {
  const average = () => {
    return array.reduce(
      (total, currentValue) => {return total + currentValue}) / array.length
  }

  const min = () => {
    return Math.min(...array)
  }

  const max = () => {
    return Math.max(...array)
  }

  const length = () => {
    return array.length
  }

  if (array && array.length > 0) {
    return {
      average: average(),
      min: min(),
      max: max(),
      length: length(),
    }
  } else {return {}}
}

module.exports = arrayAnalysis