'use strict';

/*class Project {
	constructor() {
		this.location = 'Maza';
	}
}

class SoftwareProject extends Project {
	constructor() {
		super();
	}
}

let p = new SoftwareProject();
console.log(p.location);*/



/*class Project {
	constructor() {
		let location = 'Maza';
	}
}

class SoftwareProject extends Project {
	constructor() {
		super();
	}
}

let p = new SoftwareProject();
console.log(p.location);*/



class Project {
	constructor() {
		this.location = 'Maza';
	}
}

class SoftwareProject extends Project {
	constructor() {
		super();
		this.location = this.location + ' Beach';
	}
}

let p = new SoftwareProject();
console.log(p.location);

















