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
	var ret = [];

	if (Array.isArray(o)) {
		for (var idx = o.length - 1; idx >= 0; idx--) {
			if (isDefined(o[idx], idx)) {
				ret.push(idx);
			}
		}
	} else {
		var keys = Object.keys(o);
		for (var idx$1 = keys.length - 1; idx$1 >= 0; idx$1--) {
			var key = keys[idx$1];
			if (isDefined(o[key], key)) {
				ret.push(key);
			}
		}
	}

	return ret;
}

function shallowChanges(o1, o2, config) {
	if ( config === void 0 ) config = {};

	var is = config.is; if ( is === void 0 ) is = baseIs;
	var isDefined = config.isDefined; if ( isDefined === void 0 ) isDefined = baseIsDefined;
	var added = [];
	var deleted = [];
	var equal = [];
	var updated = [];

	if (!isObject(o1) || !isObject(o2)) {
		return false;
	}

	if (!is(o1, o2)) {
		var o1Keys = getKeys(o1, isDefined);
		var o2Keys = getKeys(o2, isDefined);

		if (o1Keys.length) {
			if (o2Keys.length) {
				var o2Map = {};
				for (var idx = o2Keys.length - 1; idx >= 0; idx--) {
					o2Map[o2Keys[idx]] = idx;
				}

				for (var idx$1 = o1Keys.length - 1; idx$1 >= 0; idx$1--) {
					var key = o1Keys[idx$1];
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

				for (var idx$2 = o2Keys.length - 1; idx$2 >= 0; idx$2--) {
					var key$1 = o2Keys[idx$2];
					if (!o1.hasOwnProperty(key$1)) {
						added.push(key$1);
					}
				}
			} else {
				deleted = o1Keys;
			}
		} else {
			added = o2Keys;
		}
	}

	return { added: added, deleted: deleted, equal: equal, updated: updated };
}

module.exports = shallowChanges;
//# sourceMappingURL=shallow-changes.js.map
