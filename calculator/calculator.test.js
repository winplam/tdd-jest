const calculator = require('./calculator')

describe('calculator', () => {
  test('works positive integers', () => {
    expect(calculator.add(100, 200)).toBe(300)
    expect(calculator.subtract(400, 100)).toBe(300)
    expect(calculator.divide(900, 3)).toBe(300)
    expect(calculator.multiply(100, 3)).toBe(300)
  })

  test('works with negative integers', () => {
    expect(calculator.add(-100, -200)).toBe(-300)
    expect(calculator.subtract(-400, -100)).toBe(-300)
    expect(calculator.divide(-900, -3)).toBe(300)
    expect(calculator.multiply(-100, -3)).toBe(300)
  })

  test('works with floats', () => {
    expect(calculator.add(1.123, -2.987)).toBeCloseTo(-1.864)
    expect(calculator.subtract(4.00, -1.987)).toBeCloseTo(5.987)
    expect(calculator.divide(9.9, 3.3)).toBeCloseTo(3)
    expect(calculator.multiply(1.5, 3.3)).toBeCloseTo(4.95)
  })

  test('works with 0', () => {
    expect(calculator.add(100, 0)).toBe(100)
    expect(calculator.subtract(0, -100)).toBe(100)
    expect(calculator.divide(0, 3)).toBe(0)
    expect(calculator.multiply(0, -3)).toBe(-0)
  })

  test('handles strings', () => {
    expect(calculator.add('100', '200')).toBe(300)
    expect(calculator.subtract([400], [100])).toBe(300)
    expect(calculator.divide([900], '3')).toBe(300)
    expect(calculator.multiply('100', [3])).toBe(300)
  })

  test('handles NaN parameters', () => {
    expect(calculator.add('hello', 200)).toBeInstanceOf(Error)
    expect(calculator.subtract('400', { n: 100 })).toBeInstanceOf(Error)
    expect(calculator.divide([100, 9], '3')).toBeInstanceOf(Error)
    expect(calculator.multiply({ one: 1 }, ['3'])).toBeInstanceOf(Error)
  })
})