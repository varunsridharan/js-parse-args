import babel from '@rollup/plugin-babel';
import { uglify } from 'rollup-plugin-uglify';
import filesize from 'rollup-plugin-filesize';

export default {
	input: './src/index.js',
	output: [
		{
			file: './dist/js-parse-args.js',
			format: 'umd',
			name: 'parse_args',
		},
		{
			file: './dist/js-parse-args.min.js',
			format: 'umd',
			name: 'parse_args',
			plugins: [
				uglify( { mangle: true } ),
			]
		}
	],
	plugins: [
		babel( {
			exclude: 'node_modules/**'
		} ),
		filesize(),
	]
};
