/**
 *
 * @param {Array} unsorted
 * @returns {Array}
 */
module.exports = function selectionSort(unsorted) {
	/**
	 * Run loop while there are unsorted numbers
	 */
	let sorted = [];
	while (unsorted.length) {
		const indexOfSmallest = findSmallestIndex(unsorted);
		// Use index to remove and return the value and place it in the new Array
		sorted.push(unsorted.splice(indexOfSmallest, 1).pop());
	}
	return sorted;
};

function findSmallestIndex(array) {
	/**
	 * Find the smallest number by using the index as a bookmark
	 * Return index
	 */
	let smallestIndex = 0;
	let index = 1;
	while (index < array.length) {
		if (array[smallestIndex] > array[index]) {
			smallestIndex = index;
		}
		index++;
	}
	return smallestIndex;
}
