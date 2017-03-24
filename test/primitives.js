import test from 'ava';
import changes from '../dist/shallow-changes';

test(`from null`, t => {
	t.false(changes(null, []));
});

test(`to null`, t => {
	t.false(changes([], null));
});

test(`from boolean`, t => {
	t.false(changes(true, []));
});

test(`to boolean`, t => {
	t.false(changes([], true));
});

test(`from number`, t => {
	t.false(changes(1, []));
});

test(`to number`, t => {
	t.false(changes([], 1));
});

test(`from string`, t => {
	t.false(changes(`1`, []));
});

test(`to string`, t => {
	t.false(changes([], `1`));
});
