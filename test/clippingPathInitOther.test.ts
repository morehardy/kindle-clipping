import clippingPathInit from '../src/methods/clippingPathInit'
jest.mock('os', () => {
  const os = jest.requireActual('os')
  os.type = () => {
    return 'unknown'
  }
  return os
})
test('unknown path init ', () => {
  expect(() => {
    try {
      clippingPathInit()
    } catch (e) {
      console.log('1', typeof e)
      throw new Error(e)
    }
  }).toThrowError('unSupport os')
})
