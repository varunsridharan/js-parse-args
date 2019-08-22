class JS_Parse_Args {
	constructor( $args = {}, $defaults = {}, $is_nested = false ) {
		this.args     = JS_Parse_Args.clone( $args );
		this.defaults = $defaults;
		this.nested   = $is_nested;
		this.parse();
		return this.args;
	}

	static clone( src ) {
		if( typeof src === 'object' ) {
			let target = {};
			for( let prop in src ) {
				if( src.hasOwnProperty( prop ) ) {
					target[ prop ] = src[ prop ];
				}
			}

			return target;
		}
		return src;
	}

	parse() {
		for( let $_key in this.defaults ) {
			if( this.defaults.hasOwnProperty( $_key ) ) {
				if( true === this.nested && typeof this.defaults[ $_key ] === 'object' ) {
					this.args[ $_key ] = new JS_Parse_Args( this.args[ $_key ], this.defaults[ $_key ], this.nested );
				} else {
					if( typeof this.args[ $_key ] === 'undefined' ) {
						this.args[ $_key ] = JS_Parse_Args.clone( this.defaults[ $_key ] );
					}
				}
			}
		}
	}
}

export default ( $args = {}, $defaults = {}, $is_deep = false ) => new JS_Parse_Args( $args, $defaults, $is_deep );