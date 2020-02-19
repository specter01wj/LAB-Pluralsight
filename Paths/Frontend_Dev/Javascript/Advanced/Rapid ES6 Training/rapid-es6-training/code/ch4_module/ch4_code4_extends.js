'use strict';

/*class Project {
	constructor() {
		console.log('constructing Project');
	}
}

class SoftwareProject extends Project {

}

let p = new SoftwareProject();*/



/*class Project {
	constructor(name) {
		console.log('constructing Project: ' + name);
	}
}

class SoftwareProject extends Project {

}

let p = new SoftwareProject('Maza');*/



class Project {
	constructor() {
		console.log('constructing Project');
	}
}

class SoftwareProject extends Project {
	constructor() {
		super();
		console.log('constructing SoftwareProject');
	}
}

let p = new SoftwareProject();



/*class Project {
	constructor() {
		console.log('constructing Project');
	}
}

class SoftwareProject extends Project {
	constructor() {
		// super();
		console.log('constructing SoftwareProject');
	}
}

let p = new SoftwareProject();*/





















