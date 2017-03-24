import buble from 'rollup-plugin-buble';

export default {
	dest: 'dist/shallow-changes.js',
	entry: 'index.js',
	format: 'cjs',
	moduleName: 'shallowChanges',
	plugins: [ buble() ],
	sourceMap: true,
	useStrict: false
};
