import clippingPathInit from "../src/methods/clippingPathInit";
jest.mock('os', () => {
  const os = jest.requireActual('os');
  os.type = () => {
    return 'Windows_NT'
  }
  return os;
});
test("mac path init ", () => {
  expect(clippingPathInit()).toMatch("window");
});

