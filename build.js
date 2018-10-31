import JS_Parse_Args from './index';

export default ( ( window ) => {
	window.parse_args         = ( $args = {}, $defaults = {} ) => JS_Parse_Args( $args, $defaults, false );
	window.js_parse_args      = ( $args = {}, $defaults = {} ) => JS_Parse_Args( $args, $defaults, false );
	window.parse_args_deep    = ( $args = {}, $defaults = {} ) => JS_Parse_Args( $args, $defaults, true );
	window.js_parse_args_depp = ( $args = {}, $defaults = {} ) => JS_Parse_Args( $args, $defaults, true );
} )( window );