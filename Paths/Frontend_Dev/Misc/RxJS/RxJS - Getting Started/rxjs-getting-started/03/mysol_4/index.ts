import { Observable, of, from, fromEvent, concat } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { allBooks, allReaders } from './data';


let observer = {
	next: (value) => {
		ajax('/api/readers')
			.subscribe(ajaxRes => {
				console.log(ajaxRes);
			});
		
		/*let readersDiv = document.getElementById('readers');
		for(let reader of allReaders) {
			readersDiv.innerHTML += reader.name + '<br>';
		}*/
	},
	error: (error) => console.log(`ERROR: ${error}`),
	complete: () => console.log(`All done!`)
};


let button = document.getElementById('readersBtn');

let clicks$ = fromEvent(button, 'click');


clicks$.subscribe(observer);


