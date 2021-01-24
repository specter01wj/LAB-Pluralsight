import { Observable, of, from, fromEvent } from 'rxjs';
import { allBooks, allReaders } from './data';


let observer = {
	next: (value) => console.log(value),
	error: (error) => console.log(`ERROR: ${error}`),
	complete: () => console.log(`All done!`)
};


let source1$ = of('hello', 10, true, allReaders[0].name);

source1$.subscribe(observer);


let source2$ = of(allBooks);

source2$.subscribe(observer);








