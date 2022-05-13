// Recursive sort

/**
 *
 * @param {Array} array
 * @returns {Array}
 */
module.exports = function quickSort(array) {
	// Base case
	if (array.length <= 1) return array;

	const pivot = array.shift();
	const smallerThan = [];
	const greaterThan = [];

	while (array.length) {
		const item = array.shift();
		if (item <= pivot) smallerThan.push(item);
		else greaterThan.push(item);
	}

	return array.concat(quickSort(smallerThan), pivot, quickSort(greaterThan));
};
