const arrayAnalysis = require('./array-analysis')

describe('array analysis', () => {
  test('pass array of numbers', () => {
    const object = {
      average: 4,
      min: 1,
      max: 8,
      length: 6,
    }
    expect(arrayAnalysis([1, 8, 3, 4, 2, 6])).toEqual(object)
  })

  test('returns empty object with empty parameters', () => {
    expect(arrayAnalysis().toString({}))
    expect(arrayAnalysis([]).toString({}))
    expect(arrayAnalysis(undefined).toString({}))
    expect(arrayAnalysis(null).toString({}))
  })
})