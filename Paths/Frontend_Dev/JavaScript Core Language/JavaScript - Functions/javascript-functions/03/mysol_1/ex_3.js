
let message1 = {
	name: 'James',
	regularFunc: function() {
		console.log(this);
		console.log('Hellow ' + this.name);
	},
	arrowFunc: () => {
		console.log(this);
		console.log('Hi ' + this.name)
	}
}

message1.regularFunc();
message1.arrowFunc();




