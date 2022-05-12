// Recursive verify
exports.verify = (array) => {
	/**
	 * Check if the array is sorted and return a boolean
	 */
	const length = array.length;
	// Recursion exit
	if (length == 0 || length == 1) return true;

	return array[0] < array[1] && this.verify(array.slice(1, length));
};
