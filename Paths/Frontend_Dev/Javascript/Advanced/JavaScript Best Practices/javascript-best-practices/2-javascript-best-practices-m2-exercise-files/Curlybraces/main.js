function service() {
	var get = function () {
		console.log('get');
	};

	var set = function () {
		console.log('set');
	};

	return  
	{
		get: get,
		set: set
	};
}

var serv = service();

serv.get();