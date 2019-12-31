const capitalize = require('./capitalize')

describe('capitalize', () => {
  test('return a string with first character capitalized', () => {
    expect(capitalize('hello world')).toMatch('Hello world')
  })

  test('return an empty string', () => {
    expect(capitalize('')).toMatch('')
  })

  test('works with undefined', () => {
    expect(capitalize(undefined)).toMatch('')
  })

  test('works with null', () => {
    expect(capitalize(null)).toMatch('')
  })

  test('returns initial string when first character is not a letter', () => {
    expect(capitalize('1. some string')).toMatch('1. some string')
  })
})