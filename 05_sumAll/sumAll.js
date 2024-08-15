const sumAll = function (start, end) {
	let error = "ERROR";
	if (start < 0 || end < 0) {
		return error;
	} else if (!(typeof start === "number") || typeof end !== "number") {
		return error;
	} else if (!Number.isInteger(start) || !Number.isInteger(end)) {
		return error;
	}

	let sum = 0;
	if (start < end) {
		for (let i = start; i <= end; i++) {
			sum += i;
		}
	} else {
		for (let i = end; i <= start; i++) {
			sum += i;
		}
	}
	return sum;
};

// Do not edit below this line
module.exports = sumAll;
