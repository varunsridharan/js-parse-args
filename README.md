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

console.log(parse_args($args,$defaults,true));
```

---

## 📝 Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

[Checkout CHANGELOG.md](/CHANGELOG.md)

## 🤝 Contributing
If you would like to help, please take a look at the list of [issues](issues/).

## 💰 Sponsor
[I][twitter] fell in love with open-source in 2013 and there has been no looking back since! You can read more about me [here][website].
If you, or your company, use any of my projects or like what I’m doing, kindly consider backing me. I'm in this for the long run.

- ☕ How about we get to know each other over coffee? Buy me a cup for just [**$9.99**][buymeacoffee]
- ☕️☕️ How about buying me just 2 cups of coffee each month? You can do that for as little as [**$9.99**][buymeacoffee]
- 🔰         We love bettering open-source projects. Support 1-hour of open-source maintenance for [**$24.99 one-time?**][paypal]
- 🚀         Love open-source tools? Me too! How about supporting one hour of open-source development for just [**$49.99 one-time ?**][paypal]

## 📜  License & Conduct
- [**General Public License v3.0 license**](LICENSE) © [Varun Sridharan](website)
- [Code of Conduct](code-of-conduct.md)

## 📣 Feedback
- ⭐ This repository if this project helped you! :wink:
- Create An [🔧 Issue](issues/) if you need help / found a bug

## Connect & Say 👋
- **Follow** me on [👨‍💻 Github][github] and stay updated on free and open-source software
- **Follow** me on [🐦 Twitter][twitter] to get updates on my latest open source projects
- **Message** me on [📠 Telegram][telegram]
- **Follow** my pet on [Instagram][sofythelabrador] for some _dog-tastic_ updates!

---

<p align="center">
<i>Built With ♥ By <a href="https://sva.onl/twitter"  target="_blank" rel="noopener noreferrer">Varun Sridharan</a> 🇮🇳 </i>
</p>

---

<!-- Personl Links -->
[paypal]: https://sva.onl/paypal
[buymeacoffee]: https://sva.onl/buymeacoffee
[sofythelabrador]: https://www.instagram.com/sofythelabrador/
[github]: https://sva.onl/github/
[twitter]: https://sva.onl/twitter/
[telegram]: https://sva.onl/telegram/
[email]: https://sva.onl/email
[website]: https://sva.onl/website/

[downloads-image]: http://img.shields.io/npm/dm/js-parse-args.svg
[npm-url]: https://www.npmjs.com/package/js-parse-args
[npm-image]: http://img.shields.io/npm/v/js-parse-args.svg
