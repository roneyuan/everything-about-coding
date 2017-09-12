/*
O(1) --> Adding/removing head/tail
O(n) --> Searhing linkedlist

Memory Mangement Benefit
- Data does not have to be stored together
- Data will will reference to other data using pointer to point the location
*/

function LinkedList() {
	this.head = null;
	this.tail = null;
}

function Node(value, next, prev) {
	this.value = value;
	this.next = next;
	this.prev = prev;
}

LinkedList.prototype.addToHead = function(value) {
	let newNode = new Node(value, this.head, null);

	/*
		If head exist, the previous pointer of current head will be newNode
		If head is empty, tail will be newNode because it is the only node
	*/
	if (this.head) {
		this.head.prev = newNode;
	} else {
		this.tail = newNode;
	}

	this.head = newNode;
}

LinkedList.prototype.addToTail = function(value) {
	let newNode = new Node(value, null, this.tail);
	
	if (this.tail) {
		this.tail.next = newNode;
	} else {
		this.head = newNode
	}

	this.tail = newNode;
}

LinkedList.prototype.removeHead = function() {
	if (!this.head) {
		return null;
	}

	let val = this.head.value;
	this.head = this.head.next;

	/*
		If head now is exist, the previous pointer of current head will be assign null
		Or else it means that it is the only node and it is removed, so we need to assign tail to null
	*/
	if (this.head) {
		this.head.prev = null
	} else {
		this.tail = null;
	}

	// Return removed value
	return val;
}

LinkedList.prototype.removeTail = function() {
	if (!this.tail) {
		return null;
	}

	let val = this.tail.value;
	this.tail = this.tail.prev;

	if (this.tail) {
		this.tail.next = null;
	} else {
		this.head = null;
	}

	return val;
}

LinkedList.prototype.search = function(searchValue) {
	let currentNode = this.head;

	while (currentNode) {
		if (currentNode.value === searchValue) {
			return currentNode.value;
		}
		currentNode = currentNode.next;
	}

	return null;
}

LinkedList.prototype.indexOf = function(value) {
	let currentNode = this.head;
	let currentIndex = 0;
	let result = [];

	while (currentNode) {
		if (currentNode.value === value) {
			result.push(currentIndex);
		}

		currentIndex += 1;
		currentNode = currentNode.next;
	}

	return currentIndex;
}
