function HashTable(size) {
  this.buckets = Array(size);
  this.numOfBuckets = this.buckets.length;
}

function HashNode(key, value, next) {
  this.key = key;
  this.value = value;
  this.next = next || null;
}

HashTable.prototype.hash = function(key) {
  let total = 0;
  for (let i = 0; i < key.length; i++) {
    total += key.charCodeAt(i);
  }

  let bucket = total % this.numOfBuckets;

  return bucket;
}

HashTable.prototype.insert = function(key, value) {
  // Figure out which bucket to go
  let indexOfBucket = this.hash(key);
  if (!this.buckets[indexOfBucket]) this.buckets[indexOfBucket] = new HashNode(key, value);
  else if (this.buckets[indexOfBucket].key === key) {
    // Update the info if they key is existed in the hash table
    this.buckets[indexOfBucket].value = value;
  } else {
    let currentNode = this.buckets[indexOfBucket];

    // Travese the list until find the last one
    while (currentNode.next) {
      if (currentNode.next.key === key) {
        currentNode.next.value = value;
        return;
      }
      currentNode = currentNode.next;
    }

    currentNode.next = new HashNode(key, value);
  } 
}

HashTable.prototype.get = function(key) {
  let indexOfBucket = this.hash(key);
  if (!this.buckets[indexOfBucket]) return null;
  else {
    let currentNode = this.buckets[indexOfBucket];

    while (currentNode) {
      if (currentNode.key === key) return currentNode.value;
      currentNode = currentNode.next;
    }

    return null;
  }
}

HashTable.prototype.retrieveAll = function() {
  let allNodes = [];
  for (let i = 0; i < this.numOfBuckets; i++) {
    let currentNode = this.buckets[i];
    while (currentNode) {
      allNodes.push(currentNode);
      currentNode = currentNode.next;
    }
  }

  return allNodes;  
}


let ht = new HashTable(30);

ht.insert("Test", 1);
ht.insert("exam", 2);
ht.insert("maxe", 1);
ht.insert("Test", 5);

ht.get("maxe");

ht.retrieveAll();
