import { Observable, from, fromEvent } from 'rxjs';
import { pluck } from 'rxjs/operators';

let clicks$ = fromEvent(document, 'click');

/*clicks$.subscribe(
	(value) => console.log(value),
	(err) => console.log(`ERROR: ${err}`),
	() => console.log('All done.')
);*/

clicks$.pipe(
	pluck('clientX')
)
.subscribe(
	(value) => console.log(value),
	(err) => console.log(`ERROR: ${err}`),
	() => console.log('All done.')
);





