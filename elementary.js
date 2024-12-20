function multiply(a, b) {
	let i = 0;
	let res = 0
	let isNegative = false;

	if (a < 0 && b < 0) {
		a = -a;
		b = -b;
	}

	if (a < 0) {
		a = -a;
		isNegative = true
	}

	if (b < 0) {
		b = -b;
		isNegative = true
	}

	if (a == 0 || b == 0) {
		return 0
	}

	while (i < b) {
		res += a
		i++
	}

	if (isNegative) {
		res = -res;
		return res;
	}

	return res
}

function divide(a, b) {
	let isNegative = false;
	if (a == 0) {
		return 0
	}
	if (b == 0) {
		return Number.MAX_VALUE;
	}
	if ((a > 0 && b < 0) || (a < 0 && b > 0)) {
		isNegative = true;
	}
	if (a < 0) {
		a = -a;
	}
	if (b < 0) {
		b = -b;
	}

	let i = 0;
	while (a >= b) {
		a -= b;
		i++;
	}
	if (isNegative) {
		i = -i
		return i
	}
	return i;
}

function modulo(a, b) {
	let isNegative = false;

	if (a == 0) {
		return 0
	}

	if (b == 0) {
		return Number.MAX_VALUE;
	}

	if ((a > 0 && b < 0) || (a < 0 && b > 0)) {
		isNegative = true;
	}

	if ((a < 0 && b < 0) || (a < 0 && b > 0)) {
		isNegative = true;
	} else if (a > 0 && b < 0) {
		isNegative = false;
	}

	if (a < 0) {
		a = -a;
	}

	if (b < 0) {
		b = -b;
	}

	let i = 0;
	while (a >= b) {
		a -= b;
		i++;
	}

	if (isNegative) {
		a = -a
		return a
	}

	return a;
}
