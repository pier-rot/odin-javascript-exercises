const add = function (n1, n2) {
	return n1 + n2;
};

const subtract = function (n1, n2) {
	return n1 - n2;
};

const sum = function (arr) {
	return arr.reduce((acc, current) => {
		return acc + current;
	}, 0);
};

const multiply = function (arr) {
	return arr.reduce((acc, current) => {
		return acc * current;
	}, 1);
};

const power = function (base, exp) {
	return base ** exp;
};

const factorial = function (n) {
	function factAux(n, acc) {
		if (n == 0) {
			return acc;
		} else {
			return factAux(n - 1, n * acc);
		}
	}
	return factAux(n,1);
};

// Do not edit below this line
module.exports = {
	add,
	subtract,
	sum,
	multiply,
	power,
	factorial,
};
