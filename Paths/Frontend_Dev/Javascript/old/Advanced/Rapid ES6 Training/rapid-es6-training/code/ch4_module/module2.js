
// export let projectId = 201;



/*export let project = {
	projectId: 99
};*/



/*export let project = {
	projectId: 99
};

export function showProject() {
	console.log(project.projectId);
}*/



export function showProject() {
	console.log("in orig");
}

export function updateFunction() {
	showProject = function() {
		console.log("in update");
	};
}




