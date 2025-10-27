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



/*class Project {
	constructor() {
		console.log(new.target);
	}
}

class SoftwareProject extends Project {
	constructor() {
		super();
	}
}

var p = new SoftwareProject();*/



/*class Project {
	constructor() {
		console.log(new.target);
	}
}

class SoftwareProject extends Project {

}

var p = new SoftwareProject();*/



class Project {
	constructor() {
		console.log(new.target.getDefaultId());
	}
}

class SoftwareProject extends Project {
	static getDefaultId() {
		return 99;
	}
}

var p = new SoftwareProject();














