import { Observable, from, fromEvent } from 'rxjs';

let clicks$ = fromEvent(document, 'click');

clicks$.subscribe(
	(value) => console.log(value),
	(err) => console.log(`ERROR: ${err}`),
	() => console.log('All done.')
);





