const mergeSort = require("./algorithms/Sorting/mergeSort");
function recursiveSortVerify(array) {
	/**
	 * Check if the array is sorted and return a boolean
	 */
	const length = array.length;
	// Recursion exit
	if (length == 0 || length == 1) return true;

	return array[0] < array[1] && recursiveSortVerify(array.slice(1, length));
}

const arrayUnsorted = [5, 1, 8, 3, 10, 6, 2, 9, 7, 4];
module.exports = () => {
	const sortedArray = mergeSort(arrayUnsorted);
	console.log(sortedArray);
	console.log(recursiveSortVerify(sortedArray));
};
