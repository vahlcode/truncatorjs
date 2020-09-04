# Trunc Js

A Javascript library for truncating strings. Useful for making post excerpts.

## Quick start

### Installation

```shell
npm i read_count
```

### Usage

1. Using via ES6 import

```javascript
import truncjs from "truncjs"

console.log(truncjs("Hello Ada, finally the rain stopped! Up for a walk?", 0, 10)) // => "Hello Ada..."
```

2. Using via Common JS reqiure()

```javascript
let truncjs = require("truncjs")

console.log(truncjs("Hello Ada, finally the rain stopped! Up for a walk?", 0, 10)) // => "Hello Ada..."
```

### Let's keep the example clean

```javascript
import truncjs from "truncjs"

let string = "Hello Ada, finally the rain stopped! Up for a walk?"

console.log(truncjs(string, 0, 10)) // => "Hello Ada..."
```

```javascript
let truncjs = require("truncjs")

let string = "Hello Ada, finally the rain stopped! Up for a walk?"

console.log(truncjs(string, 0, 10)) // => "Hello Ada..."
```

### Parameters


```javascript
let truncjs = require("truncjs")

let string = "Hello Ada, finally the rain stopped! Up for a walk?"

let startPos = 0; //Where to start counting from. 0 means from the beginning. You can set it to any position of your choice

let length = 0; //The number of string to be spared (returned) from the string passed as argument to truncjs() function.

console.log(truncjs(string, startPos, length)) // => "Hello Ada..."
```

## Author

[Valentine Elum](https://twitter.com/vahlcode)

## License

MIT LICENSE
