function capitalize(str) {
  if (str) return str[0].toUpperCase() + str.slice(1)
  return ''
}

module.exports = capitalize