import clippingPathInit from "../src/methods/clippingPathInit";
jest.mock('os', () => {
  const os = jest.requireActual('os');
  os.type = () => {
    return 'Darwin'
  }
  return os;
});
test("mac path init ", () => {
  expect(clippingPathInit()).toMatch("Volumes");
});

