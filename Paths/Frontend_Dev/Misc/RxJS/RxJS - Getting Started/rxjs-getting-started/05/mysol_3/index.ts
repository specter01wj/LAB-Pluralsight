import { Observable, of, from, fromEvent, concat, interval } from 'rxjs';
import { mergeMap, map, filter, tap, catchError } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { allBooks, allReaders } from './data';



// ajax('/api/books')
ajax('/api/errors/500')
	.pipe(
		mergeMap(ajaxRes => ajaxRes.response),
		filter(book => book.publicationYear < 1950),
		tap(oldBook => console.log(`Title: ${oldBook.title}`)),
		// catchError(err => of({title: 'Corduroy', author: 'James Wang'}))
		catchError(err => throw `Something bad happened - ${err.message}` )
	)
	.subscribe(
		finalValue => console.log(`VALUE: ${finalValue.title}`),
		error => console.log(`ERROR: ${error}`)
	);














