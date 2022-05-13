module.exports = function binarySearch(array, target) {
	let first = 0;
	let last = array.length - 1;
	while (first <= last) {
		const middle = Math.floor((first + last) / 2);
		if (array[middle] === target) return middle;
		else if (array[middle] < target) first = middle + 1;
		else last = middle - 1;
	}
	return null;
};
