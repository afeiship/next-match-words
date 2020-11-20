# next-match-words
> Get matched english words.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @jswork/next-match-words
```

## usage
```js
import '@jswork/next-match-words';

const words = "How're you, i'm fine. And you?";
const res = nx.matchWords(words);

// ["How're", 'you', "i'm", 'fine', 'And', 'you']
```

## resources
- https://github.com/regexhq/word-regex

## license
Code released under [the MIT license](https://github.com/afeiship/next-match-words/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-match-words
[version-url]: https://npmjs.org/package/@jswork/next-match-words

[license-image]: https://img.shields.io/npm/l/@jswork/next-match-words
[license-url]: https://github.com/afeiship/next-match-words/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-match-words
[size-url]: https://github.com/afeiship/next-match-words/blob/master/dist/next-match-words.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-match-words
[download-url]: https://www.npmjs.com/package/@jswork/next-match-words
