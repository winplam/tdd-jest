const caeserCipher = require('./caeser-cipher')

describe('caesar cipher', () => {
  test('works with single letters', () => {
    expect(caeserCipher('A', 3)).toMatch('D')
  })

  test('works with words', () => {
    expect(caeserCipher('Aaaaa', 1)).toMatch('Bbbbb')
  })

  test('wraps around alphabet', () => {
    expect(caeserCipher('Zz', 5)).toMatch('Ee')
  })

  test('works with phrases', () => {
    expect(caeserCipher('Hello, World!', 5)).toMatch('Mjqqt1?Btwqi@')
  })

  test('works with large shift factors', () => {
    expect(caeserCipher('Hello, World!', 75)).toMatch('EbiilCQTloiaR')
  })

  // test('works with negative shift', () => {
  //   expect(caeserCipher('Mjqqt1?Btwqi@', -5)).toMatch('Hello, World!')
  // })
})