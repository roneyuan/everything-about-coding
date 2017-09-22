function BinarySearchTree(value) {
	this.value = value;
	this.left = null;
	this.right = null;
}

BinarySearchTree.prototype.insert = function(value) {
	if (value <= this.value) {
		if (!this.left) this.left = new BinarySearchTree(value);
		else this.left.insert(value);
	} else if (value > this.value) {
		if (!this.right) this.right = new BinarySearchTree(value);
		else this.right.insert(value);
	}
}

BinarySearchTree.prototype.contains = function(value) {
	if (value === this.value) return true;
	else if (value < this.value) {
		if (!this.left) return false;
		else return this.left.contains(value);
	} else if (value > this.value) {
		if (!this.right) return false;
		else return this.right.contains(value);
	}
}

BinarySearchTree.prototype.inOrderDepthFirstTraversal = function(iteratorFunction) {
  if (this.left) this.left.inOrderDepthFirstTraversal(iteratorFunction);
  iteratorFunction(this.value);
  if (this.right) this.right.inOrderDepthFirstTraversal(iteratorFunction);
}

BinarySearchTree.prototype.preOrderDepthFirstTraversal = function(iteratorFunction) {
  iteratorFunction(this.value);
  if (this.left) this.left.inOrderDepthFirstTraversal(iteratorFunction);
  if (this.right) this.right.inOrderDepthFirstTraversal(iteratorFunction);
}

BinarySearchTree.prototype.postOrderDepthFirstTraversal = function(iteratorFunction) {
  if (this.left) this.left.inOrderDepthFirstTraversal(iteratorFunction);
  if (this.right) this.right.inOrderDepthFirstTraversal(iteratorFunction);
  iteratorFunction(this.value);
}



BinarySearchTree.prototype.breadthFirstTraversal = function(iteratorFunction) {
  let queue = [this];

  while(queue.length) {
    let treeNode = queue.shift();
    iteratorFunction(treeNode);
    if (treeNode.left) queue.push(treeNode.left);
    if (treeNode.right) queue.push(treeNode.right);
  }
}

BinarySearchTree.prototype.getMinValue = function() {
  if (this.left) return this.left.getMinValue();
  else return this.value;
}

BinarySearchTree.prototype.getMaxValue = function() {
  if (this.right) return this.right.getMaxValue();
  else return this.value;
}






function log(value) {
  console.log(value);
}

function log2(node) {
  console.log(node.value);
}


let bst = new BinarySearchTree(50);
bst.insert(30);
bst.insert(70);
bst.insert(100);
bst.insert(60);
bst.insert(55);
bst.insert(20);
bst.insert(35);
bst.insert(45);
bst.insert(85);
bst.insert(105);
bst.insert(10);

bst.contains(15);

bst.inOrderDepthFirstTraversal(log);
bst.preOrderDepthFirstTraversal(log);
bst.postOrderDepthFirstTraversal(log);

bst.breadthFirstTraversal(log2);

console.log("MIN:", bst.getMinValue());
console.log("MAX:", bst.getMaxValue());