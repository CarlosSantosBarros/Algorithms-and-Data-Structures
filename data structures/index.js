exports.linkedList = () => {
	const { LinkedList } = require("./LinkedList");

	const list = new LinkedList();
	list.add(1);
	list.add(8);
	list.add(2);
	list.add(3);
	list.add(4);
	list.add(8);
	list.add(5);
	list.add(6);
	list.add(7);
	list.add(8);
	list.add(9);
	list.add(10);
	list.add(8);
	console.log(`${list}`);
	list.insert(50, 5);
	console.log(`${list}`);
	list.remove(7);
	console.log(`${list}`);
	list.removeAtIndex(7);
	console.log(`${list.size()}`);
	// const result = list.search(50);
	function verifyListSearch(result) {
		if (result) console.log("Found item in list");
		else console.log("Did not find item");
	}
	// verifyListSearch(result);
	console.log(`${list}`);
	list.removeInstancesOf(8);
	console.log(`${list}`);
	// console.log(`${result}`);
};
