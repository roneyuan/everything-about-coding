/************ 
** Promise **
*************/

let sayHi = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve("Hi");
	}, 1000);
});

let sayHiFaster = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve("Hi - Faster!");
	}, 500);
});

let sayNo = new Promise((resolve, reject) => {
	setTimeout(() => {
		reject("No");
	}, 500);
});

sayHi
	.then(message => console.log(message))

sayNo
	.then(message => console.log("Should go to catch error. This should not be logged"))
	.catch(error => console.log(error))

let whoIsFaster = Promise.race([sayHi, sayHiFaster]);
console.log("Who is faster?", whoIsFaster);
setTimeout(() => {
	console.log("I am faster", whoIsFaster);
}, 1200);

let launchAllPromises = Promise.all([sayHiFaster, sayHi]);
console.log("All Promises", launchAllPromises);
setTimeout(() => {
	console.log("Finished!", launchAllPromises)
}, 1200);


/*********** 
** String **
************/

const stringTemplate = `one plus one equal ${ 1+ 1 }`;

const buildList = `
	<ul>
		<li>1</li>
		<li>2</li>
	</ul>
`

const convertStringToArray = [...'apple']; // = ['a', 'p', 'p', 'l', 'e']

const repeatString = 'apple'.repeat(2); // = appleapple

const checkIfCharIsInString = 'apple'.includes('pp'); // = true


/*********** 
** Arrays **
************/

const [a, , b] = [1, 2, 3, 4, 5] // a = 1, b = 3
const [a, ...c] = [1, 2, 3, 4, 5] // a = 1. b = [2, 3, 4, 5]

const combinedArrays = [...c, 5, 6, 7, ...[1, 2, 3]];
console.log(combinedArrays);

const appendedArray = [...c, 6];
console.log(appendedArray);
const prependedArray = [6, ...c];
console.log(prependedArray);

const fill2SixTimesInArray = Array(6).fill(2);
console.log(fill2SixTimesInArray);

const checkIfElementInArray_String = fill2SixTimesInArray.includes("2");
console.log(checkIfElementInArray_String);
const checkIfElementInArray_Number = fill2SixTimesInArray.includes(2);
console.log(checkIfElementInArray_Number);


const arr = [1, 2, 2, 7, 3, 4, 5, 6, 7, 7, 7]
const findElementInArray = arr.find(elem => elem === 7);
console.log(findElementInArray);


/************ 
** Objects **
*************/

const { hello, hi: you } = { hello: 'world', hi: 'you'}
console.log(hello);
console.log(you);


const person = {
	hello,
	say() { console.log(this.hello) },	
}
console.log(person);

let copyPerson = Object.assign({}, person, { hello: 'earth' });
console.log(copyPerson);


/************** 
** Functions **
***************/


/************ 
** Classes **
*************/

class Animal {
	constructor(type, name) {
		this.type = type;
		this.name = name;
	}

	saySomething(sound) {
		console.log(`${this.type} say ${sound}`);
	}
}

class Dog extends Animal {
	constructor(name) {
		super('dog', name);
	}

	saySomething() {
		super.saySomething('woo');
	}

	static get colors() {
		return ['Black', 'Brown'];
	}
}

const wong = new Dog("Wong");
wong.saySomething();
Dog.colors[1];


/************ 
** Modules **
*************/

