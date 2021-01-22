import { Observable, from, fromEvent } from 'rxjs';
import { pluck } from 'rxjs/operators';


let clicks$ = fromEvent(document, 'click');


let observer = {
	next: (value) => console.log(value),
	error: (error) => console.log(`ERROR: ${error}`),
	complete: () => console.log(`All done!`)
};


clicks$
	.pipe(
		pluck('clientX')
	)
	.subscribe(observer);








