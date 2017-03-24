function baseIs(o1, o2) {
	return o1 === o2 || (o1 !== o1 && o2 !== o2);
}

function baseIsDefined(v) {
	return typeof v != 'undefined';
}

function isObject(o) {
	return typeof o == 'object' && o !== null;
}

function getKeys(o, isDefined) {
	const ret = [];

	if (Array.isArray(o)) {
		for (let idx = o.length - 1; idx >= 0; idx--) {
			if (isDefined(o[idx], idx)) {
				ret.push(idx);
			}
		}
	} else {
		let keys = Object.keys(o);
		for (let idx = keys.length - 1; idx >= 0; idx--) {
			let key = keys[idx];
			if (isDefined(o[key], key)) {
				ret.push(key);
			}
		}
	}

	return ret;
}

export default function shallowChanges(o1, o2, config = {}) {
	const { is = baseIs, isDefined = baseIsDefined } = config;
	let added = [];
	let deleted = [];
	let equal = [];
	let updated = [];

	if (!isObject(o1) || !isObject(o2)) {
		return false;
	}

	if (!is(o1, o2)) {
		const o1Keys = getKeys(o1, isDefined);
		const o2Keys = getKeys(o2, isDefined);

		if (o1Keys.length) {
			if (o2Keys.length) {
				const o2Map = {};
				for (let idx = o2Keys.length - 1; idx >= 0; idx--) {
					o2Map[o2Keys[idx]] = idx;
				}

				for (let idx = o1Keys.length - 1; idx >= 0; idx--) {
					const key = o1Keys[idx];
					if (isDefined(o2[key], key)) {
						if (is(o1[key], o2[key])) {
							equal.push(key);
						} else {
							updated.push(key);
						}
					} else {
						deleted.push(key);
					}
				}

				for (let idx = o2Keys.length - 1; idx >= 0; idx--) {
					const key = o2Keys[idx];
					if (!o1.hasOwnProperty(key)) {
						added.push(key);
					}
				}
			} else {
				deleted = o1Keys;
			}
		} else {
			added = o2Keys;
		}
	}

	return { added, deleted, equal, updated };
};
