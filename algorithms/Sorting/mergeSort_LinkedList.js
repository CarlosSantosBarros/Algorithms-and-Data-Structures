const { LinkedList } = require("../../data structures/LinkedList");
const showWork = false;
const showOperations = false;
let splits = 0;
let merges = 0;
let mergeSorts = 0;
let sorts = 0;

module.exports = function mergeSort(linkedList) {
	/**
	 * Recursively "split" the linked list into single node sublists
	 * Re-merges single node sublists into one sorted list and return
	 */

	// Base case
	if (linkedList.size() === 1) return linkedList;
	else if (linkedList.isEmpty()) return linkedList;

	const { leftHalf, rightHalf } = split(linkedList);
	const left = mergeSort(leftHalf);
	const right = mergeSort(rightHalf);
	mergeSorts++;
	if (showOperations)
		console.log(
			`mergeSorts: ${mergeSorts} splits: ${splits} merges: ${merges} sorts: ${sorts} `
		);
	return merge(left, right);
};
function split(linkedList) {
	/**
	 * Devide the unsorted list at midpoint into sub-lists and return the left and right sub-lists
	 */
	let left;
	let right;

	if (!linkedList || linkedList.isEmpty()) {
		left = linkedList;
		right = null;
	} else {
		const size = linkedList.size();
		const middle = size / 2;
		const midNode = linkedList.searchIndex(middle - 1);
		right = new LinkedList();
		right.head = midNode.nextNode;
		midNode.nextNode = null;
		left = linkedList;
		/**
		 * search for node midpoint -1
		 * set right as middle node
		 * remove link of from middle -1
		 * set left as start of list - middle-1
		 */
	}

	splits++;
	return {
		leftHalf: left,
		rightHalf: right,
	};
}
function merge(left, right) {
	/**
	 * Merge two list sorting them in the process and return a new list
	 */
	let returnedList = new LinkedList();
	// Placeholder head
	returnedList.add(0);

	let current = returnedList.head;
	// Head nodes for both sides
	let leftNode = left.head;
	let rightNode = right.head;

	// loop over both lists untill the end of each
	while (leftNode || rightNode) {
		if (!leftNode) {
			current.nextNode = rightNode;
			// partial loop exit
			rightNode = rightNode.nextNode;
		} else if (!rightNode) {
			current.nextNode = leftNode;
			// partial loop exit
			leftNode = leftNode.nextNode;
		} else {
			if (leftNode.data < rightNode.data) {
				current.nextNode = leftNode;
				leftNode = leftNode.nextNode;
			} else {
				current.nextNode = rightNode;
				rightNode = rightNode.nextNode;
			}
		}
		current = current.nextNode;
	}
	const head = returnedList.head.nextNode;
	returnedList.head = head;
	if (showWork) console.log(`Sorted: ${returnedList}`);
	return returnedList;
}
