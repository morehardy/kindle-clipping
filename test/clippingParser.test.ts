import clippingParser from '../src/methods/clippingParser'

test('clipping parser', () => {
  expect(
    clippingParser(
      `Mindset (Carol Dweck)
      - Your Highlight on page 37 | Location 565-565 | Added on Friday, February 19, 2021 6:06:48 PM
      
      As a contrast, let’s look
      ==========
      Mindset (Carol Dweck)
      - Your Note on page 37 | Location 565-565 | Added on Friday, February 19, 2021 6:06:48 PM
      
      excellence—whose greatness
      ==========`
    )
  ).toStrictEqual([
    {
      bookName: 'Mindset (Carol Dweck)',
      content: 'As a contrast, let’s look',
      type: 'Highlight',
      page: '37',
      location: '565',
      date: 'Friday, February 19, 2021 6:06:48 PM'
    },
    {
      bookName: 'Mindset (Carol Dweck)',
      content: 'excellence—whose greatness',
      type: 'Note',
      page: '37',
      location: '565',
      date: 'Friday, February 19, 2021 6:06:48 PM'
    }
  ])
})