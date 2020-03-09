import { Observable, from, fromEvent } from 'rxjs';

let num$ = from([-2, -1, 0, 1, 2]);

let observer = {
	next: value => console.log(value),
	error: err => console.log(`ERROR: ${err}`),
	complete: () => console.log('All done.')
};

num$.subscribe(observer);






