class ListNode {
	/**
	 * An object for storing a single entry/node in a (Single) linked list
	 * Has two attributes, the data stored and the next node in the list
	 */
	constructor(data, next = null) {
		this.data = data;
		this.nextNode = next;
	}
	toString() {
		return `Node Data: ${this.data}`;
	}
}

exports.LinkedList = class {
	/**
	 * Single linked list
	 */
	constructor() {
		this.head;
	}
	isEmpty() {
		return this.head == null;
	}
	size() {
		/**
		 * Retuns number of nodes
		 * O(n) (Linear)
		 */
		let current = this.head;
		let count = 0;
		while (current) {
			count++;
			current = current.nextNode;
		}
		return count;
	}
	add(data) {
		/**
		 * Add new Node containing data at the head of the list
		 */
		let newNode = new ListNode(data);
		newNode.nextNode = this.head;
		this.head = newNode;
	}
	search(target) {
		/**
		 * Search first node containing target
		 *
		 * O(n)
		 */
		let current = this.head;
		while (current) {
			if (current.data == target) return current;
			current = current.nextNode;
		}
		return false;
	}
	searchIndex(index) {
		if (index > this.size()) return console.log("Index is out of bounds");
		if (index == 0) return this.head;
		else {
			let current = this.head;
			let position = 0;

			while (position < index) {
				current = current.nextNode;
				position++;
			}
			return current;
		}
	}
	insert(data, index) {
		if (index > this.size()) return console.log("Index is out of bounds");
		if (index == 0) this.add(data);
		if (index > 0) {
			let newNode = new ListNode(data);

			let position = index;
			let current = this.head;

			while (position > 1) {
				current = current.nextNode;
				position--;
			}
			newNode.nextNode = current.nextNode;
			current.nextNode = newNode;
		}
	}
	remove(target) {
		/**
		 * Remove first node with data matching target
		 */

		let previus = null;
		let current = this.head.nextNode;
		let found = false;
		while (current && !found) {
			if (this.head.data == target) {
				found = true;
				this.head = this.head.nextNode;
			} else if (current.data == target) {
				found = true;
				previus.nextNode = current.nextNode;
			} else {
				previus = current;
				current = current.nextNode;
			}
		}
		return current;
	}
	removeInstancesOf(target) {
		if (this.head.data == target) this.head = this.head.nextNode;

		let previus = null;
		let current = this.head.nextNode;
		let numberOfInstances;
		while (current) {
			if (current.data == target) {
				previus.nextNode = current.nextNode;
				numberOfInstances++;
			}
			previus = current;
			current = current.nextNode;
		}
		return numberOfInstances;
	}
	removeAtIndex(index) {
		if (index > this.size()) return console.log("Index is out of bounds");
		if (index == 0) this.head = this.head.nextNode;
		if (index > 0) {
			let position = index;
			let current = this.head;
			while (position > 1) {
				if (!current) return current;
				current = current.nextNode;
				position--;
			}
			const indexNode = current.nextNode;
			current.nextNode = indexNode.nextNode;
		}
	}
	toString() {
		/**
		 * Returns a string representation of the list
		 * O(n)
		 */
		let nodes = [];
		let current = this.head;
		while (current) {
			if (current == this.head) nodes.push(`[Head: ${current.data}]`);
			else if (current.nextNode == null) nodes.push(`[Tail: ${current.data}]`);
			else nodes.push(`[${current.data}]`);
			current = current.nextNode;
		}
		return nodes.join("->");
	}
};
