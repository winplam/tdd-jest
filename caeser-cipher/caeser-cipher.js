function caeserCipher(str, offset) {

  function encodeChar(char, offset) {
    if (char === char.toUpperCase()) {
      return String.fromCharCode((char.charCodeAt(0) + offset - 65) % 26 + 65)
    } else {
      return String.fromCharCode((char.charCodeAt(0) + offset - 97) % 26 + 97)
    }
  }

  function encode(str, offset) {
    let decipher = '';
    [...str].forEach(char => {
      decipher += encodeChar(char, offset)
    })
    return decipher
  }

  return encode(str, offset)
}

module.exports = caeserCipher
