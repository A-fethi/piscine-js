const indexOf = (arr, value, optional = 0) => {
	for (let i = optional; i < arr.length; i++) {
		if (arr[i] == value) {
			return i;
		}
	}
	return -1
}

const lastIndexOf = (arr, value, optional = arr.length - 1) => {
	for (let i = optional; i >= 0; i--) {
		if (arr[i] == value) {
			return i;
		}
	}
	return -1;
}

const includes = (arr, value, optional = 0) => {
	for (let i = optional; i < arr.length; i++) {
		if (arr[i] == value) {
			return true;
		}
	}
	return false;
}

console.log(lastIndexOf([1, 2, 3, 4, 5, 4, 3, 2, 1], 2))