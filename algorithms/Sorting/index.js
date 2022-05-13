const { verify } = require("./sortVerify");
const mergeSort = require("./mergeSort");
const bogoSort = require("./bogoSort");
const selectionSort = require("./selectionSort");
const quickSort = require("./quickSort");

const arrayUnsorted = [5, 1, 8, 6, 3, 10, 6, 2, 3, 9, 7, 4];

// // Merge Sort
// const sortedArray = mergeSort(arrayUnsorted);

// // Bogo Sort
// const bogoArray = [5, 1, 8, 3, 10];
// const sortedArray = bogoSort(bogoArray);

// // Selection Sort
// const sortedArray = selectionSort(arrayUnsorted);

// Quick Sort
const sortedArray = quickSort(arrayUnsorted);

console.log(verify(sortedArray));
console.log(`Sorted Array: ${sortedArray}`);
