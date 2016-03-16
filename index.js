'use strict'

module.exports = function (input) {
  var output = parseFloat(input) / 1.609344

  return !output && output !== 0 ? undefined : output
}
