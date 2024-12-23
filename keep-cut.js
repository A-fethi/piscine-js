const cutFirst = (str) => {
	let res = ""
	for (let i = 2; i < str.length; i++) {
		res += str[i];
	}
	return res;
}

const cutLast = (str) => {
	let res = ""
	for (let i = 0; i < str.length-2; i++) {
		res += str[i];
	}
	return res;
}

const cutFirstLast = (str) => {
	let res = ""
	for (let i = 2; i < str.length-2; i++) {
		res += str[i];
	}
	return res;
}

const keepFirst = (str) => {
	if (str.length < 2) {
		return str;
	}

	let res = ""

	for (let i = 0; i < 2; i++) {
		res += str[i];
	}
	
	return res;
}

const keepLast = (str) => {
	if (str.length < 2) {
		return str;
	}

	let res = ""
	
	for (let i = str.length-2; i < str.length; i++) {
		res += str[i];
	}
	
	return res;
}

const keepFirstLast = (str) => {
    if (str.length <= 4) {
        return str;
    }

    let first = keepFirst(str);
    let last = keepLast(str);

    return first + last;
}
