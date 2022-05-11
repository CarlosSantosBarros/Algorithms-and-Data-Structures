const { list } = require("./LinkedList");
const mergeSort = require("../algorithms/Sorting/mergeSort_LinkedList");
exports.linkedList = () => {
	function verifyListSearch(result) {
		if (result) console.log("Found item in list");
		else console.log("Did not find item");
	}

	console.log(`Original LinkedList: \n ${list}`);
	list.insert(50, 5);
	console.log(`LinkedList with Value "50" inserted at index "5": \n${list}`);
	list.remove(7);
	console.log(`LinkedList with first Value "7" removed: \n${list}`);
	console.log(`Search for Value "50"`);
	const result = list.search(50);
	verifyListSearch(result);
	list.removeAtIndex(7);
	console.log(`LinkedList with Value at index "7" removed: \n${list}`);
	list.removeInstancesOf(8);
	console.log(`LinkedList with all instances of Value "8" removed: \n${list}`);
	const sortedLinkedList = mergeSort(list);
	console.log(`Sorted LinkwsLiar: \n${sortedLinkedList}`);
};
