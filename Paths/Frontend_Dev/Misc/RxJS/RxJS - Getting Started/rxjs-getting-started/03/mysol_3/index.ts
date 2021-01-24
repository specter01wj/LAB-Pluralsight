import { Observable, of, from, fromEvent, concat } from 'rxjs';
import { allBooks, allReaders } from './data';


let observer1 = {
	next: (value) => console.log(value),
	error: (error) => console.log(`ERROR: ${error}`),
	complete: () => console.log(`All done!`)
};

let observer2 = {
	next: (value) => console.log(value.title),
	error: (error) => console.log(`ERROR: ${error}`),
	complete: () => console.log(`All done!`)
};


let source1$ = of('hello', 10, true, allReaders[0].name);

source1$.subscribe(observer1);


let source2$ = from(allBooks);

source2$.subscribe(observer2);



concat(source1$, source2$)
	.subscribe(observer1);




