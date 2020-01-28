const { removeThirdRepeatedLetter, findMaxSumInTwoIntDigits } = require('../index')

// removeThirdRepeatedLetter
it('should return “eedaad” when input “eedaaad”', () => {
  const input = 'eedaaad'
  expect(removeThirdRepeatedLetter(input)).toBe('eedaad')
})

it('should return “xxtxx” when input “xxxtxxx”', () => {
  const input = 'xxxtxxx'
  expect(removeThirdRepeatedLetter(input)).toBe('xxtxx')
})

it('should return “uuxaaxuu” when input “uuuuxaaaaxuuu”', () => {
  const input = 'uuuuxaaaaxuuu'
  expect(removeThirdRepeatedLetter(input)).toBe('uuxaaxuu')
})

// findMaxSumInTwoIntDigits
it('should return 93 when input [51, 71, 17, 42]', () => {
  const input = [51, 71, 17, 42]
  expect(findMaxSumInTwoIntDigits(input)).toBe(93)
})

it('should return 102 when input [42, 33, 60]', () => {
  const input =  [42, 33, 60]
  expect(findMaxSumInTwoIntDigits(input)).toBe(102)
})

it('should return -1 when input [51, 32, 43]', () => {
  const input =  [51, 32, 43]
  expect(findMaxSumInTwoIntDigits(input)).toBe(-1)
})