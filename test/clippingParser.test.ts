import clippingParser from "../src/methods/clippingParser";
import path from "path";

test("clipping parser", () => {
  expect(() => {
    try {
      clippingParser("./lib/clippings.txt");
    } catch (e) {
      throw Error(e);
    }
  }).toThrowError("./lib/clippings.txt not exist!");

  expect(
    clippingParser(path.resolve(__dirname, "./lib/clippings.txt"))
  ).toBeDefined();

  console.log(clippingParser(path.resolve(__dirname, "./lib/clippings.txt")))
});