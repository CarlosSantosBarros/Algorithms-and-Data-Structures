const showWork = false;
const showOperations = false;
let splits = 0;
let merges = 0;
let mergeSorts = 0;
let sorts = 0;
module.exports = function mergeSort(array) {
	if (showWork) console.log(`Unsorted: ${array}`);
	/**
	 * Sorts an array in ascending order and returns a new sorted array.
	 *
	 * Divide: Find the midpoint of the list and divide into sub-arrays
	 * Conquer: Recursively sor the sub-arrays created in the previous step
	 * Combine: Merge the sorted sub-arrats created in the previous step
	 */

	// Recursion exit
	if (array.length <= 1) return array;

	const { leftHalf, rightHalf } = split(array);
	const left = mergeSort(leftHalf);
	const right = mergeSort(rightHalf);
	mergeSorts++;
	if (showOperations)
		console.log(
			`mergeSorts: ${mergeSorts} splits: ${splits} merges: ${merges} sorts: ${sorts} `
		);
	return merge(left, right);
};
function split(array) {
	/**
	 * Devide the unsorted array at midpoint into sublists and return a left and right sub-array
	 */
	const middle = array.length / 2;
	// Iterative solution could go here
	const left = array.slice(0, middle);
	const right = array.slice(middle, array.length);
	splits++;
	return {
		leftHalf: left,
		rightHalf: right,
	};
}
function merge(left, right) {
	/**
	 * Merge two arrays sorting them in the process and return a new array
	 */
	let returnedArray = [];
	let leftIndex = 0;
	let rightIndex = 0;
	while (leftIndex < left.length && rightIndex < right.length) {
		if (left[leftIndex] < right[rightIndex]) {
			returnedArray.push(left[leftIndex]);
			leftIndex++;
			sorts++;
		} else {
			returnedArray.push(right[rightIndex]);
			rightIndex++;
			sorts++;
		}
	}
	while (leftIndex < left.length) {
		returnedArray.push(left[leftIndex]);
		leftIndex++;
		sorts++;
	}
	while (rightIndex < right.length) {
		returnedArray.push(right[rightIndex]);
		rightIndex++;
		sorts++;
	}
	if (showWork) console.log(`Sorted: ${returnedArray}`);
	merges++;
	return returnedArray;
}
