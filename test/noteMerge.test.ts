import noteMerge from "../src/methods/noteMerge";
const clippingJson = [
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
  },
  {
    bookName: '简约至上:交互式设计四策略 (图灵交互设计丛书 1) (科尔伯恩(Giles Colborne))',
    content: '简单而迅速的方式是用一句话把它写出来，包括我要设计什么、要遵循哪几条设计规则，尽量使用最简单的术语。',
    type: 'Highlight',
    page: '133',
    location: '',
    date: '2017年8月15日星期二 上午12:07:02'
  }
]

test('note', () => {
  expect(
    noteMerge(clippingJson)
  ).toStrictEqual([
    {
      bookName: 'Mindset (Carol Dweck)',
      content: 'excellence—whose greatness',
      type: 'Note',
      page: '37',
      location: '565',
      date: 'Friday, February 19, 2021 6:06:48 PM',
      note: 'As a contrast, let’s look'
    },
    {
      bookName: '简约至上:交互式设计四策略 (图灵交互设计丛书 1) (科尔伯恩(Giles Colborne))',
      content: '简单而迅速的方式是用一句话把它写出来，包括我要设计什么、要遵循哪几条设计规则，尽量使用最简单的术语。',
      type: 'Highlight',
      page: '133',
      location: '',
      date: '2017年8月15日星期二 上午12:07:02'
    }
  ])

  console.log(noteMerge(clippingJson))
});