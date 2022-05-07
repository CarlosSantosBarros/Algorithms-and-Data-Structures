// Unsorted and sorted 10 entry array
const arraySorted = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const mergeSort = require("./algorithms/Sorting/mergeSort_LinkedList");
// require("./algorithms/Search")(arraySorted, null);
// require("./algorithms/Sorting");
// const { linkedList } = require("./data structures/");
// linkedList();
const { LinkedList } = require("./data structures/LinkedList.js");

const list = new LinkedList();
list.add(3);
list.add(8);
list.add(5);
list.add(1);
list.add(7);
list.add(2);
list.add(10);
list.add(6);
list.add(9);
list.add(4);
console.log(`${list}`);

const sortedLinkedList = mergeSort(list);
console.log(`${sortedLinkedList}`);
