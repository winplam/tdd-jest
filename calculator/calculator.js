const calculator = {
  validateParams(a, b) {
    let x = Number(a)
    let y = Number(b)
    if (!Number.isNaN(x) && !Number.isNaN(y)) {
      return [x, y]
    }
    throw new Error('Error: Inputs is not a number.')
  },

  add(a, b) {
    try {
      const [x, y] = this.validateParams(a, b)
      return x + y
    } catch (e) {
      return e
    }
  },
  subtract(a, b) {
    try {
      const [x, y] = this.validateParams(a, b)
      return x - y
    } catch (e) {
      return e
    }
  },
  divide(a, b) {
    try {
      const [x, y] = this.validateParams(a, b)
      return x / y
    } catch (e) {
      return e
    }
  },
  multiply(a, b) {
    try {
      const [x, y] = this.validateParams(a, b)
      return x * y
    } catch (e) {
      return e
    }
  },
}

module.exports = calculator