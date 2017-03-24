import test from 'ava';
import changes from '../dist/shallow-changes';

test(`empty`, t => {
	t.deepEqual(changes({}, {}), { added: [], deleted: [], equal: [], updated: [] });
});

test(`equal`, t => {
	t.deepEqual(changes({ a: 1 }, { a: 1 }), { added: [], deleted: [], equal: [ `a` ], updated: [] });
});

test(`add`, t => {
	t.deepEqual(changes({}, { a: 1 }), { added: [ `a` ], deleted: [], equal: [], updated: [] });
});

test(`update`, t => {
	t.deepEqual(changes({ a: 1 }, { a: 2 }), { added: [], deleted: [], equal: [], updated: [ `a` ] });
});

test(`delete`, t => {
	t.deepEqual(changes({ a: 1 }, {}), { added: [], deleted: [ `a` ], equal: [], updated: [] });
});

test(`NaN`, t => {
	t.deepEqual(changes({ a: NaN }, { a: NaN }), { added: [], deleted: [], equal: [ `a` ], updated: [] });
});

test(`undefined add`, t => {
	t.deepEqual(changes({ a: undefined }, { a: 1 }), { added: [ `a` ], deleted: [], equal: [], updated: [] });
});

test(`undefined delete`, t => {
	t.deepEqual(changes({ a: 1 }, { a: undefined }), { added: [], deleted: [ `a` ], equal: [], updated: [] });
});
