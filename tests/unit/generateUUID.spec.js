const generateUUID = require('../../src/utils/generateUUID')

describe('Generate UUID', () => {
  it('Should generate an UUID', () => {
    const uuid = generateUUID()

    expect(uuid).toHaveLength(8)
  })
})
