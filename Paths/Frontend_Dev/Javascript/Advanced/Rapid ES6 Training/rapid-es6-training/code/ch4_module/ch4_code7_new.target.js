'use strict';

/*class Project {
	constructor() {
		console.log(typeof new.target);
	}
}

var p = new Project();*/



/*class Project {
	constructor() {
		console.log(new.target);
	}
}

var p = new Project();*/



class Project {
	constructor() {
		console.log(new.target);
	}
}

class SoftwareProject extends Project {
	constructor() {
		super();
	}
}

var p = new SoftwareProject();














