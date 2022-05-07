module.exports = function linearSearch(array, target) {
	/**
	 * Search array for @param target position or return false if not found
	 */

	for (let index = 0; index < array.length; index++) {
		if (array[index] == target) return index;
	}
	return "None";
};
