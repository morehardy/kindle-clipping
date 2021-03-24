import labelParser from "../src/methods/labelParser";

test("clipping parser", () => {
  const clippingText = '- Your Highlight on page 37 | Location 565-565 | Added on Friday, February 19, 2021 6:06:48 PM'

  expect(
    labelParser(clippingText).page
  ).toBe("37");

  expect(
    labelParser(clippingText).date
  ).toBe("Friday, February 19, 2021 6:06:48 PM");

  expect(
    labelParser(clippingText).type
  ).toBe("Highlight");

  expect(
    labelParser(clippingText).location
  ).toBe("565");
});
