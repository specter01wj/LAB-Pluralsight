import { Observable, from, fromEvent } from 'rxjs';
import { pluck, timeInterval, map } from 'rxjs/operators';


let clicks$ = fromEvent(document, 'click');


let observer = {
	next: (value) => console.log(value),
	error: (error) => console.log(`ERROR: ${error}`),
	complete: () => console.log(`All done!`)
};


clicks$
	.pipe(
		pluck('clientX'),
		timeInterval(),
		map(clickInfo => `${clickInfo.interval / 1000} seconds (${clickInfo.value})`),
	)
	.subscribe(observer);








