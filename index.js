class JS_Parse_Args {
	constructor( $args = {}, $defaults = {}, $is_nested = false ) {
		this.args     = JSON.parse( JSON.stringify( $args ) );
		this.defaults = JSON.parse( JSON.stringify( $defaults ) );
		this.nested   = $is_nested;
		this.parse();
		return this.args;
	}

	parse() {
		for( let $_key in this.defaults ) {
			if( true === this.nested && typeof this.defaults[ $_key ] === 'object' ) {
				this.args[ $_key ] = new JS_Parse_Args( this.args[ $_key ], this.defaults[ $_key ], this.nested );
			} else {
				if( typeof this.args[ $_key ] === 'undefined' ) {
					this.args[ $_key ] = this.defaults[ $_key ];
				}
			}
		}
	}
}

export default ( $args = {}, $defaults = {}, $is_deep = false ) => new JS_Parse_Args( $args, $defaults, $is_deep );