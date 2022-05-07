const binarySearch = require("./binarySearch");
const binarySearch_recursive = require("./binarySearch_recursive");
const linearSearch = require("./linearSearch");

function verifySearch(index) {
	if (index === true) console.log("Found target");
	else if (index != "None") console.log(`Found target at index: ${index}`);
	else console.log("Target not found " + index);
}

module.exports = (arraySorted, searchType) => {
	let result;
	switch (searchType) {
		case "binary":
			result = binarySearch(arraySorted, 7);
			break;
		case "binary_recursive":
			result = binarySearch_recursive(arraySorted, 2);
			break;
		default:
			result = linearSearch(arraySorted, 5);
			break;
	}
	verifySearch(result);
};
