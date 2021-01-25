import { Observable, of, from, fromEvent, concat, interval } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { allBooks, allReaders } from './data';


let source$ = of(1, 2, 3, 4, 5);

/*let doubler = map(value => value * 2);

let doubled$ = doubler(source$);

doubled$.subscribe(
	value => console.log(value)
);*/

/*source$
	.map(value => value * 2)
	.filter(mappedValue => mappedValue > 5)
	.subscribe(
		finalValue => console.log(finalValue)
	);*/


source$.pipe(
	map(value => value * 2),
	filter(mappedValue => mappedValue > 5)
)
.subscribe(
	finalValue => console.log(finalValue)
);

