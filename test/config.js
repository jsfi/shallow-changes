import test from 'ava';
import changes from '../dist/shallow-changes';

test(`default is`, t => {
	t.deepEqual(changes([ 0 ], [ 1 ]), { added: [], deleted: [], equal: [], updated: [ 0 ] });
});

test(`custom is`, t => {
	t.deepEqual(changes([ 0 ], [ 1 ], { is: (a, b) => a + 1 === b }), { added: [], deleted: [], equal: [ 0 ], updated: [] });
});

test(`default isDefined`, t => {
	t.deepEqual(changes([ `ignore` ], [ 1 ]), { added: [], deleted: [], equal: [], updated: [ 0 ] });
});

test(`custom isDefined`, t => {
	t.deepEqual(changes([ `ignore` ], [ 1 ], { isDefined: v => v !== `ignore` }), { added: [ 0 ], deleted: [], equal: [], updated: [] });
});

test(`default isDefined`, t => {
	t.deepEqual(changes({ a: 0, b: 0 }, { a: 1, b: 1 }), { added: [], deleted: [], equal: [], updated: [ `a`, `b` ] });
});

test(`custom isDefined`, t => {
	t.deepEqual(changes({ a: 0, b: 0 }, { a: 1, b: 1 }, { isDefined: (v, k) => k !== `b` }), { added: [], deleted: [], equal: [], updated: [ `a` ] });
});
