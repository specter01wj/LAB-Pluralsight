'use strict';

class Project {
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
console.log(p.location);

















