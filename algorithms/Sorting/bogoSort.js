let numberOfTries = 0;

exports.bogoSort = (array) => {
	/**
	 * randomly re-order the array untill it is ordered
	 */
	while (!this.recursiveSortVerify(array)) {
		array.sort(() => Math.random() - 0.5);
		console.log(numberOfTries);
		numberOfTries++;
	}
	return array;
};
exports.recursiveSortVerify = (array) => {
	/**
	 * Check if the array is sorted and return a boolean
	 */
	const length = array.length;
	// Recursion exit
	if (length == 0 || length == 1) return true;

	return (
		array[0] < array[1] && this.recursiveSortVerify(array.slice(1, length))
	);
};
