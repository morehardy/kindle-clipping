<h1 align="center">Kindle-Clipping</h1>

<p align="center">
<img src="https://img.shields.io/badge/npm-v1.0.2-519dd9.svg" alt="version">
<img src="https://img.shields.io/codecov/c/github/morehardy/kindle-clipping/coverage.svg?style=flat-square" alt="coverage">
<img src="https://img.shields.io/github/license/morehardy/kindle-clipping" alt="license">

</p>

> kindle-clipping is a minimalist JavaScript library to parse kindle clippings.txt to json, manage your note and highlight.


- 2kb mini library
- 简体中文 / English language support
- find clipping.txt automatically
- note & highlight merge
- clipping string parse

## Getting Started

### Installation

```console
npm install kindle-clipping --save
```

### Import

```javascript
import kindleClipping from 'kindle-clipping'

const kindleClipping = require('kindle-clipping')

```

### API

#### init

```javascript
// get kindle clippings.txt by default path
kindleClipping()

// get kindle clippings.txt by custom path, customPath must be an absolute path.
kindleClipping(customPath)// eg. kindleClipping(Path.resolve([path]))
```
#### getJson()
get an array of unprocessed notes and highlight objects
```javascript
// eg.
kindleClipping().getJson()
// [
//   {
//     bookName: 'a book',
//     content: 'excellence—whose greatness',       
//     type: 'Note',
//     page: '37',
//     location: '565',
//     date: 'Friday, February 19, 2021 6:06:48 PM',
//   }
// ]
```
#### getMergedJson()
getMergedJson returns an array of combined notes and annotation objects
```javascript
// eg.
kindleClipping().getMergedJson()
// [
//   {
//     bookName: 'Mindset (Carol Dweck)',
//     content: 'excellence—whose greatness',       
//     type: 'Note',
//     page: '37',
//     location: '565',
//     date: 'Friday, February 19, 2021 6:06:48 PM',
//     note: 'is a note',
//     content: 'highlight content'
//   }
// ]
```

#### clippingParser(clippingString)
parses clipping string to a nested array of note and highlight
```javascript
// eg.
let clippingString =  `Mindset (Carol Dweck)
      - Your Highlight on page 37 | Location 565-565 | Added on Friday, February 19, 2021 6:06:48 PM
      
      As a contrast, let’s look
      ==========
      Mindset (Carol Dweck)
      - Your Note on page 37 | Location 565-565 | Added on Friday, February 19, 2021 6:06:48 PM
      
      excellence—whose greatness
      ==========`

kindleClipping.clippingParser(clippingString)
// [
//   {
//     bookName: 'Mindset (Carol Dweck)',
//     content: 'As a contrast, let’s look',
//     type: 'Highlight',
//     page: '37',
//     location: '565',
//     date: 'Friday, February 19, 2021 6:06:48 PM'
//   },
//   {
//     bookName: 'Mindset (Carol Dweck)',
//     content: 'excellence—whose greatness',
//     type: 'Note',
//     page: '37',
//     location: '565',
//     date: 'Friday, February 19, 2021 6:06:48 PM'
//   }
// ]
```


## License

kindle-clipping is licensed under a [MIT License](./LICENSE).