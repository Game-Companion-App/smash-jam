let playersR1

describe('fills array with empyt string based on seed number', () => {
  beforeEach(() => {
    playersR1 = []
  })

  test('fills array with 4 empty strings', () => {
    playersR1 = Array(4).fill("")
    expect(playersR1).toEqual(["", "", "", ""])
  })

  test('fills array with 8 empty strings', () => {
    playersR1 = Array(8).fill("")
    expect(playersR1).toEqual(["", "", "", "", "", "", "", ""])
  })

  test('fills array with 16 empty strings', () => {
    playersR1 = Array(16).fill("")
    expect(playersR1).toEqual(["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""])
  })

  test('fills array with 32 empty strings', () => {
    playersR1 = Array(32).fill("")
    expect(playersR1).toEqual(["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""])
  })

  test('fills array with 64 empty strings', () => {
    playersR1 = Array(64).fill("")
    expect(playersR1).toEqual(["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""])
  })
  
})