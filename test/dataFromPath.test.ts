import dataFromPath from '../src/methods/dataFromPath'
import path from "path";

test('dataFromPath test', () => {
  expect(() => {
    try {
      dataFromPath("./lib/clippings.txt");
    } catch (e) {
      throw Error(e);
    }
  }).toThrowError("Error: ./lib/clippings.txt not exist, please make sure the kindle device is connected properly!");

  expect(
    dataFromPath(path.resolve(__dirname, "./lib/clippings.txt"))
  ).toBeDefined()
})