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



/*class Project {
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

let p = new SoftwareProject();*/



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



/*class Project {
	// constructor() {
	// 	console.log('constructing Project');
	// }
}

class SoftwareProject extends Project {
	constructor() {
		// super();
		console.log('constructing SoftwareProject');
	}
}

let p = new SoftwareProject();*/



/*class Project {
	getTaskCount() {
		return 50;
	}
}

class SoftwareProject extends Project {
	
}

let p = new SoftwareProject();
console.log(p.getTaskCount());*/



/*class Project {
	getTaskCount() {
		return 50;
	}
}

class SoftwareProject extends Project {
	getTaskCount() {
		return 66;
	}
}

let p = new SoftwareProject();
console.log(p.getTaskCount());*/



/*class Project {
	getTaskCount() {
		return 50;
	}
}

class SoftwareProject extends Project {
	getTaskCount() {
		return super.getTaskCount() + 6;
	}
}

let p = new SoftwareProject();
console.log(p.getTaskCount());*/



let project = {
	getTaskCount() {
		return 50;
	}
}

let softwareProject = {
	getTaskCount() {
		return super.getTaskCount() + 7;
	}
}

Object.setPrototypeOf(softwareProject, project);
console.log(softwareProject.getTaskCount());










