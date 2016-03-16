# km-to-mi [![Build Status](https://travis-ci.org/Zertz/km-to-mi.svg?branch=master)](https://travis-ci.org/Zertz/km-to-mi) [![NPM version](https://badge.fury.io/js/km-to-mi.png)](http://badge.fury.io/js/km-to-mi)

> Convert kilometers to miles


## Install

```
$ npm install --save km-to-mi
```


## Usage

```js
const kmToMi = require('km-to-mi');

kmToMi(1.609344);
//=> 1

kmToMi('unicorns');
//=> undefined
```


## API

### kmToMi(input)

#### input

Type: `number`

Returns `undefined` when input is not a number or cannot be parsed to one.


## License

MIT © [Pier-Luc Gendreau](https://github.com/Zertz)
