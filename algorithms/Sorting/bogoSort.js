const { recursiveSortVerify } = require("./sortVerify");

exports.bogoSort = (array) => {
	/**
	 * randomly re-order the array untill it is ordered
	 */
	let numberOfTries = 0;
	while (!recursiveSortVerify(array)) {
		array.sort(() => Math.random() - 0.5);
		console.log(numberOfTries);
		numberOfTries++;
	}
	return array;
};
