module.exports = function binarySearch(array, target) {
	let first = 0;
	let last = array.length - 1;
	while (first <= last) {
		let middle = Math.floor((first + last) / 2);
		// console.log(array[middle]);
		// console.log(target);
		if (array[middle] === target) return middle;
		else if (array[middle] < target) first = middle + 1;
		else last = middle - 1;
	}
	return "None";
};
