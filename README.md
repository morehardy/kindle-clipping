<h1 align="center">Kindle-Clipping</h1>

<p align="center">
<img src="https://img.shields.io/badge/npm-v0.5-519dd9.svg" alt="version">
<img src="https://img.shields.io/codecov/c/github/morehardy/kindle-clipping/coverage.svg?style=flat-square" alt="coverage">
<img src="https://img.shields.io/github/license/morehardy/kindle-clipping" alt="license">

</p>

> kindle-clipping is a minimalist JavaScript library to parse kindle clippings.txt to json, manage your note and highlight.

## Getting Started

### Installation

```console
npm install kindle-clipping --save
```
### API

#### getJson()
```javascript
kindleClipping().getJson() // get an array of unprocessed notes and highlight objects
// eg.
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
```javascript
kindleClipping().getMergedJson() // getMergedJson returns an array of combined notes and annotation objects
// eg.
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



## License

kindle-clipping is licensed under a [MIT License](./LICENSE).