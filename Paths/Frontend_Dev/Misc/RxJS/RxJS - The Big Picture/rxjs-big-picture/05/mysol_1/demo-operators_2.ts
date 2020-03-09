import { Observable, from, fromEvent } from 'rxjs';
import { pluck, timeInterval } from 'rxjs/operators';

let clicks$ = fromEvent(document, 'click');

clicks$.pipe(
	pluck('clientX'),
	timeInterval()
)
.subscribe(
	(value) => console.log(value),
	(err) => console.log(`ERROR: ${err}`),
	() => console.log('All done.')
);





