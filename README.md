# JS Parse Args
[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url]

is a generic utility for merging together an array of arguments and an array of default values.

# Installation
### NPM
`npm install js-parse-args`

---

### Script Include
```html
<script src="https://raw.githubusercontent.com/varunsridharan/js-parse-args/master/js-parse-args.js"/></script>
```

# Usage

## NPM Usage
```javascript
const parse_args = require('js-parse-args');

// Parse Args 
let $_args = parse_args($args,$defaults);

// Nested Parse Args
let $_args = parse_args($args,$defaults,true);
```

## Manual

### Parse Args
Merges the elements of one or more arrays together so that the values of one are appended to the end of the previous one. It returns the resulting array. 
```javascript
var $args = {
	key1:"KEY1",
	key2:"KEY2",
};

var $defaults = {
	key1:"DEFAULT1",
	key2:"DEFAULT2",
	key3:"DEFAULT3",
};

console.log(parse_args($args,$defaults));
```

### Parse Args Nested
Merges the elements of one or more arrays together so that the values of one are appended to the end of the previous one. It returns the resulting array. 
```javascript
var $args = {
	key1:"KEY1",
	key2:"KEY2",
	key3:{
		key31:"KEY31",
	}
};

var $defaults = {
	key1:"DEFAULT1",
	key2:"DEFAULT2",
	key3:{
		key31:"DEFAULT31",
        key32:"DEFAULT32",
        key33:"DEFAULT33",
	}
};

console.log(parse_args_deep($args,$defaults));
```

---

## Change Log
### 1.0.1 [02/11/2018]
* Updated Keywords & Author Details

### 1.0.0 [31/10/2018]
* First Release

---
## Contribute
If you would like to help, please take a look at the list of
[issues][issues] or the [To Do](#-todo) checklist.

## License
This project is licensed under **General Public License v3.0 license**. See the [LICENSE](LICENSE) file for more info.

## Copyright
2017 - 2018 Varun Sridharan, [varunsridharan.in][website]

If you find it useful, let me know :wink:

You can contact me on [Twitter][twitter] or through my [email][email].

## Backed By
| [![DigitalOcean][do-image]][do-ref] | [![JetBrains][jb-image]][jb-ref] |  [![Tidio Chat][tidio-image]][tidio-ref] |
| --- | --- | --- |

[twitter]: https://twitter.com/varunsridharan2
[email]: mailto:varunsridharan23@gmail.com
[website]: https://varunsridharan.in
[issues]: issues/
[composer]: http://getcomposer.org/download/
[downloadzip]:https://github.com/varunsridharan/vsp-framework/archive/master.zip

[do-image]: https://vsp.ams3.cdn.digitaloceanspaces.com/cdn/DO_Logo_Horizontal_Blue-small.png
[jb-image]: https://vsp.ams3.cdn.digitaloceanspaces.com/cdn/phpstorm-small.png?v3
[tidio-image]: https://vsp.ams3.cdn.digitaloceanspaces.com/cdn/tidiochat-small.png
[do-ref]: https://s.svarun.in/Ef
[jb-ref]: https://www.jetbrains.com
[tidio-ref]: https://tidiochat.com

[downloads-image]: http://img.shields.io/npm/dm/js-parse-args.svg
[npm-url]: https://www.npmjs.com/package/js-parse-args
[npm-image]: http://img.shields.io/npm/v/js-parse-args.svg
