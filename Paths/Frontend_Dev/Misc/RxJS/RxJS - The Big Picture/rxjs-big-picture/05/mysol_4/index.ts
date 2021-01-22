import { Observable, from, fromEvent } from 'rxjs';

let clicks$ = fromEvent(document, 'click');


let observer = {
	next: (value) => console.log(value),
	error: (error) => console.log(`ERROR: ${error}`),
	complete: () => console.log(`All done!`)
};


clicks$.subscribe(observer);








