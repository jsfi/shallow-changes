import buble from 'rollup-plugin-buble';
import uglify from 'rollup-plugin-uglify';

export default {
	dest: 'dist/shallow-changes.umd.js',
	entry: 'index.js',
	format: 'umd',
	moduleName: 'shallowChanges',
	plugins: [ buble(), uglify() ],
	sourceMap: false,
	useStrict: false
};
