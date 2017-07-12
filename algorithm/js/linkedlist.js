class LinkedList {

	/* Initialize the linkedlist */
	constructor() {
		this.length = 0;
		this.head = null;
	}

	/* Get the value of the node by index */
	get(index) {
		if (index < 0 || index >= this.length) {
			throw new Error('Index error');
		}

		return this._find(index).value;
	}

	/* Insert the node by passing the index and value  */
	insert(index, value) {
		// If index is smaller than 0 or larger than the length, that means it is invalid index
		if (index < 0 || index > this.length) {
			throw new Error('Index error');
		}

		// Initialize a new node
		const newNode = {
			value // ES6: value: value
		};

		/* 
			If you are inserting the node to the head, you only need to change current head to node you insert. 
			Of course, you need to change current node's next to previous head.

			If you are inserting the node to other index, you need to change previous node's next to current node 
			you are inserting.
		*/
		if (index == 0) {
			newNode.next = this.head;
			this.head = newNode;
		} else {
			const prevNode = this._find(index - 1);
			newNode.next = prevNode.next;
			prevNode.next = newNode;
		}

		this.length++;
	}

	remove(index) {
		if (index < 0 || index >= this.length) {
			throw new Error('Index error');
		}

		if (index == 0) {
			this.head = this.head.next;
		} else {
			const node = this._find(index - 1);
			node.next = node.next.next;
		}

		this.length--;
	}

	_find(index) {
		/* 
			1. Create a variable node to head, and it is going to start looping from the head (node)
			2. The end of the loop is the index that is passed in from the parameter
			3. It is goind to use for loop to go through all the linkedlist from the head, which is 'node'
			4. Once it reaches the end of the loop, the node is the one we are looling for
			5. Return the node
		*/
		let node = this.head;

		for (let i=0; i<index; i++) {
			node = node.next;
		}

		return node;
	}

	// Future implementatoin
	reverse() {

	}

}


let linkedlist = new LinkedList();

linkedlist.insert(0, 0);
linkedlist.insert(0, 1);
linkedlist.insert(0, 2);

/*
Write an algorithm to find the middle element of a linked list without using the .length property
Write an algorithm to find the third element from the end of a linked list without using the .length property
Write an algorithm to reverse a linked list
Write an algorithm to find whether a linked list has a cycle (i.e. whether a node in the list has its next value pointing to an earlier node in the list)
*/

