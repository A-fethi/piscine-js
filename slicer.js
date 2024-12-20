const slice = (str, start = 0, end = str.length) => {
	let res = [];
	if (start < 0) {
		start = start + str.length;
	}

	if (end < 0) {
		end = end + str.length;
	}

	if (start >= end) {
		return [];
	}

	if (Array.isArray(str)) {
		for (let i = start; i < end; i++) {
			res.push(str[i]);
		}
	} else {
		for (let i = start; i < end; i++) {
			res += str[i];
		}
	}
	return res;
}
