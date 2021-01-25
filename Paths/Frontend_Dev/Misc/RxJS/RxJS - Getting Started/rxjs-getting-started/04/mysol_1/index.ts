import { Observable, of, from, fromEvent, concat } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { allBooks, allReaders } from './data';


let books$ = from(allBooks);


let booksObserver = {
	next: (value) => console.log(`Title: ${value.title}`),
	error: (error) => console.log(`ERROR: ${error}`),
	complete: () => console.log(`All done!`)
};


books$.subscribe(booksObserver);


















