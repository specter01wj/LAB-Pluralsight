import { Observable, of, from, fromEvent, concat } from 'rxjs';
import { allBooks, allReaders } from './data';


let observer = {
	next: (value) => console.log(value),
	error: (error) => console.log(`ERROR: ${error}`),
	complete: () => console.log(`All done!`)
};


let button = document.getElementById('readersBtn');

let clicks$ = fromEvent(button, 'click');


clicks$.subscribe(observer);


