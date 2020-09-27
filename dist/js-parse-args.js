(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.parse_args = factory());
}(this, (function () { 'use strict';

	function JSPArgs($args, $defaults, $is_nested) {
	  if ($args === void 0) {
	    $args = {};
	  }

	  if ($defaults === void 0) {
	    $defaults = {};
	  }

	  if ($is_nested === void 0) {
	    $is_nested = false;
	  }

	  this.args = JSPArgs.clone($args);
	  this.defaults = $defaults;
	  this.nested = $is_nested;
	  this.parse();
	  return this.args;
	}

	JSPArgs.clone = function (src) {
	  if (typeof src === 'object') {
	    var target = {};

	    for (var prop in src) {
	      if (src.hasOwnProperty(prop)) {
	        target[prop] = src[prop];
	      }
	    }

	    return target;
	  }

	  return src;
	};

	JSPArgs.prototype.parse = function () {
	  for (var $_key in this.defaults) {
	    if (this.defaults.hasOwnProperty($_key)) {
	      if (true === this.nested && typeof this.defaults[$_key] === 'object') {
	        this.args[$_key] = new JSPArgs(this.args[$_key], this.defaults[$_key], this.nested);
	      } else {
	        if (typeof this.args[$_key] === 'undefined') {
	          this.args[$_key] = JSPArgs.clone(this.defaults[$_key]);
	        }
	      }
	    }
	  }
	};

	function parse($args, $defaults, $is_deep) {
	  return new JSPArgs($args, $defaults, $is_deep);
	}

	return parse;

})));
