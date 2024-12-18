function sign(num) {
	if (num > 0) {
		return 1
	} else if (num < 0) {
		return -1
	} else {
		return 0
	}
}

function sameSign(num1, num2) {
	if ((num1 > 0 && num2 > 0) || (num1 < 0 && num2 < 0) || (num1 == 0 && num2 == 0)) {
		return true
	} else {
		return false
	}
}
