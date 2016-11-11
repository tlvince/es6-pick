# es6-pick

[![Build Status][travis-image]][travis-url]
[![npm version][npm-image]][npm-url]
[![License][license-image]][license-url]

[travis-url]: https://travis-ci.org/tlvince/es6-pick
[travis-image]: https://img.shields.io/travis/tlvince/es6-pick.svg
[npm-url]: https://www.npmjs.com/package/es6-pick
[npm-image]: https://img.shields.io/npm/v/es6-pick.svg
[license-url]: https://opensource.org/licenses/MIT
[license-image]: https://img.shields.io/npm/l/es6-pick.svg

> Lodash pick in ES6

```js
const pick = require('es6-pick')
const obj = {
  a: 'foo',
  b: 'bar',
  c: 'baz'
}

pick(obj, 'a')
//=> {a: 'foo'}

pick(obj, ...['a', 'b'])
//=> {a: 'foo', b: 'bar'}
```

## Installation

```shell
npm install --save es6-pick
```

## Author

© 2016 Tom Vincent <git@tlvince.com> (https://tlvince.com)

## License

Released under the [MIT license](http://tlvince.mit-license.org).
