# JS Parse Args
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


## Sponsored By
[![DigitalOcean](https://vsp.ams3.cdn.digitaloceanspaces.com/cdn/DO_Logo_Horizontal_Blue.png)](https://s.svarun.in/Ef)