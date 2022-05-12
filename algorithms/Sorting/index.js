const mergeSort = require("./mergeSort");
const { bogoSort, recursiveSortVerify } = require("./bogoSort");

const arrayUnsorted = [5, 1, 8, 3, 10, 6, 2, 9, 7, 4];
const bogoArray = [5, 1, 8, 3, 10];
// const sortedArray = mergeSort(arrayUnsorted);
// console.log(recursiveSortVerify(sortedArray));
const sortedArray = bogoSort(bogoArray);
console.log(sortedArray);
