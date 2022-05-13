// Recursive verify
exports.verify = (array) => {
	/**
	 * Check if the array is sorted and return a boolean
	 */

	// null check
	if (!array) return "Empty";
	else {
		const length = array.length;
		// Base case
		if (length <= 1) return true;

		return array[0] <= array[1] && this.verify(array.slice(1, length));
	}
};
