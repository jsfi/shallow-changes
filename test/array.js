import test from 'ava';
import changes from '../dist/shallow-changes';

test(`empty`, t => {
	t.deepEqual(changes([], []), { added: [], deleted: [], equal: [], updated: [] });
});

test(`equal`, t => {
	t.deepEqual(changes([ 1 ], [ 1 ]), { added: [], deleted: [], equal: [ 0 ], updated: [] });
});

test(`add`, t => {
	t.deepEqual(changes([], [ 1 ]), { added: [ 0 ], deleted: [], equal: [], updated: [] });
});

test(`update`, t => {
	t.deepEqual(changes([ 1 ], [ 2 ]), { added: [], deleted: [], equal: [], updated: [ 0 ] });
});

test(`delete`, t => {
	t.deepEqual(changes([ 1 ], []), { added: [], deleted: [ 0 ], equal: [], updated: [] });
});

test(`NaN`, t => {
	t.deepEqual(changes([ NaN ], [ NaN ]), { added: [], deleted: [], equal: [ 0 ], updated: [] });
});

test(`undefined add`, t => {
	t.deepEqual(changes([ undefined ], [ 1 ]), { added: [ 0 ], deleted: [], equal: [], updated: [] });
});

test(`undefined delete`, t => {
	t.deepEqual(changes([ 1 ], [ undefined ]), { added: [], deleted: [ 0 ], equal: [], updated: [] });
});
