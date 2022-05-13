const { verify } = require("./sortVerify");
const mergeSort = require("./mergeSort");
const bogoSort = require("./bogoSort");
const selectionSort = require("./selectionSort");
const quickSort = require("./quickSort");

module.exports = (array) => {
	array.sort(() => Math.random() - 0.5);
	console.log(`Unsorted Array: ${array}`);
	// // Merge Sort
	// const sortedArray = mergeSort(arrayUnsorted);

	// // Bogo Sort
	// const bogoArray = [5, 1, 8, 3, 10];
	// const sortedArray = bogoSort(bogoArray);

	// // Selection Sort
	// const sortedArray = selectionSort(arrayUnsorted);

	// Quick Sort
	const sortedArray = quickSort(array);

	if (verify(sortedArray)) console.log(`Sorted Array: ${sortedArray}`);
	else console.log("Array is unsorted");
};
