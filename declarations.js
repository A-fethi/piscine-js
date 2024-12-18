const escapeStr = "\`\\\/\"\'";
const arr = [4, '2'];
const obj = {};

obj.str = "afethi";
obj.num = 49;
obj.bool = true;
obj.undef = undefined;

const nested = {
	arr: [4, undefined, '2'],
	obj: {
		str: "aftehi",
		num: 49,
		bool: false,
	}
};

Object.freeze(nested);
Object.freeze(nested.arr);
Object.freeze(nested.obj);
