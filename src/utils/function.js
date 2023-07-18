// number format
export const formatNumber = (number) => {
  const unitWords = ["", "k", "m", "b"]
  const splitUnit = 1000
  let splitCount = 0

  while (number >= splitUnit && splitCount < unitWords.length - 1) {
    number /= splitUnit
    splitCount++
  }
  const roundedNumber = Math.round(number * 100) / 100
  const resultString = String(roundedNumber) + unitWords[splitCount]

  return resultString
}

// Returns a random date (with a time of midnight) between start and end dates
export const getRandomDate = (start, end) => {
  let date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));

  return date.toString()
}