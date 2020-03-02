
'use strict';

class Perks extends Array {

}

let a1 = Perks.from([5, 10, 15]);

console.log(a1);
console.log(a1 instanceof Perks);



console.log(a1.length);



let newArr1 = a1.reverse();
console.log(newArr1);
console.log(newArr1 instanceof Perks);



console.log(newArr1 instanceof Array);



class Perks2 extends Array {
	sum() {
		let total = 0;
		this.map( v => total += v );
		return total;
	}
}

let a2 = Perks2.from([5, 10, 15]);
console.log(a2);
console.log(a2.sum());





